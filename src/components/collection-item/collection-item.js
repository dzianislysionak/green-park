import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography, Box } from '@material-ui/core'

import tulip from '../../assets/catalog-card/tulips.jpg'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: theme.spacing(30),
    height: theme.spacing(50),
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('700')]: {
      width: '100%',
    },
  },
}))

const CollectionItem = ({ match }) => {
  const classes = useStyles()
  return (
    <Paper className={classes.mainWrapper}>
      <img src={tulip} width='100%' height='280' alt='lorem' />
      <Typography>{match.params.collectionName}</Typography>
      <Typography>oчень красивый цветок</Typography>
      <Typography>20 руб</Typography>
    </Paper>
  )
}

export default CollectionItem
