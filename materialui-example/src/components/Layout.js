import { Drawer, makeStyles, Typography } from '@material-ui/core'
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
})
export default function Layout({ children }) {
  const classes = useStyles()

  return (
    <div>
      {/* app bar */}

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{}}
      >
        <div>
          <Typography variant='h5'>Ninja Notes</Typography>
        </div>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  )
}
