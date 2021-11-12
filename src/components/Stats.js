import { Slider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => {
    return {
        dropdown: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        slider: {
            width: '30% !important',
			display: 'flex',
			flexDirection: "column",
			justifyContent : "space-evenly",
			alignItems: "center",
            '& .MuiSlider-thumb': {
                display: 'none ',
            },
        },
		statsFirst:{

		},
    };
});

function Stats({ id }) {
    const [stats, setStats] = useState({});
    const classes = useStyles();

    useEffect(() => {
        axios
            .get(`https://mock-foooty-api.herokuapp.com/players/${id}/stats`)
            .then((res) => setStats(res.data.stats));
    }, []);

    return (
        <Box className={classes.dropdown}>
            <Box className={classes.slider}>
                <Slider value={Math.round(stats.index)} max={500} sx={{height: "1rem"}} />
                <Typography sx={{color: "#2196F3", fontSize: "2.5rem", fontWeight: 600}}>
                    {stats.index ? Math.round(stats.index) : 'No Data'}
                </Typography>
                <Typography sx={{color: "#2196F3", fontSize: "1rem"}}>COMPARISONATOR INDEX</Typography>
            </Box>
            <Box className={classes.statsFirst}>
                <Typography>Goals</Typography>
                <Typography>Asists</Typography>
                <Typography>Shots</Typography>
                <Typography>Passes</Typography>
                <Typography>Crosses</Typography>
            </Box>
            <Box>
                <Typography>Key Passes</Typography>
                <Typography>Smart Passes</Typography>
                <Typography>Touch in Box</Typography>
                <Typography>Yellow Cards</Typography>
                <Typography>Red Cards</Typography>
            </Box>
        </Box>
    );
}

export default Stats;
