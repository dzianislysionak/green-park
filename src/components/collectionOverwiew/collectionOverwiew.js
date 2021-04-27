import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import CollectionItem from '../collection-item/collection-item'
import { firestore } from '../../firebase'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: '80%',
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    // [theme.breakpoints.down('700')]: {
    //   width: '100%',
    // },
  },
}))

const CollectionOverwiew = ({ match }) => {
  const [collection, setCollection] = useState([])

  useEffect(() => {
    firestore
      .collection('catalog')
      .doc(match.params.collectionName)
      .collection(match.params.collectionName)
      .doc(match.params.subcollection)
      .collection('items')
      .onSnapshot((snapshot) => {
        const newCollection = snapshot.docs.map((doc) => ({
          desc: doc.data().desc,
          imageUrl: doc.data().imageUrl,
          price: doc.data().price,
          shortDesc: doc.data().shotDesc,
          sort: doc.data().sort,
          id: doc.id,
        }))

        setCollection(newCollection)
      })
  }, [match.params.collectionName, match.params.subcollection])

  const classes = useStyles()

  return (
    <Box className={classes.mainWrapper}>
      {collection.map((item) => (
        <CollectionItem
          img={item.imageUrl}
          sort={item.sort}
          shortDesc={item.shortDesc}
          price={item.price}
          key={item.id}
        />
      ))}
    </Box>
  )
}

export default CollectionOverwiew
