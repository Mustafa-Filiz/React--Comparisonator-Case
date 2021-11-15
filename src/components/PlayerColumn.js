import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';

function PlayerColumn({ id }) {
    const [playerStats, setPlayerStats] = useState({});

    useEffect(() => {
        axios
            .get(`https://mock-foooty-api.herokuapp.com/players/${id}/stats`)
            .then((res) => setPlayerStats(res.data.stats));
    }, [id]);

    // console.log(playerStats)

    return (
        <>
            {Object.values(playerStats).map((stat, index) => (
                <Typography key={index} variant="h6">{Math.round(Number(stat))}</Typography>
            ))}
        </>
    );
}

export default PlayerColumn;
