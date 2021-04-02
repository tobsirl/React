import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { DeleteOutlined } from '@material-ui/icons';

export default function NoteCard({ title, details, category }) {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <DeleteOutlined />
          </IconButton>
        }
        title={title}
        subheader={category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">{details}</Typography>
      </CardContent>
    </Card>
  );
}
