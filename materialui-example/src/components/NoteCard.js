import React from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import { DeleteOutlined } from '@material-ui/icons'

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category === 'work') {
        return '1px solid red'
      }
    },
  },
})

export default function NoteCard(props) {
  const classes = useStyles(props.note)
  return (
    <Card elevation={1} className={classes.test}>
      <CardHeader
        action={
          <IconButton
            aria-label='settings'
            onClick={() => props.onHandleDelete(props.note.id)}
          >
            <DeleteOutlined />
          </IconButton>
        }
        title={props.note.title}
        subheader={props.note.category}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary'>
          {props.note.details}
        </Typography>
      </CardContent>
    </Card>
  )
}
