import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Home, Favorites } from '../pages';

type ITabNavigator = {
    HomeTab: object | undefined;
    FavoritesTab: object | undefined;
};

const Tab = createBottomTabNavigator<ITabNavigator>();

const RoutesReceitaFacil = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#121212',
            tabBarStyle: {
                backgroundColor: '#fff',
                borderTopWidth: 0,
            },
        }}
    >
        <Tab.Screen
            name="HomeTab"
            component={Home}
            options={{
                tabBarIcon: ({ color, focused, size }) => {
                    if (focused) {
                        return (
                            <Ionicons name="home" color="#000" size={size} />
                        );
                    }

                    return (
                        <Ionicons
                            name="home-outline"
                            color={color}
                            size={size}
                        />
                    );
                },
            }}
        />
        <Tab.Screen
            name="FavoritesTab"
            component={Favorites}
            options={{
                tabBarIcon: ({ color, focused, size }) => {
                    if (focused) {
                        return (
                            <Ionicons
                                name="heart"
                                color="#ff4141"
                                size={size}
                            />
                        );
                    }

                    return (
                        <Ionicons
                            name="heart-outline"
                            color={color}
                            size={size}
                        />
                    );
                },
            }}
        />
    </Tab.Navigator>
);

export default RoutesReceitaFacil;
