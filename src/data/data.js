import tulips from '../assets/catalog-card/tulips.jpg'
import pions from '../assets/catalog-card/pions.jpg'
import peonySeedlings from '../assets/catalog-card/peony-seedlings.jpg'
import conifers from '../assets/catalog-card/conifers.jpg'
import blueberry from '../assets/catalog-card/blueberry.jpg'
import strawberry from '../assets/catalog-card/strawberry.jpg'
import bulbous from '../assets/catalog-card/bulbous.jpg'
import peat from '../assets/catalog-card/peat.jpg'

export const homeData = [
  { path: tulips, nameItem: 'тюльпаны', redirectPath: 'catalog/tulips' },
  { path: pions, nameItem: 'пионы', redirectPath: 'catalog/pions' },
  {
    path: peonySeedlings,
    nameItem: 'саженцы пионов',
    redirectPath: 'catalog/peonySeedlings',
  },
  {
    path: conifers,
    nameItem: 'хвойные',
    redirectPath: 'catalog',
  },
  {
    path: blueberry,
    nameItem: 'голубика',
    redirectPath: 'catalog/blueberry',
  },
  {
    path: strawberry,
    nameItem: 'клубника в кашпо',
    redirectPath: 'catalog/strawberry',
  },
  {
    path: bulbous,
    nameItem: 'луковицы',
    redirectPath: 'catalog/bulbous',
  },
  { path: peat, nameItem: 'торф', redirectPath: 'catalog/peat' },
]
