import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

function Favourites() {
	const [favPlayers, setFavPlayers] = useState([])
	const {favourites} = useContext(AppContext)


	return (
		<Box>

		</Box>
	)
}

export default Favourites
