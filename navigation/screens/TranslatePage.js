// import {useState} from 'react';

// import * as React from 'react';
// import {View, Text, TextInput, TouchableOpacity} from 'react-native';
// // import Translator from 'react-native-translator'
// // import translate from "translate";
// import Ionicons from 'react-native-vector-icons/Ionicons';


// export default function TranslatePage({navigation}){
//     const [value, setValue] = useState('');
//     const [result, setResult] = useState('');
//     // translate.engine = "google"; // "google", "yandex", "libre", "deepl"
//     // translate.key = process.env.DEEPL_KEY;
//     const translate = require('deepl');

//     translate({
//         free_api:true,
//         text: 'I am a text',
//         target_lang: 'FR',
//         auth_key: '285f5c02-30b4-3a65-2538-9d2e4a3990d2:fx',
//         // All optional parameters available in the official documentation can be defined here as well.
//       })
//       .then(result => {
//           console.log(result.data);
//       })
//       .catch(error => {
//           console.error(error)
//       });
    
//     // const text = translate("Hello world", "es");
//     // console.log(text);
//     const [enteredText, setEnteredText] = useState('');
//     const [resultText, setResultText] = useState('some translation');
//     return(
//         <View style = {StyleSheet.container}>
//             <View style = {StyleSheet.languageContainer}>
//                 <TouchableOpacity
//                     style={StyleSheet.languageOption}
//                     onPress={() => console.log('Pressed')}>
//                     <Text>English</Text>
//                 </TouchableOpacity>

//                 <View style={StyleSheet.arrowContainer}>
//                     <Ionicons name='arrow-forward'/>
//                 </View>

//                 <TouchableOpacity
//                     style={StyleSheet.languageOption}
//                     onPress={() => console.log('Pressed')}>
//                     <Text>French</Text>
//                 </TouchableOpacity>

//             </View>
//             {/* entertext */}
//             <View>
//                 <TextInput
//                     multiline
//                     placeholer = 'Enter text'
//                     onChangeText={(text)=> setEnteredText(text)}
//                 />
//                 <TouchableOpacity>
//                     <Ionicons name='play'/>
//                 </TouchableOpacity>
//             </View>
//             {/* input text */}
//             <View>
//                 <Text>{resultText}</Text>
//             </View>
//             {/* <Translator
//                 from="en"
//                 to="fr"
//                 value={value}
//                 onTranslated={(t) => setResult(t)}
//             /> 
//             <TextInput value={value} onChangeText={(t) => setValue(t)} />
//             <Text>{result}</Text>
//              */}
            
//         </View>
//     );

//     const styles = Stylesheet.create({
//         container:{
//             flex:1,
//             backgroundColor: '#fff',
//         },
//         languageContainer:{
//             flexDirection:'row',
//             alignItems:'center',
//             justifyContent: 'center'

//         },
//         languageOption:{
//             flex:1,
//             alignItems: center
//         },
//         arrowContainer:{},
//     })
// }