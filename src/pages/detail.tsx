import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ScrollView,
    Image,
    Modal,
    Share,
} from 'react-native';
import React, { useLayoutEffect, useState, useMemo } from 'react';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Entypo, AntDesign, Feather } from '@expo/vector-icons';
import { useToast } from 'react-native-toast-notifications';
import { MotiPressable } from 'moti/interactions';

import { IDataListFood } from '../services/data';
import { stacks } from '../routes/stack';
import { Ingredients, Instructions, Video } from '../components';
import { isFavorite, removeFavorite, saveFavorite } from '../utils/async';

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
        bottom: 0,
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
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [favorite, setFavorite] = useState<boolean>(false);

    const route = useRoute<RouteProp<ParamList, 'Detail'>>();
    const navigation = useNavigation<NativeStackNavigationProp<stacks>>();
    const toast = useToast();

    const handleFavorite = async () => {
        if (favorite) {
            await removeFavorite(route.params?.data.id);
            setFavorite(false);
            toast.show('Receita desfavoritada com sucesso', {
                type: 'warning',
                placement: 'center',
                duration: 2000,
                animationType: 'zoom-in',
            });
            return;
        }
        await saveFavorite('@appreceitas', route.params?.data);
        setFavorite(true);
        toast.show('Receita favoritada com sucesso', {
            type: 'success',
            placement: 'center',
            duration: 2000,
            animationType: 'zoom-in',
        });
    };

    useLayoutEffect(() => {
        const statusFavorites = async () => {
            const receiveFavorites = await isFavorite(route.params?.data);
            setFavorite(receiveFavorites);
        };
        statusFavorites();

        navigation.setOptions({
            title: route.params?.data
                ? route.params?.data.name
                : 'Detalhes da receita',
            headerRight: () => (
                <MotiPressable
                    onPress={handleFavorite}
                    animate={useMemo(
                        () =>
                            ({ pressed }) => {
                                'worklet';

                                return {
                                    scale: pressed ? 0 : 1,
                                };
                            },
                        []
                    )}
                >
                    <Entypo
                        name={favorite ? 'heart' : 'heart-outlined'}
                        size={28}
                        color="#ff4141"
                    />
                </MotiPressable>
            ),
        });
    }, [navigation, route.params?.data, favorite]);

    const shareFood = async () => {
        try {
            await Share.share({
                message: `Receita: ${route.params?.data.name}\nIngredientes: ${route.params?.data.total_ingredients}\nVi lá no app Receita fácil`,
            });
        } finally {
            /* nothing */
        }
    };

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 14 }}
            style={[styles.contain]}
        >
            <Pressable onPress={() => setOpenModal(true)}>
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
                <Pressable onPress={shareFood}>
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

            <Modal
                visible={openModal}
                onRequestClose={() => setOpenModal(false)}
                animationType="slide"
            >
                <Video
                    handleClose={setOpenModal}
                    link={route.params?.data.video}
                />
            </Modal>
        </ScrollView>
    );
};
