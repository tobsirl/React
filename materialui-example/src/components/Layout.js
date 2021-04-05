import {
  Drawer,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
} from '@material-ui/core'
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons'
import React from 'react'
import { useHistory, useLocation } from 'react-router'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: 'flex',
    },
    active: {
      background: '#f4f4f4',
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
  }
})
export default function Layout({ children }) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color='secondary' />,
      path: '/',
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlined color='secondary' />,
      path: '/create',
    },
  ]

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography>Welcome to the Ninja Notes Website</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant='h5' className={classes.title}>
            Ninja Notes
          </Typography>
        </div>

        <List>
          {menuItems.map((menuItem) => (
            <ListItem
              key={menuItem.text}
              button
              onClick={() => history.push(menuItem.path)}
              className={
                location.pathname === menuItem.path ? classes.active : null
              }
            >
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  )
}
