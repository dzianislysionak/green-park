import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Menu, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Typography } from '@material-ui/core'

import { homeData } from '../../data/data'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    backgroundColor: '#5b8926',
  },
  navDisplay: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navElement: {
    color: '#ffffff',
    textDecoration: 'none',
  },
  navDropDownElement: {
    textDecoration: 'none',
    color: 'black',
  },
  avatarMargin: {
    marginRight: theme.spacing(1),
  },
}))

const Navigation = () => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <AppBar position='static' className={classes.mainWrapper}>
        <Toolbar className={classes.navDisplay}>
          <Link className={classes.navElement} to='/'>
            <Typography variant='h6'>Домой</Typography>
          </Link>
          <div
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          >
            <Typography variant='h6'>Каталог</Typography>
          </div>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            {homeData.map((data) => (
              <Link
                className={classes.navDropDownElement}
                to={`/${data.redirectPath}`}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar
                    className={classes.avatarMargin}
                    variant='square'
                    alt={data.nameItem}
                    src={data.path}
                  />
                  <Typography variant='h6'>{data.nameItem}</Typography>
                </MenuItem>
              </Link>
            ))}
          </Menu>
          <Link className={classes.navElement} to='/about'>
            <Typography variant='h6'>О нас</Typography>
          </Link>
          <Link className={classes.navElement} to='/contacts'>
            <Typography variant='h6'>Контакты</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation
