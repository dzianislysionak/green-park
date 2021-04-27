import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    border: '1px solid #5b8926',
    [theme.breakpoints.down('700')]: {
      width: '100%',
      height: theme.spacing(40),
      paddingBottom: 0,
    },
  },
  boxClass: {
    display: 'flex',
    // flexWrap: 'no-wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    marginBottom: theme.spacing(2),
    // [theme.breakpoints.down('700')]: {
    //   width: '100%',
    //   height: '250px',
    // },
  },
}))

const CollectionItem = ({ img, sort, shortDesc, price }) => {
  const classes = useStyles()
  return (
    <Paper className={classes.mainWrapper}>
      <img src={img} className={classes.image} alt={sort} />
      <Box className={classes.boxClass}>
        <Typography>{sort}</Typography>
        <Typography>{price}</Typography>
      </Box>
      <Typography>{shortDesc}</Typography>
    </Paper>
  )
}

export default CollectionItem
