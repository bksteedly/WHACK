import * as React from 'react';
import {View, Text, TextInput} from 'react-native';

export default function Map({navigation}){
    const projectId = 'unique-well-404204';

    // Imports the Google Cloud client library
    const {Translate} = require('@google-cloud/translate').v2;

    // Instantiates a client
    const translate = new Translate({projectId});

    async function quickStart() {
    // The text to translate
    // const text = 'Hello, world!';

    // The target language
    const target = 'ru';
    
    const [enteredText, setEnteredText] = useState('');
    const [resultText, setResultText] = useState('some translation');

    // Translates some text into Russian
    const [translation] = await translate.translate(text, target);
    console.log(`Text: ${entereText}`);
    console.log(`Translation: ${resultText}`);
    }

    quickStart();

    return(
        <View>
            <View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
                <TextInput
                        multiline
                        placeholer = 'Enter text'
                        onChangeText={(text)=> setEnteredText(text)}
                    />
            </View>
            <View>
                <Text>{resultText}</Text>
            </View>
        </View>

    );
}