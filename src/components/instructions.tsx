import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { instrucoes } from '../services/data';

const styles = StyleSheet.create({
    contain: {
        flexDirection: 'row',
        padding: 8,
        marginBottom: 14,
    },
    number: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    text: {
        lineHeight: 20,
        fontSize: 16,
    },
});

export const Instructions: React.FC<{ data: instrucoes }> = ({ data }) => (
    <View style={[styles.contain]}>
        <Text style={[styles.number]}>{data.id}-</Text>
        <Text style={[styles.text]}>{data.text}</Text>
    </View>
);
