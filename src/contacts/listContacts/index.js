import React, { Component } from 'react';
import Database from '../database';
import { Container,Icon, Right,Left, Body, Content, List, ListItem, Text,Fab, View } from 'native-base';

const db = new Database();
export default class index extends Component() {
    state={
        contacts: []
    }

    async getContacts(){
        let contacts = []
        await db.listContacts().then(data => {
            contacts = data;
            this.setState({contacts:contacts})
        })
    }


    componentDidMount(){
        this.getContacts()
        
    }
    
    render() {
        return (
            <Container>
            <Content>
            <List
              dataArray={this.state.contacts}
              renderRow={data => (
                <ListItem >
                    <Body>
                      <Text>{data.id}</Text>
                      
                      <Text>{data.name}</Text>

                      <Text>{data.number}</Text>

                    </Body>
                </ListItem>
            )}></List>
             
            </Content>
            <Fab
            onPress={()=> {
                print('a')
            }}
            position="bottomRight">
            <Icon type="FontAwesome5" name="plus" />
          </Fab>
          </Container>
        )
    }
}


            