// 
import {AppBar,Toolbar,IconButton,Typography} from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContext } from 'react';
import { UiContext } from '@/context/ui';


export const NavBar = () => {

const {openSideMenu} = useContext(UiContext);

  return (
    <AppBar 
    position='sticky'
    >
    <Toolbar>
      <IconButton
      size='large'
      edge='start'
      onClick={openSideMenu}
      >
      <MenuOutlinedIcon/>
      </IconButton>

      <Typography variant='h6'>Proyect Next</Typography>
    </Toolbar>
    </AppBar>
  )
}
