import React from 'react'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import { conifersData, bulbousData } from '../../data/data'
import CatalogCard from '../catalog-card/catalog-card'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const Subcollection = ({ match, history }) => {
  const classes = useStyles()

  switch (match.params.collectionName) {
    case 'conifers':
      return (
        <Box m={2} className={classes.mainWrapper}>
          {conifersData.map((item) => (
            <CatalogCard
              key={item.nameItem}
              background={item.path}
              nameItem={item.nameItem}
              redirection={() => history.push(`${item.redirectPath}`)}
            />
          ))}
        </Box>
      )
    case 'bulbous':
      return (
        <Box m={2} className={classes.mainWrapper}>
          {bulbousData.map((item) => (
            <CatalogCard
              key={item.nameItem}
              background={item.path}
              nameItem={item.nameItem}
              redirection={() => history.push(`${item.redirectPath}`)}
            />
          ))}
        </Box>
      )
    default:
      return <Redirect to={`${match.url}/${match.params.collectionName}`} />
  }

  //   return <div>{match.params.collectionName}</div>
}

export default Subcollection
