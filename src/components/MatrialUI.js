import React from 'react'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
function MatrialUI() {
    return (
        <>
            <h1> MatrialUI Empample </h1>
           {/*  <Button variant="contained">Click Me </Button> */}
            <Stack sx={{ width: '40%' }} spacing={2}>
                <Alert severity="error">This is an error alert — check it out!</Alert>
                <Alert severity="warning">This is a warning alert — check it out!</Alert>
                <Alert severity="info">This is an info alert — check it out!</Alert>
                <Alert severity="success">This is a success alert — check it out!</Alert>
            </Stack>
        </>
    )
}

export default MatrialUI