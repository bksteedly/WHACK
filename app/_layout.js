import * as React from 'react';
import {View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
//Screen Names
const homeName = 'Home';
const currencyName = 'Currency';
const mapName = 'Map';
const translatorName = 'Translator';

//Screens import 
import Home from '../navigation/screens/Home';
import Currency from '../navigation/screens/Currency';
import Translator from '../navigation/screens/Translator';
import Map from '../navigation/screens/Map';


export default function MainContainer(){
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName = {homeName}
                //icon
                screenOptions = {({route})=> ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn=route.name;
                        if (rn==homeName){
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn ==currencyName){
                            iconName = focused ? 'cash' : 'cash-outline';
                        } else if (rn ==mapName){
                            iconName = focused ? 'map' : 'map-outline';
                        } else if (rn ==translatorName){
                            iconName = focused ? 'globe' : 'globe-outline';
                        }
                        return <Ionicons name = {iconName} size = {size} color = {color}/>
                    }
                })}
            >   
                <Tab.Screen name={homeName} component={Home}/>
                <Tab.Screen name={currencyName} component={Currency}/>
                <Tab.Screen name={translatorName} component={Translator}/>
                <Tab.Screen name={mapName} component={Map}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}