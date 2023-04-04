import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { IDataListFood } from '../services/data';

type ParamList = {
    Detail: {
        data: IDataListFood;
    };
};

const styles = StyleSheet.create({
    contain: {
        flex: 1,
    },
});

export const Detail: React.FC = () => {
    const route = useRoute<RouteProp<ParamList, 'Detail'>>();

    return (
        <View style={[styles.contain]}>
            <Text>detail {route.params?.data.name}</Text>
        </View>
    );
};
