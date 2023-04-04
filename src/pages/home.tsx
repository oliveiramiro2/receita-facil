import { Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { Logo } from '../components';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingTop: 36,
        paddingHorizontal: 14,
    },
});

export const Home: React.FC = () => (
    <SafeAreaView style={[styles.contain]}>
        <Logo />
        <Text>home</Text>
    </SafeAreaView>
);
