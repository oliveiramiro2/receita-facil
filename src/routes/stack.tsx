import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Detail, Search } from '../pages';

export type stacks = {
    Home: object | undefined;
    Detail: object | undefined;
    Search: object | undefined;
};

const Stack = createNativeStackNavigator<stacks>();

export const StackRoutes = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Detail"
            component={Detail}
            options={{ title: 'Detalhes da receita' }}
        />
        <Stack.Screen
            name="Search"
            component={Search}
            options={{ title: 'Veja o que encontramos' }}
        />
    </Stack.Navigator>
);
