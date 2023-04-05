import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
    },
});

export const Video: React.FC = () => (
    <View style={[styles.contain]}>
        <Text>video</Text>
    </View>
);
