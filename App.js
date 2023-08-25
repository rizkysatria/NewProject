import React, { useState } from "react";
import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  StatusBar,
  View, 
  Text, 
  Button, 
  TextInput,
  useColorScheme,
  NativeModules
} from 'react-native';

export default function App() {
    const [text,setText] = useState('');
    return (
      <SafeAreaView>
        <StatusBar barStyle='light-content' />
          <ScrollView>
              <View style={styles.maincontainer}>
                    <Text style={styles.title}>How to get TextInput value on Button Click into React Native</Text>
                    <View style={styles.container}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Enter Name"
                            onChangeText={(text) => setText(text)}
                            value={text}
                        />
                          <Button title="submit" onPress={() => 
                          onPressBtn()
                          // alert(text)
                        }/>
                    </View>
                </View>
          </ScrollView>
      </SafeAreaView>
    );
}

const onPressBtn = () => {
  console.log(NativeModules);
  console.log(NativeModules.NewProjectBridgeManager.test)
}

const styles = StyleSheet.create({
    maincontainer: {
        marginTop: 40,
    },
    input:{
        borderWidth:1,
        marginBottom:10,
        padding:10,
        width:'100%',
        borderRadius:10,
     },
    title: {
        backgroundColor: 'red',
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        color: '#FFFF',
        fontWeight:'bold',
    },
    container: {
        marginTop: 40,
        alignItems: 'center',
    },
});