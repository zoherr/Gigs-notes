import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Loading() {
  return (
    <Box sx={{   mx:15, my:30}}>
      <LinearProgress />
    </Box>
  );
}