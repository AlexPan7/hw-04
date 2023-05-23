import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import {Toolbar, Box} from '@mui/material';

function PublicLayout() {
  return (
    <>
      <Header />
      <Toolbar />
      <Box component="main" sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </>
  )
}

export default PublicLayout;