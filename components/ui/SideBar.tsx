// 
import { Drawer, Box, Typography, List, ListItem, ListItemIcon,ListItemText,Divider } from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useContext } from 'react';
import { UiContext } from '@/context/ui';

const menuItem: string[] = ['Imbox','Email','Drafts'];

export const SideBar = () => {
    
    const {sideMenuOpen, closeSideMenu} = useContext(UiContext)

  return (
    <Drawer anchor='left'
    open={sideMenuOpen}
    onClose={closeSideMenu}
    >
        <Box sx={{width: '250'}}>
        <Box sx={{padding: '5px 10px'}} >
       <Typography variant='h4'> Menu </Typography>
        </Box>
        
        <List>
       {
        menuItem.map((text,index) => (
            <ListItem button key={text}>
            <ListItemIcon>
                {index % 2 ? <InboxOutlinedIcon/> : <EmailOutlinedIcon/>  }
            </ListItemIcon>
            <ListItemText primary= {text}/>
            </ListItem>
        ) )
       }
        </List>
        
        </Box>
       
     </Drawer>
  )
}
