import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ingredientes } from '../services/data';

const styles = StyleSheet.create({
    contain: {
        backgroundColor: '#fff',
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 4,
    },
    name: {
        fontWeight: '500',
        fontSize: 16,
    },
});

export const Ingredients: React.FC<{ data: ingredientes }> = ({ data }) => (
    <View style={[styles.contain]}>
        <Text style={[styles.name]}>{data.name}</Text>
        <Text>{data.amount}</Text>
    </View>
);
