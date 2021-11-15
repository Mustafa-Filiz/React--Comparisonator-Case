import React, { useContext, useState } from 'react'
import { Add } from '@mui/icons-material';
import {
    Avatar,
    IconButton,
    ListItemAvatar,
    ListItemText,
    Menu,
    MenuItem,
    MenuList,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { AppContext } from '../context/AppContext';

const useStyles = makeStyles((theme) => {
    return {
        container: {
            width: '100%',
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        players:{
            display: "flex",
            alignItems:"center"

        },
        emptyBox:{
            width : "15rem"
        },
        playerInfo:{
            width: "8rem",
            height: "8rem",
            display: "flex",
            flexDirection: "column",
            justifyContent:"center",
            alignItems: "center"
        },
        headings: {
            width : "15rem"
        },
    };
});

function PlayerColumn({comparisonList}) {
    const classes = useStyles();

	return (
		<Box className={classes.players}>
                {comparisonList.length
                    ? comparisonList.map((player) => {
                          return (
                              <Box className={classes.playerInfo}>
                                  <Avatar sx={{ width: 80, height: 80 }} src={player.image} />
                                  <Typography variant="h5">{player.shortName}</Typography>
                              </Box>
                          );
                      })
                    : null}
            </Box>
	)
}

export default PlayerColumn
