import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Container,Icon, Right,Left, Content, List, ListItem, Text,Fab } from 'native-base';
export default class index extends Component {
    state={
        contacts:[
            {name:"Guilherme",number:'61985204023'},
            {name:"Japones talarico",number:'61985204022'},
            {name:"Carlinhos gospel",number:'61985204021'},
            {name:"Vitao doente",number:'61985204020'}
        ]
    }

    componentDidMount(){
        
    }
    render() {
        return (
            <Container>
            <Content>
            <List
              dataArray={this.state.contacts}
              renderRow={data => (
                <ListItem>
                    <Left>
                        <Text>{data.name}</Text>
                    </Left>
                   
                    <Right>
                        <Text>{data.number}</Text>
                    </Right>
                    
                </ListItem>
            )}></List>
             
            </Content>
            <Fab
            onPress={()=> {
                let joined = this.state.contacts.concat({name:"Guilherme",number:'61985204023'});
                this.setState({ contacts: joined })
            }}
            position="bottomRight">
            <Icon type="FontAwesome5" name="plus" />
          </Fab>
          </Container>
        )
    }
}


            