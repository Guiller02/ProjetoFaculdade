import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import ListContacts from '../listContacts/index';
import AddContact from '../createContact/index';
import Contact from '../Contact/index';
import AlterContact from '../alterContact/index';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Agenda Telefonica" component={ListContacts} />
        <Stack.Screen name="Adicionar Contato" component={AddContact} />
        <Stack.Screen name="Contato" component={Contact} />
        <Stack.Screen name="Alterar Contato" component={AlterContact} />
        </Stack.Navigator>
  );
};