import { createTheme, ThemeProvider} from '@mui/material/styles';
import React from 'react'

const theme = createTheme({
	typography:{
		fontFamily:["'Montserrat', sans-serif"],
	},
})

function ThemeContextProvider({children}) {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	)
}

export default ThemeContextProvider
