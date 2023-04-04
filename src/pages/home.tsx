import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
    },
});

export const Home: React.FC = () => (
    <View style={[styles.contain]}>
        <Text>home</Text>
    </View>
);
