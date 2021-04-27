import React from 'react'
import { Route } from 'react-router-dom'

import CollectionOverwiew from '../../components/collectionOverwiew/collectionOverwiew'
import Subcollection from '../../components/subcollection/subcollection'

const Catalog = ({ match }) => {
  return (
    <div>
      <Route
        exact
        path={`${match.path}/:collectionName`}
        component={Subcollection}
      />
      <Route
        path={`${match.path}/:collectionName/:subcollection`}
        component={CollectionOverwiew}
      />
    </div>
  )
}

export default Catalog
