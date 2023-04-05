import {
    StyleSheet,
    Text,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import WebView from 'react-native-webview';

interface IPropsVideo {
    handleClose: Function;
    link: string;
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        width: '100%',
    },
    backButton: {
        width: '100%',
        backgroundColor: '#4cbe6c',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 14,
    },
    backText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 14,
    },
    contentView: {
        flex: 1,
        width: '100%',
    },
});

export const Video: React.FC<IPropsVideo> = ({ handleClose, link }) => (
    <SafeAreaView style={[styles.contain]}>
        <TouchableOpacity style={[styles.backButton]} onPress={() => handleClose(false)}>
            <Feather name="arrow-left" size={24} color="#fff" />
            <Text style={[styles.backText]}>Voltar</Text>
        </TouchableOpacity>
        <WebView source={{ uri: link }} style={[styles.contentView]} />
    </SafeAreaView>
);
