import tulips from '../assets/catalog-card/tulips.jpg'
import pions from '../assets/catalog-card/pions.jpg'
import peonySeedlings from '../assets/catalog-card/peony-seedlings.jpg'
import conifers from '../assets/catalog-card/conifers.jpg'
import blueberry from '../assets/catalog-card/blueberry.jpg'
import strawberry from '../assets/catalog-card/strawberry.jpg'
import bulbous from '../assets/catalog-card/bulbous.jpg'
import peat from '../assets/catalog-card/peat.jpg'
import spruce from '../assets/catalog-card/spruce.jpg'
import fir from '../assets/catalog-card/fir.jpg'
import bulbousTulips from '../assets/catalog-card/bulbous-tulips.jpg'
import bulbousCrocus from '../assets/catalog-card/bulbous-crocus.jpg'
import bulbousHyacinth from '../assets/catalog-card/bulbous-hyacinth.jpg'
import bulbousNarcissus from '../assets/catalog-card/bulbous-narcissus.jpg'

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
    redirectPath: 'catalog/conifers',
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

export const conifersData = [
  { path: spruce, nameItem: 'ели', redirectPath: 'conifers/spruce' },
  { path: fir, nameItem: 'пихты', redirectPath: 'conifers/fir' },
]

export const bulbousData = [
  {
    path: bulbousTulips,
    nameItem: 'луковицы тюльпанов',
    redirectPath: 'bulbous/bulbous-tulips',
  },
  {
    path: bulbousCrocus,
    nameItem: 'луковицы крокусов',
    redirectPath: 'bulbous/bulbous-crocus',
  },
  {
    path: bulbousHyacinth,
    nameItem: 'луковицы геоцинтов',
    redirectPath: 'bulbous/bulbous-hyacinth',
  },
  {
    path: bulbousNarcissus,
    nameItem: 'луковицы нарциссов',
    redirectPath: 'bulbous/bulbous-narcissus',
  },
]
