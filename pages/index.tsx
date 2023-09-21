import type { NextPage } from "next";
import {Card, CardContent, CardHeader, Grid} from '@mui/material'
import { Layout } from "@/components/layouts";
import {  EntryList, NewEntry } from "@/components/ui";


const  HomePage: NextPage = () => {
  return (
    <Layout title='Home'>
      <Grid container spacing={2}>

    <Grid item xs={12} sm={4}>
      <Card sx={{height: 'calc(100vh - 100px)'}}>
        <CardHeader title='Pending'/>
        <CardContent>
        {/* agregar una nueva entrada  */}
        <NewEntry/>
        <EntryList status="pending"/>
       </CardContent>
       </Card>
    </Grid>

    <Grid item xs={12} sm={4}>
      <Card sx={{height: 'calc(100vh - 100px)'}}>
      <CardHeader title='In-progress'/>
      <EntryList status="in-progress"/>
      </Card>
    </Grid>

    <Grid item xs={12} sm={4}>
      <Card sx={{height: 'calc(100vh - 100px)'}}>
        <CardHeader title='Completed'/>
        <EntryList status="finished"/>
      </Card>
    </Grid>
    </Grid>
    </Layout>
      
  )
}
export default HomePage;
