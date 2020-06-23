import React, {useState} from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { RectButton} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
const Navegador = () => {
    const [y, setY] = useState(String);
    const navigation = useNavigation();
    function hundleVoltar(){
        navigation.goBack();
    }
    function browser(){
        setY(campoUrl);
    }
    const [campoUrl, setCampoUrl] = useState('https://'); 
    return (
    <>
    <WebView source={{uri: y}}/>
    <View style={styles.container}>
    <RectButton style={styles.button} onPress={hundleVoltar}>
        <Text style={styles.buttonText}>
            Voltar
        </Text>
    </RectButton>
    <View style={styles.campoContainer}>
    <TextInput style={styles.campo} 
    value={campoUrl}
    onChangeText={text => setCampoUrl(text)}
    />
    </View>
    <RectButton style={styles.button} onPress={browser}>
        <Text style={styles.buttonText}>
            ir
        </Text>
    </RectButton>
    </View>
    
    </>
    )}
    const styles = StyleSheet.create({
        campoContainer: {
            marginTop: 0,
        },
        campo:{
            backgroundColor: '#3c3382',
            color: '#FFF',
            height: 50,
            width: "95%",
            borderColor: '#FFF',
            borderRadius: 10,
            textAlign: 'center',
            marginBottom: 8,
            fontSize:20,
            marginLeft: 0,
            marginTop: 1,
            marginRight: 15,
        },
        container:{
            width: '100%',
            flexDirection: 'row',
        },
    
        button: {
            backgroundColor: '#3c3382',
            height: 50,
            width: "15%",
            flexDirection: 'row',
            borderRadius: 10,
            overflow: 'hidden',
            alignItems: 'center',
            marginTop: 1,
            marginLeft: 5,
            marginRight: 5,
        },
        buttonText: {
            flex: 1,
            justifyContent: 'center',
            textAlign: 'center',
            color: '#FFF',
            fontSize: 15,
        },
    })

export default Navegador;