import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Favorites } from '../pages';

type ITabNavigator = {
    HomeTab: object | undefined;
    FavoritesTab: object | undefined;
}

const Tab = createBottomTabNavigator<ITabNavigator>();

const RoutesReceitaFacil = () => (
    <Tab.Navigator>
        <Tab.Screen name="HomeTab" component={Home} />
        <Tab.Screen name="FavoritesTab" component={Favorites} />
    </Tab.Navigator>
);

export default RoutesReceitaFacil;
