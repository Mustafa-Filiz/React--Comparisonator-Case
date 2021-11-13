import { Add } from '@mui/icons-material';
import {
    Avatar,
    IconButton,
    ListItemAvatar,
    ListItemText,
    Menu,
    MenuItem,
    MenuList,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

function Comparison() {
    const { favourites } = useContext(AppContext);

    const [comparisonList, setComparisonList] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl)


    const handleMenuClick = () => {
        setAnchorEl(true);
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
        <Box>
            <IconButton size="large" onClick={handleMenuClick}>
                <Add fontSize="large" />
            </IconButton>
            <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
                <MenuList>
                    {favourites.map((favourite) => {
                        return (
                            <MenuItem
                                onClick={() => handleItemClick(favourite)}
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
                    })}
                </MenuList>
            </Menu>
        </Box>
    );
}

export default Comparison;
