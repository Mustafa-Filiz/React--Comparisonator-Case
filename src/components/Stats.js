import { Rating } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Stats({id}) {

	const [stats, setStats] = useState({})

	useEffect(() => {
		axios.get(`https://mock-foooty-api.herokuapp.com/players/${id}/stats`).then(res => setStats(res.data.stats))
	}, [])

	return (
		<Box>
			<Rating value={stats.index / 100} precision={0.1} readOnly />
		</Box>
	)
}

export default Stats
