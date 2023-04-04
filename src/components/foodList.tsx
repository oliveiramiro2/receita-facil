import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import React from 'react';
import { IDataListFood } from '../services/data';

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
});

export const FoodList: React.FC<{ data: IDataListFood }> = ({ data }) => (
    <TouchableOpacity activeOpacity={0.9} style={[styles.contain]}>
        <Image style={[styles.image]} source={{ uri: data.cover }} />
        <View style={[styles.info]}>
            <Text style={[styles.title]}>{data.name}</Text>
            <Text style={[styles.description]}>
                {data.total_ingredients} | {data.time} min
            </Text>
        </View>
    </TouchableOpacity>
);
