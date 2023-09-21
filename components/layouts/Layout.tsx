import {Box} from '@mui/material'
import Head from 'next/head'
import {FC} from 'react';
import { NavBar, SideBar } from '../ui';

interface  Props{
    title?: String;
    children: any
}
export const Layout: FC<Props> = ({title= 'proyect', children}) => {
  return (
    <Box sx={{ flexFlow: 1}}>
        <Head>
            <title>{title}</title>
        </Head>
        <NavBar/>
        <SideBar/>

     <Box sx={{padding: '10px 20px'}}>
      { children }
      </Box>
    </Box>
  )
}
