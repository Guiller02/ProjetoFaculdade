import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import ListContacts from '../listContacts/index';
import AddContact from '../createContact/index';

const Stack = createStackNavigator();

export default function App() {
  return (  
      <Tab.Navigator>
      <Stack.Screen name= "Adicionar Contato" component={AddContact}/>
        <Stack.Screen name= "listar contatos" component={ListContacts}/>
    </Tab.Navigator>

    
  )
}