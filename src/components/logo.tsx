import { View, StyleSheet } from 'react-native';
import { Text as MotiText } from 'moti';
import React from 'react';

const styles = StyleSheet.create({
    contain: {
        backgroundColor: '#4cbe6c',
        alignSelf: 'flex-start',
        paddingVertical: 8,
        paddingLeft: 16,
        paddingRight: 20,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 8,
    },

    logoText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export const Logo: React.FC = () => (
    <View style={[styles.contain]}>
        <MotiText
            style={[styles.logoText]}
            from={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{
                type: 'timing',
                duration: 900,
            }}
        >
            Receita Fácil
        </MotiText>
    </View>
);
