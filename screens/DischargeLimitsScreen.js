import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput, Menu, Checkbox, Button  } from 'react-native-paper';

export default function DischargeLimitsScreen() {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Basic Limit Settings:</Text>
      <TextInput label="Maximum Continuous Charge Limit [A]" mode="outlined" value="0" style={styles.textInput} />
      <Text>&nbsp; The actual limit calculated by BMS may be lower than this value. If pulse limits are enabled the value may be higher </Text>
      <TextInput label="Maximum Analog Output CCL [A]" mode="outlined" value="0" style={styles.textInput} />
     

      <Text style={styles.heading}>{'\n'} State of Charge Derate Settings :</Text>
      <TextInput label="Start reducing current limit at (% state of charge) " mode="outlined" value="10" style={styles.textInput} />
      <TextInput label="Reduce maximum possible limit by (Amps per % SOC)" mode="outlined" value="9" style={styles.textInput} />

      <Text style={styles.heading}>{'\n'} Failsafe settings:</Text>
      <TextInput label="Voltage derate CCL to Zero Timer (seconds)" mode="outlined" value="0.1" style={styles.textInput} />
      <TextInput label="Voltage restore CCL Timer (seconds)" mode="outlined" value="1.0" style={styles.textInput} />
      <TextInput label="Voltage failure derate timer (seconds)" mode="outlined" value="9.0" style={styles.textInput} />
      <TextInput label="Peak current CCL increment Timer (seconds) " mode="outlined" value="1.0" style={styles.textInput} />
      <TextInput label="Peak current CCL decrement Timer (seconds)" mode="outlined" value="3.0" style={styles.textInput} />

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
    width: 50, 
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
