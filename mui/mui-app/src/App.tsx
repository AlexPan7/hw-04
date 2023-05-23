import {useTheme} from "@mui/material/styles"
import {RouterProvider} from 'react-router-dom';
import { routes } from "./routes/Routes"

function App() {
  const theme = useTheme();

  return <RouterProvider router={routes} />
}

export default App