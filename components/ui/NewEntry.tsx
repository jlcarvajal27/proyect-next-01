// 
import { Box, Button, TextField } from "@mui/material"
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useState, ChangeEvent, useContext } from 'react';
import { EntriesContext } from "@/context/entries";
import { UiContext } from "@/context/ui";



export const NewEntry = () => {

    const {addNewEntry} = useContext(EntriesContext)
    const {isAddingEntry, setIsAddingEntry} = useContext(UiContext)


    const  [inputValue, setInputValue] = useState('')
    const [touched, setTouched] = useState(false)

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
   setInputValue(event.target.value);
    }

    const onSave = () => {
        if( inputValue.length === 0) return;

       addNewEntry(inputValue)
       setIsAddingEntry(false);
       setTouched(false);
       setInputValue('');
    }

return (

   <Box sx={{ marginBottom: 2, paddingX: 1}}>

   {
    isAddingEntry ? (
        <>
        <TextField 
    fullWidth
    sx={{marginTop:2, marginBottom: 1}}
    placeholder="New Text"
    autoFocus
    multiline
    helperText={inputValue.length <= 0 && touched && 'ingrese un valor'}
    error={inputValue.length <= 0 && touched}
    value={inputValue}
    onChange={onTextFieldChanged}
    onBlur={() => setTouched(true)}
    />
    <Box  display='flex' justifyContent='space-between'>

    <Button variant="outlined" color="secondary" endIcon={<SaveAsOutlinedIcon/>} onClick={onSave}>
    Save!
    </Button>

    <Button 
    variant="outlined"
    onClick={()=> setIsAddingEntry(false)}
    >
    Cancelar 
    </Button>
    </Box>
        </>
    )
    : 
    (
        <Button
   startIcon={<AddCircleOutlineOutlinedIcon/>}
   fullWidth
   variant="outlined"
   onClick={() => setIsAddingEntry(true)}
    >
    Add Task  
   </Button>
    )
   }
</Box>
  );
};
