import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

import { IDataListFood } from '../services/data';
import { getFavorite } from '../utils/async';
import { FoodList } from '../components';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingHorizontal: 14,
        paddingTop: 36,
    },
    title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 24,
    },
});

export const Favorites: React.FC = () => {
    const [receive, setReceive] = useState<IDataListFood[]>([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        let isActive = true;

        const getReceive = async () => {
            const result = await getFavorite('@appreceitas');
            if (result !== false && isActive) {
                setReceive(result);
            }
        };

        if (isActive) getReceive();

        return () => {
            isActive = false;
        };
    }, [isFocused]);

    return (
        <SafeAreaView style={[styles.contain]}>
            <Text style={[styles.title]}>Receitas favoritas</Text>
            {receive.length === 0 ? (
                <View>
                    <Text>Você ainda não tem nenhuma receita salva.</Text>
                </View>
            ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={receive}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item, index }) => (
                        <FoodList data={item} index={index} />
                    )}
                    style={{ marginTop: 14 }}
                />
            )}
        </SafeAreaView>
    );
};
