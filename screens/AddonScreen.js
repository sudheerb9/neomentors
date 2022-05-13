import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput, Menu, Checkbox, Button  } from 'react-native-paper';

export default function AddonScreen() {

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>General Addon Settings:</Text>
      <TextInput label="Number of Thermistor Expansion Modules" mode="outlined" value="None (Disabled)" style={styles.textInput} />
      <TextInput label="Enable Logging Display/ Connect Module" mode="outlined" value="Disabled" style={styles.textInput} />
      <TextInput label="Simulate ECM (For scan-gauge) " mode="outlined" value="Diabled" style={styles.textInput} />

      <View style={styles.lastView}>
        <Button icon="" mode="outlined" color="black" style={styles.button} labelStyle={styles.buttonText} onPress={() => console.log('pressed')}>
          APPLY
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingTop: 28
  },
  heading:{
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  checkboxView:{
    paddingTop: 7,
    paddingBottom: 7,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  checkboxText:{
    fontSize: 16
  },
  textInput: {
    paddingTop: 7,
    paddingBottom: 10,
    width: 340, 
    height: 36,
    color: '#fff'
  },
  lastView: {
    paddingTop: 30,
    alignItems:'center'
  },
  button:{
    width: 180, 
    height: 50, 
    alignContent: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16
  }
});
