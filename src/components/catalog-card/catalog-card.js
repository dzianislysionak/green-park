import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    minWidth: '20%',
    height: theme.spacing(30),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1),
    cursor: 'pointer',
    border: '1px solid #5b8926',
    [theme.breakpoints.down('1000')]: {
      minWidth: '30%',
    },
    [theme.breakpoints.down('700')]: {
      width: '40%',
      height: theme.spacing(15),
    },
    '&:hover': {
      transform: 'scale(1.03)',
      transition: 'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)',
    },
  },
  title: {
    height: theme.spacing(6),
    width: theme.spacing(12),
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '0.7',
  },
}))

const CatalogCard = ({ redirection, background, nameItem }) => {
  const classes = useStyles()
  return (
    <Paper
      onClick={redirection}
      className={classes.mainWrapper}
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
    >
      <Typography className={classes.title} align='center'>
        {nameItem}
      </Typography>
    </Paper>
  )
}

export default CatalogCard
