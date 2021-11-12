import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const toggleFavourites = (id) => {
        favourites.includes(id)
            ? setFavourites(favourites.filter((favourite) => favourite !== id))
            : setFavourites([...favourites, id]);
    };

    useEffect(() => {
        const localFavourites = window.localStorage.getItem('favouritePlayers');
        if (localFavourites.length) {
            setFavourites(JSON.parse(localFavourites));
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem(
            'favouritePlayers',
            JSON.stringify(favourites)
        );
    }, [favourites]);

    return (
        <AppContext.Provider value={{ favourites, toggleFavourites }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
