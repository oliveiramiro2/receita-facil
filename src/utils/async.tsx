import AsyncStorage from '@react-native-async-storage/async-storage';
import { IDataListFood } from '../services/data';

export const getFavorite = async (key: string) => {
    const favorites = await AsyncStorage.getItem(key);
    if (favorites !== null) {
        return JSON.parse(favorites);
    }
    return false;
};

export const saveFavorite = async (key: string, newItem: IDataListFood) => {
    let myFavorites = await getFavorite(key);

    if (myFavorites) {
        const hasItem = myFavorites.some(
            (item: IDataListFood) => item.id === newItem.id,
        );

        if (hasItem) {
            return;
        }
    } else {
        myFavorites = [];
    }

    myFavorites.push(newItem);

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
};

export const removeFavorite = async (id: string) => {
    const receive = await getFavorite('@appreceitas');

    const myFavorites = receive.filter((item: IDataListFood) => item.id !== id);

    await AsyncStorage.setItem('@appreceitas', JSON.stringify(myFavorites));

    return myFavorites;
};

export const isFavorite = async (favorite: IDataListFood) => {
    const receive = await getFavorite('@appreceitas');

    if (!receive) return false;

    const favorites = receive.find(
        (item: IDataListFood) => item.id === favorite.id,
    );

    if (favorites) return true;

    return false;
};
