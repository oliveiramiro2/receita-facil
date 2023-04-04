import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RoutesReceitaFacil from './src/routes';

const App: React.FC = () => (
    <NavigationContainer>
        <RoutesReceitaFacil />
    </NavigationContainer>
);

export default App;
