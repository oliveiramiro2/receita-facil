import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IDataListFood } from '../services/data';

const styles = StyleSheet.create({
    contain: {
        height: 200,
    },
});

export const FoodList: React.FC<{data: IDataListFood}> = ({ data }) => (
    <View style={[styles.contain]}>
        <Text>{data.name}</Text>
    </View>
);
