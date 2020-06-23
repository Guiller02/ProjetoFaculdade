import React, { Component } from 'react';
import { Text } from 'react-native';
import Database from '../database';
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';
import {Alert}  from 'react-native'

const db = new Database();

export default class index extends Component {
    state={
        contactId:0,
        name:'',
        number:'',
        loading:true
    };

    updateContact(){
        db.updateContact(this.state.contactId,this.state.name,this.state.number).then(Alert.alert('Sucesso','Usuario atualizado'));
        this.props.navigation.goBack();
    };

    getContact(){
        const contactId = this.props.route.params.contact;
        db.ContactById(contactId).then(data =>{
            this.setState({
                contactId:data.id,
                name:data.name,
                number:data.number
            });
        });
        this.setState({loading:false});
    };

    componentDidMount(){
        this.getContact();
    };

    render() {
        if(this.state.loading==true){
            return(<Text>Carregando</Text>);
        };
        return (
            <Container>
                <Content>
                    <Form style={{paddingBottom:20}}>
                        <Item floatingLabel>
                            <Label>Nome</Label>
                            <Input value={this.state.name} onChangeText={text => this.setState({name:text})}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Número</Label>
                            <Input keyboardType = 'numeric' value={this.state.number} onChangeText={text => this.setState({number:text})}/>
                        </Item>
                    </Form>
                    <Button style={{flex:1, justifyContent:'center'}} 
                        onPress={()=>{
                                if(this.state.name===''){
                                    Alert.alert('Erro','Contato sem nome')
                                }
                                else if(this.state.number===''){
                                    Alert.alert('Erro','Contato sem número')
                                }
                                else if(this.state.number.length>=15){
                                    Alert.alert('Erro','Número invalido')
                                }
                                else{
                                    this.updateContact();
                                }}}>
                        <Text style={{color:'white'}}>Alterar contato</Text>
                    </Button>
                </Content>
            </Container>
        );
    };
};