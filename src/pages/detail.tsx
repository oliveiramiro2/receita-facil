import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
    },
});

export const Detail: React.FC = () => (
    <View style={[styles.contain]}>
        <Text>detail</Text>
    </View>
);
