import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    contain: {
        height: 200,
    },
});

export const FoodList: React.FC = () => (
    <View style={[styles.contain]}>
        <Text>foodList</Text>
    </View>
);
