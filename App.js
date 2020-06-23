import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './src/home/Home';
import Calculator from './src/calculator/index';
import Browser from './src/browser/index';
import Contacts from './src/contacts/home/index';
import ShowMe from './src/showMe/index'

const Stack = createStackNavigator();
                                            // ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                                            // ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡝⢿⡇⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                                            // ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠈⠁⠈⢻⣿⣿⣿⣿⡿⢿⠿⣻⠿⠿⠿⣿⣿⣿⣿
                                            // ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠈⠛⠋⠉⠄⠄⣠⣶⠄⣶⣶⠨⣿⣿⣿
                                            // ⣿⣯⡛⠛⠷⠌⠉⠛⠻⠿⠟⠄⠄⠄⢀⠄⢀⠄⣤⣾⡷⠘⣿⣇⣼⡏⢰⣿⣿⣿
                                            // ⣿⣿⣿⣶⡄⠄⠄⠄⠄⠄⠄⠄⢘⠄⣦⡌⠂⢸⣿⣯⠄⠒⠈⣿⣿⣧⣌⡙⠛⣿
                                            // ⣿⣿⣿⣭⠍⠄⠄⣠⣴⡀⠰⣾⡄⠃⢻⣿⣧⡀⠙⢿⣧⠠⠄⠘⣿⡍⠛⢿⡇⣼
                                            // ⣿⠏⣁⣤⣾⣿⣧⠈⣿⣿⠄⠸⣿⡄⠘⣿⡎⢿⣄⠈⣿⣆⣤⣆⢹⡿⠆⢰⣴⣿
                                            // ⣿⡈⣿⣿⡅⠄⠻⣷⡘⣿⣷⡀⠘⢿⡄⢹⣷⡾⠿⢧⠘⠿⠛⠋⣠⣴⣶⣿⣿⣿
                                            // ⣷⣶⠘⣿⣷⠄⠄⢻⣧⠘⣿⣷⣀⣸⣷⠈⣿⠄⠄⠄⠄⠄⠄⠄⠹⣿⣿⣿⣿⣿
                                            // ⣿⡿⣃⠙⣿⣇⢰⣶⣿⣧⠘⠿⠟⠋⠁⠄⠉⠄⠄⠄⠄⣿⣿⣶⣤⣝⡻⣿⣿⣿
                                            // ⣿⣿⣿⣧⠸⣿⣿⣿⠿⣿⣤⠄⠄⢀⡄⠄⢀⠄⠄⠄⠄⢿⣿⣿⣿⣿⣿⣿⣿⣿
                                            // ⣿⣿⣿⣿⣧⣉⣩⣤⣶⠈⢀⡀⠄⣼⣿⡄⣸⣆⣿⣶⣄⠘⣿⣿⣿⣿⣿⣿⣿⣿
                                            // ⣿⣿⣿⣿⣿⣿⣿⣿⡿⢠⣿⣷⢰⣿⣿⣇⣿⣿⣿⣿⣿⣷⣽⣿⣿⣿⣿⣿⣿⣿
                                            // ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
          
                  // ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿                           ⠀⠀⠀⢀⣠⢖⣮⣟⣯⢿⣲⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   
                  // ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿                           ⠀⠀⡠⣣⢯⣻⣺⢾⣽⣻⣽⡾⣷⣿⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
                  // ⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⣩⣭⣶⣶⣮⣭⡙⠿⣿⣿⣿⣿⣿⣿                           ⠀⢬⡫⣞⠕⢗⢽⣻⣞⣯⣷⣿⣻⣽⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
                  // ⣿⣿⣿⣿⣿⣿⠿⣋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⢿⣿⣿⣿                           ⢨⢣⢯⡒⠀⢨⢳⣳⢿⣽⢾⠹⠹⢯⢿⡺⡄⠀⠀⠀⠀⠀⠀⠀⠀ 
                  // ⣿⣿⣿⣿⣿⡃⠄⠹⡿⣿⣿⣿⣿⠟⠛⣿⣿⣿⣿⣷⡌⢿⣿⣿                           ⢰⢝⣵⡳⣕⡾⣽⣺⣯⢿⡇⠅⠡⠀⡂⠡⡑⡀⡀⠀⠀⠀⠀⠀⠀ 
                  // ⣿⣿⣿⣿⣿⠐⣠⡶⣶⣲⡎⢻⣿⣤⣴⣾⣿⣿⣿⣿⣿⠸⣿⣿                           ⣗⢯⢾⣝⣗⣯⢷⣗⣿⢽⡣⠁⠨⠐⢀⠡⠐⡐⢔⢡⡐⢄⢤⣀⠀ 
                  // ⣿⠟⣋⡥⡶⣞⡯⣟⣾⣺⢽⡧⣥⣭⣉⢻⣿⣿⣿⣿⣿⣆⢻⣿                           ⣞⡽⣽⣺⣳⢯⣟⡷⡯⡏⡂⠌⡀⢂⢐⠠⡡⡊⡦⡳⡺⡌⢪⢗⢿ 
                  // ⡃⣾⢯⢿⢽⣫⡯⣷⣳⢯⡯⠯⠷⠻⠞⣼⣿⣿⣿⣿⣿⣿⡌⣿                           ⢞⣞⣵⣳⢽⣳⢯⣞⡯⠂⠂⠢⢂⢂⠢⡨⣢⠱⠨⠐⠌⠬⠘⠘⠊ 
                  // ⣦⣍⡙⠫⠛⠕⣋⡓⠭⣡⢶⠗⣡⣶⡝⣿⣿⣿⣿⣿⣿⣿⣧⢹                           ⠀⢗⡵⡽⡽⣺⡽⡾⣝⢬⢀⢀⠀⡀⢂⠪⡫⣀⠀⠀⠀⠀⠀⠀⠀ 
                  // ⣿⣿⣿⣿⣿⣿⣘⣛⣋⣡⣵⣾⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⢸                           ⠀⠀⠘⢝⣞⢽⣝⣯⢷⣑⢝⢜⢔⢔⢰⢰⢸⢰⡹⡤⡄⠀⠀⠀⠀ 
                  // ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⢸                           ⠀⠀⠀⠀⠈⠓⢗⡽⣝⢽⡲⣱⢱⡹⡸⡸⡸⣱⢳⣕⢝⣆⠀⠀⠀ 
                  // ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⢸                           ⠀⠀⠀⠀⠀⠀⠀⠈⠚⠵⢹⢪⠣⠃⠑⠱⠱⢵⢕⣝⡜⣞⠇ 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Home" component={Home}/>
        <Stack.Screen name= "Calculadora" component={Calculator}/>
        <Stack.Screen name= "Navegador" component={Browser}/>
        <Stack.Screen name= "Agenda Telefonica" component={Contacts}/>
        <Stack.Screen name= "Me mostre no mapa" component={ShowMe}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
