import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput, Menu, Checkbox, Button  } from 'react-native-paper';

export default function SOCScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>State of Charge Settings:</Text>
      <TextInput label="Fully Charged SOC [%]" mode="outlined" value="95" style={styles.textInput} />
      <TextInput label="Discharged SOC [%]" mode="outlined" value="10" style={styles.textInput} />
      <TextInput label="SOC Drift Rate" mode="outlined" value="Fast (~30 sec)" style={styles.textInput} />
      
      <View style={styles.checkboxView}>
        <Text> Wait for &emsp;</Text>
        <TextInput mode="outlined" value="10" style={styles.timeInput} />
        <Text>&emsp; seconds before starting SOC Drift </Text>
      </View>

      <Text style={styles.heading}>{'\n'} State of Charge Drift Points :</Text>
      <View style={styles.menuView}>
        <Menu.Item style={styles.menuItem} onPress={() => {}} title="Drift #1: 2.50 V -> 10% (DOWN)" />
        <Menu.Item style={styles.menuItem} onPress={() => {}} title="Drift #2: 2.80 V -> 20% (DOWN)" />
        <Menu.Item style={styles.menuItem} onPress={() => {}} title="Drift #3: 3.50 V -> 80% (UP)" />
        <Menu.Item style={styles.menuItem} onPress={() => {}} title="Drift #4: 3.60 V -> 95% (UP)" />
        <Menu.Item style={styles.menuItem} onPress={() => {}} title="Drift #5: 0.00 V -> 0% (DOWN)" />
      </View>
      
      <Text style={styles.heading}>{'\n'}Drift Point #1:</Text>
      <TextInput label="Pack SOC To Drift To [%]" mode="outlined" value="10" style={styles.textInput} />
      <TextInput label="Cell Voltage For Drift [V]" mode="outlined" value="2.500" style={styles.textInput} />
      
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
  menuView:{
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: '#fff'
  },
  menuItem:{
    backgroundColor: '#DCDCDC'
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
  timeInput:{
    paddingTop: 7,
    paddingBottom: 10,
    width: 40, 
    height: 36,
    color: '#fff'
  },
  lastView: {
    paddingTop: 20,
    paddingBottom: 50,
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
