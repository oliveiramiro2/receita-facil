import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
    },
});

export const Ingredients: React.FC = () => (
    <View style={[styles.contain]}>
        <Text>ingredients</Text>
    </View>
);
