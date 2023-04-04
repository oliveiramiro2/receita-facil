import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Detail, Search } from '../pages';

type stacks = {
    Home: object | undefined;
    Detail: object | undefined;
    Search: object | undefined;
};

const Stack = createNativeStackNavigator<stacks>();

export const StackRoutes = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
);
