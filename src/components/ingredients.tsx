import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { View } from 'moti';

import { ingredientes } from '../services/data';

const styles = StyleSheet.create({
    contain: {
        backgroundColor: '#fff',
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderRadius: 4,
    },
    name: {
        fontWeight: '500',
        fontSize: 16,
    },
});

export const Ingredients: React.FC<{ data: ingredientes }> = ({ data }) => (
    <View
        style={[styles.contain]}
        from={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            delay: 300 * Number(data.id),
            type: 'timing',
            duration: 650,
        }}
    >
        <Text style={[styles.name]}>{data.name}</Text>
        <Text>{data.amount}</Text>
    </View>
);
