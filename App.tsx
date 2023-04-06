import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { ToastProvider } from 'react-native-toast-notifications';

import RoutesReceitaFacil from './src/routes';

const App: React.FC = () => (
    <ToastProvider>
        <NavigationContainer>
            <RoutesReceitaFacil />
        </NavigationContainer>
    </ToastProvider>
);

export default App;
