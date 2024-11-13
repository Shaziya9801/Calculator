import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <AppBar position="sticky">
    <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Matrix Calculator
        </Typography>
        {/* <Button color="inherit">Login</Button>
        <Button color="inherit">Sign Up</Button> */}
      </Toolbar>
    </AppBar>
  )
}

export default Header