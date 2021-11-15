import { Add, Delete } from '@mui/icons-material';
import {
    Avatar,
    Badge,
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
import PlayerColumn from '../components/PlayerColumn';
import { AppContext } from '../context/AppContext';

const useStyles = makeStyles((theme) => {
    return {
        container: {
            width: '90%',
            height: '80vh',
            margin: '1.5rem auto',
            display: 'flex',
            justifyContent: 'flex-start',
        },
        emptyBox: {
            width: '10rem',
            height: '10rem',
        },
        headings: {
            width: '10rem',
        },
        stats: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
        btn: {
            width: '7rem',
            height: '7rem',
        },
        players: {
            width: '14rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        playerInfo: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: '10rem',
        },
    };
});

function Comparison() {
    const classes = useStyles();

    const { favourites } = useContext(AppContext);

    const [comparisonList, setComparisonList] = useState([]);
    const [bestOfStats, setBestOfStats] = useState({});

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

    const handleDeletePlayer = (id) => {
        setComparisonList(comparisonList.filter((player) => player.id !== id));
    };

    return (
        <Box className={classes.container}>
            <Box>
                <Box className={classes.emptyBox}></Box>
                <Box className={classes.headings}>
                    <Typography variant="h6">Index</Typography>
                    <Typography variant="h6">Goals</Typography>
                    <Typography variant="h6">Asists</Typography>
                    <Typography variant="h6">Shots</Typography>
                    <Typography variant="h6">Passes</Typography>
                    <Typography variant="h6">Crosses</Typography>
                    <Typography variant="h6">Key Passes</Typography>
                    <Typography variant="h6">Smart Passes</Typography>
                    <Typography variant="h6">Touch in Box</Typography>
                    <Typography variant="h6" color="yellow">
                        Yellow Cards
                    </Typography>
                    <Typography variant="h6" color="red">
                        Red Cards
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.stats}>
                {comparisonList.length
                    ? comparisonList.map((player) => {
                          return (
                              <Box key={player.id} className={classes.players}>
                                  <Box className={classes.playerInfo}>
                                      <Badge
                                          sx={{ justifyContent: 'center' }}
                                          anchorOrigin={{
                                              vertical: 'bottom',
                                              horizontal: 'left',
                                          }}
                                          badgeContent={
                                              <IconButton
                                                  onClick={() =>
                                                      handleDeletePlayer(
                                                          player.id
                                                      )
                                                  }
                                              >
                                                  <Delete color="action" />
                                              </IconButton>
                                          }
                                      >
                                          <Avatar
                                              sx={{ width: 80, height: 80 }}
                                              src={player.image}
                                          />
                                      </Badge>
                                      <Typography
                                          variant="h5"
                                          sx={{ fontWeight: 600 }}
                                      >
                                          {player.shortName}
                                      </Typography>
                                  </Box>
                                  <PlayerColumn
                                      bestOfStats={bestOfStats}
                                      setBestOfStats={setBestOfStats}
                                      id={player.id}
                                  />
                              </Box>
                          );
                      })
                    : null}
                <IconButton
                    className={classes.btn}
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
