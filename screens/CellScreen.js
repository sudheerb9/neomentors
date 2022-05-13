import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput, Menu, Checkbox, Button  } from 'react-native-paper';

export default function CellScreen() {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Cell voltage Limits:</Text>
      <TextInput label="Maximum Cell Voltage" mode="outlined" value="3.625 V" style={styles.textInput} />
      <TextInput label="Minimum Cell Voltage" mode="outlined" value="2.820 V" style={styles.textInput} />
      <TextInput label="Max Cell Voltage while charging" mode="outlined" value="3.625 V" style={styles.textInput} />
      
      <Text style={styles.heading}>{'\n'}Balance Settings:</Text>
      <View style={styles.checkboxView}>
        <Text style={styles.checkboxText}> Enable Cell Balancing </Text> 
        <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
      </View>
      <TextInput label="Start balancing if atleast one cell is above" mode="outlined" value="3.500 V" style={styles.textInput} />
      <TextInput label="Stop balancing when all cells are within" mode="outlined" value="0.010 V" style={styles.textInput} />
      <TextInput label="Never balance individual cells below" mode="outlined" value="3.200 V" style={styles.textInput} />

      <Text style={styles.heading}>{'\n'}Pack Voltage Limits:</Text>
      <View style={styles.checkboxView}>
        <Text style={styles.checkboxText}> Limit based on individual cell voltages </Text> 
        <Checkbox status={checked2 ? 'checked' : 'unchecked'} onPress={() => { setChecked2(!checked2); }} />
      </View>
      <View style={styles.checkboxView}>
        <Text style={styles.checkboxText}> Limit based on cell voltages and pack voltage </Text> 
        <Checkbox status={checked3 ? 'checked' : 'unchecked'} onPress={() => { setChecked3(!checked3); }} />
      </View>
      <TextInput label="Maximum pack voltage" mode="outlined" value="" style={styles.textInput} />
      <TextInput label="Minimum pack voltage" mode="outlined" value="" style={styles.textInput} />
      <TextInput label="Max pack voltage while charging" mode="outlined" value="" style={styles.textInput} />
      
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
