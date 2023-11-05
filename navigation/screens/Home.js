import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Alert, ActivityIndicator, SafeAreaView, Image, Dimensions, TextInput} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Constants from 'expo-constants'
import { SearchBar } from 'react-native-screens';
import getFormattedWeatherData from './weatherService';
import Forecast from './Forecast';



export default function Home({navigation}){

    const CurrentWeather = () => {
        
        return (
            <View>
                <Text> °C</Text>
            </View>
        )
    }

    const [query, setQuery] = useState({q: 'tokyo'})
    const [units, setUnits] = useState('metric')
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({...query, units}).then(
            (data) => {
                setWeather(data);
            });
        };

        fetchWeather();
    }, [query, units]);

    return(
        <View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text 
                onPress = {()=>alert('basic information!')}
                style={{fontSize:26, fontWeight:'bold'}}
            >Basic Information</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 0.2}}>
            <View style={{paddingRight:20}}>
                <Text>MA, USA<br></br>7:58 PM</Text>
            </View>
            <View style={{paddingRight:20}}>
                <Text>+ 13hrs</Text>
            </View>
            <View>
                <Text>Seoul, Korea<br></br>8:58 AM</Text>
            </View>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.3}}>
            <View style={{paddingBottom:5}}>
                <Text>Sat Nov 4</Text>
            </View>
            <View style={{paddingBottom:5}}>
                <Ionicons name="cloudy" size={50}/>
            </View>
            <View>
                <CurrentWeather />
                <p>ddd</p>
                {weather && (
                    <div>
                        <Forecast title="daily forecast" items={weather.daily} />
                    </div>
                )}
            </View>
            <View>
                <Text>5°C / 10°C</Text>
            </View>
            </View>


            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 0.2}}>
            <View style={{paddingRight:20}}>
                <Text>Sun<br></br><Ionicons name="cloudy" size={32}/><br></br>5°C / 10°C</Text>
            </View>
            <View style={{paddingRight:20}}>
                <Text>Mon<br></br><Ionicons name="cloudy" size={32}/><br></br>5°C / 10°C</Text>
            </View>
            <View style={{paddingRight:20}}>
                <Text>Tue<br></br><Ionicons name="cloudy" size={32}/><br></br>5°C / 10°C</Text>
            </View>
            <View style={{paddingRight:20}}>
                <Text>Wed<br></br><Ionicons name="cloudy" size={32}/><br></br>5°C / 10°C</Text>
            </View>
            <View style={{paddingRight:20}}>
                <Text>Thu<br></br><Ionicons name="cloudy" size={32}/><br></br>5°C / 10°C</Text>
            </View>
            <View style={{paddingRight:20}}>
                <Text>Fri<br></br><Ionicons name="cloudy" size={32}/><br></br>5°C / 10°C</Text>
            </View>
            <View style={{paddingRight:20}}>
                <Text>Sat<br></br><Ionicons name="cloudy" size={32}/><br></br>5°C / 10°C</Text>
            </View>
            </View>

        </View>
    );
}