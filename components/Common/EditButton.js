import * as React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons(props) {
  return (
    <Stack direction="row" spacing={2} style={{float: 'right'}}>
      <Button onClick={props.handleClickEdit} variant="outlined" startIcon={<EditIcon />}>
        Edit
      </Button>
    </Stack>
  );
}