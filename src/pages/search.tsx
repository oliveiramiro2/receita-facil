import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import { data, IDataListFood } from '../services/data';
import { FoodList } from '../components';

type ParamList = {
    Search: {
        name: string;
    };
};

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        paddingHorizontal: 14,
        backgroundColor: '#f3f9ff',
        paddingTop: 14,
    },
    textError: {
        fontSize: 16,
        fontWeight: '300',
    },
});

export const Search: React.FC = () => {
    const [filted, setFilted] = useState<IDataListFood[]>([]);
    const route = useRoute<RouteProp<ParamList, 'Search'>>();

    useEffect(() => {
        const foodFounded: IDataListFood[] = [];
        data.forEach((item) => {
            if (item.name.includes(route.params?.name)) {
                foodFounded.push(item);
            }
        });
        setFilted(foodFounded);
    }, [route.params?.name]);

    return (
        <View style={[styles.contain]}>
            <FlatList
                showsVerticalScrollIndicator
                data={filted}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <FoodList data={item} />}
                ListEmptyComponent={() => (
                    <Text style={[styles.textError]}>
                        Não foi possível encontrar a receita...
                    </Text>
                )}
            />
        </View>
    );
};
