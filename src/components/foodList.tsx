import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View as MotiView } from 'moti';

import { IDataListFood } from '../services/data';
import { stacks } from '../routes/stack';

const styles = StyleSheet.create({
    contain: {
        marginBottom: 14,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 14,
    },
    info: {
        position: 'absolute',
        bottom: 14,
        left: 14,
        zIndex: 99,
    },
    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    description: {
        color: '#fff',
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '55%',
        borderRadius: 14,
        zIndex: 50,
        backgroundColor: 'transparent',
    },
});

export const FoodList: React.FC<{ data: IDataListFood, index: number }> = ({ data, index }) => {
    const navigation = useNavigation<NativeStackNavigationProp<stacks>>();

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.contain]}
            onPress={() => navigation.navigate('Detail', { data })}
        >
            <MotiView
                from={{ opacity: 0, translateX: -100 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{
                    delay: 300 * Number(index),
                    type: 'timing',
                    duration: 650,
                }}
            >
                <Image style={[styles.image]} source={{ uri: data.cover }} />
                <View style={[styles.info]}>
                    <Text style={[styles.title]}>{data.name}</Text>
                    <Text style={[styles.description]}>
                        {data.total_ingredients} | {data.time} min
                    </Text>
                </View>
                <LinearGradient
                    style={[styles.gradient]}
                    colors={[
                        'transparent',
                        'rgba(0,0,0,0.7)',
                        'rgba(0,0,0,0.95)',
                    ]}
                />
            </MotiView>
        </TouchableOpacity>
    );
};
