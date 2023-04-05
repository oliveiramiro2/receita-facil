import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ScrollView,
    Image,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Entypo, AntDesign, Feather } from '@expo/vector-icons';

import { IDataListFood } from '../services/data';
import { stacks } from '../routes/stack';
import { Ingredients, Instructions } from '../components';

type ParamList = {
    Detail: {
        data: IDataListFood;
    };
};

const styles = StyleSheet.create({
    contain: {
        backgroundColor: '#f3f9ff',
        paddingVertical: 14,
        paddingHorizontal: 14,
    },
    image: {
        height: 200,
        borderRadius: 14,
        width: '100%',
    },
    playIcon: {
        position: 'absolute',
        zIndex: 9,
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
        paddingHorizontal: 2,
    },
    title: {
        fontSize: 18,
        marginTop: 14,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    ingredientsText: {
        marginBottom: 14,
        fontSize: 16,
    },
    instructionArea: {
        backgroundColor: '#4cbe6c',
        flexDirection: 'row',
        padding: 8,
        borderRadius: 4,
        marginBottom: 14,
    },
    instructionText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff',
        marginRight: 8,
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
        <ScrollView
            contentContainerStyle={{ paddingBottom: 14 }}
            style={[styles.contain]}
        >
            <Pressable>
                <View style={[styles.playIcon]}>
                    <AntDesign name="playcircleo" size={48} color="#fafafa" />
                </View>
                <Image
                    source={{ uri: route.params?.data.cover }}
                    style={[styles.image]}
                />
            </Pressable>
            <View style={[styles.headerDetails]}>
                <View>
                    <Text style={[styles.title]}>
                        {route.params?.data.name}
                    </Text>
                    <Text style={[styles.ingredientsText]}>
                        Ingredientes ({route.params?.data.total_ingredients})
                    </Text>
                </View>
                <Pressable>
                    <Feather name="share-2" size={24} color="#121212" />
                </Pressable>
            </View>

            {route.params?.data.ingredients.map((value) => (
                <Ingredients data={value} key={value.id} />
            ))}

            <View style={[styles.instructionArea]}>
                <Text style={[styles.instructionText]}>Modo de preparo</Text>
                <Feather name="arrow-down" size={24} color="#fff" />
            </View>
            {route.params?.data.instructions.map((value) => (
                <Instructions data={value} key={value.id} />
            ))}
        </ScrollView>
    );
};
