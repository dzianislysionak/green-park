import React from 'react'
import { Route } from 'react-router-dom'

import CollectionOverwiew from '../../components/collectionOverwiew/collectionOverwiew'

const Catalog = ({ match }) => {
  return (
    <div>
      <Route
        path={`${match.path}/:collectionName`}
        component={CollectionOverwiew}
      />
    </div>
  )
}

export default Catalog
