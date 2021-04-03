import React from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import {DeleteOutlined} from '@material-ui/icons'

export default function NoteCard(props) {
  console.log(props)
  return (
    <Card>
      <CardHeader
        action={
          <IconButton
            aria-label="settings"
            onClick={() => props.onHandleDelete(props.note.id)}
          >
            <DeleteOutlined />
          </IconButton>
        }
        title={props.note.title}
        subheader={props.note.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {props.note.details}
        </Typography>
      </CardContent>
    </Card>
  )
}
