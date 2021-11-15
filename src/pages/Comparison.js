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
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const useStyles = makeStyles((theme) => {
    return {
        container: {
            width:"100%",
            height: "100vh",
            display: 'flex',
        },
    };
});

function Comparison() {
    const classes = useStyles();

    const { favourites } = useContext(AppContext);

    const [comparisonList, setComparisonList] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleItemClick = (player) => {
        if (comparisonList.length) {
            if (comparisonList.find((item) => item.id === player.id)) {
                setAnchorEl(null);
            } else {
                setComparisonList([...comparisonList, player]);
            }
        } else {
            setComparisonList([...comparisonList, player]);
        }
        setAnchorEl(null);
    };

    console.log(comparisonList);

    return (
        <Box className={classes.container}>
            <Box>
                <Typography>Index</Typography>
                <Typography>Goals</Typography>
                <Typography>Asists</Typography>
                <Typography>Shots</Typography>
                <Typography>Passes</Typography>
                <Typography>Crosses</Typography>
                <Typography>Key Passes</Typography>
                <Typography>Smart Passes</Typography>
                <Typography>Touch in Box</Typography>
                <Typography color="yellow">Yellow Cards</Typography>
                <Typography color="red">Red Cards</Typography>
            </Box>
            <Box>
                <IconButton
                    size="large"
                    onClick={handleMenuClick}
                >
                    <Add fontSize="large" />
                </IconButton>
                <Menu
                    open={open}
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}
                >
                    <MenuList>
                        {favourites.length ? (
                            favourites.map((favourite) => {
                                return (
                                    <MenuItem
                                        onClick={() =>
                                            handleItemClick(favourite)
                                        }
                                        key={favourite.id}
                                    >
                                        <ListItemAvatar>
                                            <Avatar src={favourite.image} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={favourite.shortName}
                                            secondary={favourite.role.name}
                                        />
                                    </MenuItem>
                                );
                            })
                        ) : (
                            <MenuItem>
                                <ListItemText primary="Your favourite list is empty." />
                            </MenuItem>
                        )}
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    );
}

export default Comparison;
