import {
    Text,
    StyleSheet,
    SafeAreaView,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { FoodList, Logo } from '../components';
import { data } from '../services/data';
import { stacks } from '../routes/stack';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingTop: 36,
        paddingHorizontal: 14,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0e0e0e',
    },
    form: {
        width: '100%',
        borderRadius: 8,
        marginVertical: 16,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ecece',
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        width: '90%',
        maxWidth: '90%',
        height: 54,
    },
});

export const Home: React.FC = () => {
    const [search, setSearch] = useState<string>('');

    const navigation = useNavigation<NativeStackNavigationProp<stacks>>();

    const handleSearch = (): undefined | void => {
        if (search === '') return;

        const input = search;
        setSearch('');
        navigation.navigate('Search', { name: input });
    };

    return (
        <SafeAreaView style={[styles.contain]}>
            <Logo />
            <Text style={[styles.title]}>Encontre a receita</Text>
            <Text style={[styles.title]}>que combina com você</Text>
            <View style={[styles.form]}>
                <TextInput
                    placeholder="Digite o nome de uma comida..."
                    style={[styles.input]}
                    value={search}
                    onChangeText={setSearch}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name="search" size={28} color="#4cbe6c" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <FoodList data={item} />}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};
