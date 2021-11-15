import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';

function PlayerColumn({ id, bestOfStats, setBestOfStats }) {
    const [playerStats, setPlayerStats] = useState({});

    useEffect(() => {
        axios
            .get(`https://mock-foooty-api.herokuapp.com/players/${id}/stats`)
            .then((res) => setPlayerStats(res.data.stats));
    }, [id]);

    useEffect(() => {
        Object.keys(bestOfStats).length
            ? Object.keys(bestOfStats).map((stat) =>
                  playerStats[stat] > bestOfStats[stat]
                      ? setBestOfStats({
                            ...bestOfStats,
                            [stat]: playerStats[stat],
                        })
                      : null
              )
            : setBestOfStats(playerStats);
    }, [playerStats, bestOfStats, setBestOfStats]);

    console.log('playerstats', playerStats);
    console.log('bests', bestOfStats);

    return (
        <>
            {Object.keys(playerStats).map((key, index) => (
                <Typography
                    key={index}
                    variant="h6"
                    sx={{
                        width: '80%',
                        textAlign: 'center',
                        backgroundColor: () => {
                            return playerStats[key] === bestOfStats[key]
                                ? 'yellow'
                                : 'white';
                        },
                    }}
                >
                    {Math.round(Number(playerStats[key]))}
                </Typography>
            ))}
        </>
    );
}

export default PlayerColumn;
