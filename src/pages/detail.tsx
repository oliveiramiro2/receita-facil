import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Entypo } from '@expo/vector-icons';

import { IDataListFood } from '../services/data';
import { stacks } from '../routes/stack';

type ParamList = {
    Detail: {
        data: IDataListFood;
    };
};

const styles = StyleSheet.create({
    contain: {
        flex: 1,
    },
});

export const Detail: React.FC = () => {
    const route = useRoute<RouteProp<ParamList, 'Detail'>>();
    const navigation = useNavigation<NativeStackNavigationProp<stacks>>();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.data
                ? route.params?.data.name
                : 'Detalhes da receita',
            headerRight: () => (
                <Pressable>
                    <Entypo name="heart" size={28} color="#ff4141" />
                </Pressable>
            ),
        });
    }, [navigation, route.params?.data]);

    return (
        <View style={[styles.contain]}>
            <Text>detail {route.params?.data.name}</Text>
        </View>
    );
};
