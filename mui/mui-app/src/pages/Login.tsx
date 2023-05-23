import {Box, TextField, FormGroup,Button } from '@mui/material';

export const Login = () => {
  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { my: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <FormGroup>
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete=""
          />
        </FormGroup>
        <FormGroup >
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete=""
          />
        </FormGroup>
        <Button type='submit' variant="outlined">Outlined</Button>
      </Box>
    </>
  )
}
