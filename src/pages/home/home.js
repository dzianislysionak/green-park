import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import CatalogCard from '../../components/catalog-card/catalog-card'
import { homeData } from '../../data/data'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const Home = ({ history, match }) => {
  const classes = useStyles()

  return (
    <Box m={2} className={classes.mainWrapper}>
      {homeData.map((item) => (
        <CatalogCard
          key={item.nameItem}
          background={item.path}
          nameItem={item.nameItem}
          redirection={() => history.push(`${match.url}${item.redirectPath}`)}
        />
      ))}
    </Box>
  )
}

export default Home
