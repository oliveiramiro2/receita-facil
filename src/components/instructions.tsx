import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { View } from 'moti';

import { instrucoes } from '../services/data';

const styles = StyleSheet.create({
    contain: {
        flexDirection: 'row',
        padding: 8,
        marginBottom: 14,
        alignItems: 'flex-start',
    },
    number: {
        fontWeight: 'bold',
        fontSize: 20,
        position: 'relative',
        bottom: 5,
    },
    text: {
        lineHeight: 20,
        fontSize: 16,
        paddingEnd: 20,
    },
});

export const Instructions: React.FC<{ data: instrucoes }> = ({ data }) => (
    <View
        style={[styles.contain]}
        from={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{
            delay: 300 * Number(data.id),
            type: 'timing',
            duration: 650,
        }}
    >
        <Text style={[styles.number]}>{data.id}-</Text>
        <Text style={[styles.text]}>{data.text}</Text>
    </View>
);
