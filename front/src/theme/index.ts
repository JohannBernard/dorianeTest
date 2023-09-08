import { createTheme } from '@mui/material/styles';

export default createTheme({
    /*palette: {
      primary: {
        main: "#DA340F",
      },
      secondary: {
        main: "#44B7FF",
      },
    },*/
    typography: {
      h2:{
        fontSize: '3rem',
        '@media (max-width:400px)': {
          fontSize: '2rem',
        },
      }
    }
});