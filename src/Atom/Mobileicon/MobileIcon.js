import React from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import style from "./MobileIcon.module.css";



export default function MobileIcon() {
  return (
    <>
    <div className={style.Icon}>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    
    </Box>
    </div>
    </>
  )
}
