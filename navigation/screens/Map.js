import MapView from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <Text 
              onPress = {()=>navigation.navigate('Home')}
              style={{fontSize:26, fontWeight:'bold'}}
          >Map Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});



// import * as React from 'react';
// import {View, Text} from 'react-native';

// export default function Map({navigation}){
//   return(
//       <View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
//           <Text 
//               onPress = {()=>navigation.navigate('Home')}
//               style={{fontSize:26, fontWeight:'bold'}}
//           >Map Screen</Text>
//       </View>
//   );
// }
