import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFavorite = async (key: string) => {
    const favorites = await AsyncStorage.getItem(key);
    return JSON.parse(favorites || '');
};

export const saveFavorite = async (key: string, newItem: any) => {
    const myFavorites = await getFavorite(key);

    const hasItem = myFavorites.some((item: any) => item.id === newItem.id);

    if (hasItem) {
        return;
    }

    myFavorites.push(newItem);

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
};

export const removeFavorite = async (id: string) => {
    const receive = await getFavorite('@appreceitas');

    const myFavorites = receive.filter((item: any) => item.id === id);

    await AsyncStorage.setItem('@appreceitas', JSON.stringify(myFavorites));

    return myFavorites;
};

export const isFavorite = async (favorite: any) => {
    const receive = await getFavorite('@appreceitas');

    const favorites = receive.find((item: any) => item.id === favorite.id);

    if (favorites) return true;

    return false;
};
