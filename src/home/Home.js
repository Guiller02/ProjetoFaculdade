import React from 'react'
import { View} from 'react-native'
import { Container, Header, Content, Button, Text } from 'native-base';

export default function Home({navigation}) {
    return (
        <Content>
            <Button full light onPress={()=> navigation.navigate('Calculadora')}>
                <Text>Calculadora</Text>
            </Button>

            <Button full onPress={()=> navigation.navigate('Navegador')}>
                <Text>Navegador</Text>
            </Button>

            <Button full light onPress={()=> navigation.navigate('Agenda Telefonica')}>
                <Text>Agenda Telefonica</Text>
            </Button>
            
            <Button full onPress={()=> navigation.navigate('Me mostre no mapa')}>
                <Text>Me mostre no mapa</Text>
            </Button>

        </Content>
    )
}
