import React, { useState } from 'react'
import { storage, firestore } from '../../firebase'

// let collect = [
//   {
//     collectionName: 'blueberry',
//     subcollections: [{ name: 'blueberry', items: [] }],
//   },
//   {
//     collectionName: 'bulbous',
//     subcollections: [
//       { name: 'bulbous-crocus', items: [] },
//       { name: 'bulbous-hyacinth', items: [] },
//       { name: 'bulbous-narcissus', items: [] },
//       { name: 'bulbous-tulips', items: [] },
//     ],
//   },
//   {
//     collectionName: 'conifers',
//     subcollections: [
//       { name: 'fir', items: [] },
//       { name: 'spruce', items: [] },
//     ],
//   },
//   { collectionName: 'peat', subcollections: [{ name: 'peat', items: [] }] },
//   {
//     collectionName: 'peonySeedlings',
//     subcollections: [{ name: 'peonySeedlings', items: [] }],
//   },
//   { collectionName: 'pions', subcollections: [{ name: 'pions', items: [] }] },
//   {
//     collectionName: 'strawberry',
//     subcollections: [{ name: 'strawberry', items: [] }],
//   },
//   { collectionName: 'tulips', subcollections: [{ name: 'tulips', items: [] }] },
// ]

// function useCollection() {
//   useEffect(() => {
//     collect.map((collectItem, idx) => {
//       collectItem.subcollections.map((subcollectItem, subIdx) => {
//         firestore
//           .collection('catalog')
//           .doc(collectItem.collectionName)
//           .collection(collectItem.collectionName)
//           .doc(subcollectItem.name)
//           .collection('items')
//           .onSnapshot((snapshot) => {
//             snapshot.docs.map((doc) => {
//               collect[idx].subcollections[subIdx].items.push({
//                 desc: doc.data().desc,
//                 imageUrl: doc.data().desc,
//                 price: doc.data().desc,
//                 shotDesc: doc.data().desc,
//                 sort: doc.data().desc,
//               })
//             })
//           })
//       })
//     })
//   }, [])

//   return collect
// }

const Admin = () => {
  // const collection = useCollection()
  const [collection, setCollection] = useState([])

  const [image, setImage] = useState(null)
  const [sort, setSort] = useState(null)
  const [shotDesc, setShotDesc] = useState(null)
  const [desc, setDesc] = useState(null)
  const [price, setPrice] = useState(null)
  const [collectTittle, setCollectTittle] = useState(null)
  const [subCollectTittle, setSubCollectTittle] = useState(null)

  const [updateImage, setUpdateImage] = useState(null)
  const [updateSotr, setUpdateSort] = useState(null)
  const [updateShortDesc, setUpdateShortDesc] = useState(null)
  const [updateDesc, setUpdateDesc] = useState(null)
  const [updatePrice, setUpdatePrice] = useState(null)

  const handleText = (e) => {
    switch (e.target.name) {
      case 'sort':
        setSort(e.target.value)
        break
      case 'shotDesc':
        setShotDesc(e.target.value)
        break
      case 'desc':
        setDesc(e.target.value)
        break
      case 'price':
        setPrice(e.target.value)
        break
      default:
        break
    }
  }

  const handleTextUpdate = (e) => {
    switch (e.target.name) {
      case 'sort':
        setUpdateSort(e.target.value)
        break
      case 'shotDesc':
        setUpdateShortDesc(e.target.value)
        break
      case 'desc':
        setUpdateDesc(e.target.value)
        break
      case 'price':
        setUpdatePrice(e.target.value)
        break
      default:
        break
    }
  }

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleImageUpdate = (e) => {
    if (e.target.files[0]) {
      setUpdateImage(e.target.files[0])
    }
  }

  const onSubmit = (collectTittle, subCollectTittle) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error)
      },
      async () => {
        await storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            firestore
              .collection('catalog')
              .doc(collectTittle)
              .collection(collectTittle)
              .doc(subCollectTittle)
              .collection('items')
              .add({
                imageUrl: url,
                price,
                shotDesc,
                desc,
                sort,
              })
          })
        await fetchCollectionItems(collectTittle, subCollectTittle)
        setImage(null)
        setDesc(null)
        setPrice(null)
        setSort(null)
        setShotDesc(null)
        window.location.reload()
      }
    )
  }

  const fetchCollectionItems = async (collectionNAme, subcollectionName) => {
    setCollectTittle(collectionNAme)
    setSubCollectTittle(subcollectionName)
    let collectRef = firestore
      .collection('catalog')
      .doc(collectionNAme)
      .collection(collectionNAme)
      .doc(subcollectionName)
      .collection('items')
    let collect = await collectRef.get()
    let newCollect = collect.docs.map((item) => {
      const id = { id: item.id }

      return { ...item.data(), ...id }
    })
    setCollection(newCollect)
  }

  const onItimeupdate = async (item) => {
    if (updateImage) {
      const uploadTask = storage
        .ref(`images/${updateImage.name}`)
        .put(updateImage)
      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          console.log(error)
        },
        async () => {
          await storage
            .ref('images')
            .child(updateImage.name)
            .getDownloadURL()
            .then((url) => {
              firestore
                .collection('catalog')
                .doc(collectTittle)
                .collection(collectTittle)
                .doc(subCollectTittle)
                .collection('items')
                .doc(item.id)
                .update({
                  imageUrl: url,
                  price: updatePrice ? updatePrice : item.price,
                  shotDesc: updateShortDesc ? updateShortDesc : item.shotDesc,
                  desc: updateDesc ? updateDesc : item.desc,
                  sort: updateSotr ? updateSotr : item.sort,
                })
              // .then(() =>
              //   fetchCollectionItems(collectTittle, subCollectTittle)
              // )
            })
          await fetchCollectionItems(collectTittle, subCollectTittle)
          setImage(null)
          setDesc(null)
          setPrice(null)
          setSort(null)
          setUpdateImage(null)
          window.location.reload()
        }
      )
    } else {
      await firestore
        .collection('catalog')
        .doc(collectTittle)
        .collection(collectTittle)
        .doc(subCollectTittle)
        .collection('items')
        .doc(item.id)
        .update({
          price: updatePrice ? updatePrice : item.price,
          shotDesc: updateShortDesc ? updateShortDesc : item.shotDesc,
          desc: updateDesc ? updateDesc : item.desc,
          sort: updateSotr ? updateSotr : item.sort,
        })
        .then(() => fetchCollectionItems(collectTittle, subCollectTittle))

      setImage(null)
      setDesc(null)
      setPrice(null)
      setSort(null)
      window.location.reload()
    }
  }

  const onDeleteItem = async (itemId) => {
    await firestore
      .collection('catalog')
      .doc(collectTittle)
      .collection(collectTittle)
      .doc(subCollectTittle)
      .collection('items')
      .doc(itemId)
      .delete()
      .then(() => fetchCollectionItems(collectTittle, subCollectTittle))
  }

  return (
    <div>
      <button onClick={() => fetchCollectionItems('tulips', 'tulips')}>
        тюльпаны
      </button>
      <button onClick={() => fetchCollectionItems('pions', 'pions')}>
        пионы
      </button>
      <button
        onClick={() => fetchCollectionItems('peonySeedlings', 'peonySeedlings')}
      >
        саженцы пионов
      </button>
      <button onClick={() => fetchCollectionItems('conifers', 'spruce')}>
        ели
      </button>
      <button onClick={() => fetchCollectionItems('conifers', 'fir')}>
        пихты
      </button>
      <button onClick={() => fetchCollectionItems('blueberry', 'blueberry')}>
        голубика
      </button>
      <button onClick={() => fetchCollectionItems('strawberry', 'strawberry')}>
        клубника в кашпо
      </button>
      <button onClick={() => fetchCollectionItems('bulbous', 'bulbous-tulips')}>
        луковицы тюльпанов
      </button>
      <button onClick={() => fetchCollectionItems('bulbous', 'bulbous-crocus')}>
        луковицы крокусов
      </button>
      <button
        onClick={() => fetchCollectionItems('bulbous', 'bulbous-hyacinth')}
      >
        луковицы геоцинтов
      </button>
      <button
        onClick={() => fetchCollectionItems('bulbous', 'bulbous-narcissus')}
      >
        луковицы нарциссов
      </button>
      <button onClick={() => fetchCollectionItems('peat', 'peat')}>торф</button>
      <h1>{collectTittle}</h1>
      <h2>{subCollectTittle}</h2>
      <ol>
        {collection.map((item) => {
          return (
            <li key={item.id} style={{ display: 'flex' }}>
              <div>
                <div>
                  <span>название:</span>
                  {item.sort}
                </div>
                <div>
                  <img
                    src={item.imageUrl}
                    alt={item.sort}
                    width='100px'
                    height='100px'
                  />
                </div>
                <div>
                  <span>краткое описание:</span>
                  {item.shotDesc}
                </div>
                <div>
                  <span>Описание:</span>
                  {item.desc}
                </div>
                <div>
                  <span>цена:</span>
                  {item.price}
                </div>
                <div>
                  <button onClick={() => onDeleteItem(item.id)}>Delete</button>
                </div>
              </div>
              <div>
                <input
                  name='sort'
                  placeholder={item.sort}
                  onChange={handleTextUpdate}
                />
                <span>название</span>
                <br />
                <textarea
                  name='shotDesc'
                  placeholder={item.shotDesc}
                  onChange={handleTextUpdate}
                />
                <span>краткое описание</span>
                <br />
                <textarea
                  name='desc'
                  placeholder={item.desc}
                  onChange={handleTextUpdate}
                />
                <span>описание</span>
                <br />
                <input
                  name='price'
                  placeholder={item.price}
                  onChange={handleTextUpdate}
                />
                <span>цена</span>
                <br />
                <input type='file' onChange={handleImageUpdate} />
                <br />
                <button onClick={() => onItimeupdate(item)}>Update</button>
              </div>
            </li>
          )
        })}
      </ol>
      {subCollectTittle && (
        <div style={{ border: '1px solid red' }}>
          <input type='text' name='sort' onChange={handleText} />
          Сорт
          <br />
          <textarea name='shotDesc' onChange={handleText} />
          Краткое описание
          <br />
          <textarea name='desc' onChange={handleText} />
          Описание
          <br />
          <input type='text' name='price' onChange={handleText} />
          Цена
          <br />
          <input type='file' onChange={handleImage} />
          <br />
          <button onClick={() => onSubmit(collectTittle, subCollectTittle)}>
            Добавить <span>{subCollectTittle}</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default Admin
