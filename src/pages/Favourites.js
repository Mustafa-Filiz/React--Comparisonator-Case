import { DeleteRounded } from '@mui/icons-material';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const useStyles = makeStyles((theme) => {
    return {
        container: {
            width: '95%',
            display: 'flex',
            flexWrap: 'wrap',
            margin: '2rem auto',
        },
        card: {
            width: '10rem',
            height: '20rem',
            margin: '1rem',
        },
    };
});

function Favourites() {
    const { favourites, toggleFavourites } = useContext(AppContext);
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            {favourites.length ? (
                favourites.map((favourite) => {
                    return (
                        <Card key={favourite.id} className={classes.card}>
                            <CardMedia
                                component="img"
                                sx={{ height: '10rem'}}
                                image={favourite.image}
                            />
                            <CardHeader
                                title={favourite.shortName}
                                subheader={favourite.role.name}
                                titleTypographyProps={{ fontSize: '1.2rem' }}
                            />
                            <CardActions>
                                <IconButton
                                    size="large"
                                    onClick={() => toggleFavourites(favourite)}
                                >
                                    <DeleteRounded fontSize="medium" />
                                </IconButton>
                            </CardActions>
                        </Card>
                    );
                })
            ) : (
                <Typography variant="h3">
                    Your favourite player list is empty.
                </Typography>
            )}
        </Box>
    );
}

export default Favourites;
