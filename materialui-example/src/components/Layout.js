import {
  Drawer,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons'
import React from 'react'

const drawerWidth = 240

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%',
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
})
export default function Layout({ children }) {
  const classes = useStyles()

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
      {/* app bar */}

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant='h5'>Ninja Notes</Typography>
        </div>

        <List>
          <ListItem>
            <ListItemText primary='hello' />
          </ListItem>
        </List>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  )
}
