import React from 'react'
import { View} from 'react-native'
import { Container, Content, Button, Text, Card, CardItem, Body } from 'native-base';

export default function Home({navigation}) {
    return (

        // ######
        // #     #  #####    ####        #  ######  #####   ####       #####    ####         ##    #       #####    ####
        // #     #  #    #  #    #       #  #         #    #    #      #    #  #    #       #  #   #       #    #  #    # 
        // ######   #    #  #    #       #  #####     #    #    #      #    #  #    #      #    #  #       #    #  #    # 
        // #        #####   #    #       #  #         #    #    #      #    #  #    #      ######  #       #    #  #    # 
        // #        #   #   #    #  #    #  #         #    #    #      #    #  #    #      #    #  #       #    #  #    # 
        // #        #    #   ####    ####   ######    #     ####       #####    ####       #    #  ######  #####    ####
                                            
        <Container>
            <Content padder>
                <Card style={{ display: 'flex' , alignItems: 'center' }}>
                    <CardItem header bordered>
                        <Button full onPress={()=> navigation.navigate('Calculadora')} style={{ width: "100%" }}>
                            <Text>Calculadora</Text>
                        </Button>
                    </CardItem>

                    <CardItem bordered>
                        <Body>
                            <Text>
                            Uma calculadora com operadores básicos e multiplicação, divisão e porcentagem.
                            </Text>
                        </Body>
                    </CardItem>
                </Card>

                <Card style={{ display: 'flex' , alignItems: 'center' }}>
                    <CardItem header bordered>
                        <Button full onPress={()=> navigation.navigate('Navegador')} style={{ width: "100%" }}>
                            <Text>Navegador</Text>
                        </Button>
                    </CardItem>

                    <CardItem bordered>
                        <Body>
                            <Text>
                            Um browser para acessar qualquer site na internet.
                            </Text>
                        </Body>
                    </CardItem>
                </Card>

                <Card style={{ display: 'flex' , alignItems: 'center' }}>
                    <CardItem header bordered>
                        <Button full onPress={()=> navigation.navigate('Agenda Telefonica')} style={{ width: "100%" }}>
                            <Text>Agenda Telefônica</Text>
                        </Button>
                    </CardItem>

                    <CardItem bordered>
                        <Body>
                            <Text>
                            Consulte e crie novos contatos.
                            </Text>
                        </Body>
                    </CardItem>
                </Card>

                <Card style={{ display: 'flex' , alignItems: 'center' }}>
                    <CardItem header bordered>
                        <Button full onPress={()=> navigation.navigate('Me mostre no mapa')} style={{ width: "100%" }}>
                            <Text>
                                Me mostre no mapa!
                            </Text>
                        </Button>
                    </CardItem>

                    <CardItem bordered>
                        <Body>
                            <Text>
                            Localize a si mesmo no mapa interativo.
                            </Text>
                        </Body>
                    </CardItem>
                </Card>

            </Content>
        </Container>
    )
}
