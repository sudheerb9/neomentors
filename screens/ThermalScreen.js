import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput, Menu, Checkbox, Button } from 'react-native-paper';

export default function ThermalScreen() {
  const [checkeda, setCheckeda] = React.useState(false);
  const [checkedb, setCheckedb] = React.useState(false);
  const [checkedc, setCheckedc] = React.useState(false);
  const [checkedd, setCheckedd] = React.useState(false);
  const [checkede, setCheckede] = React.useState(false);
  const [checkedf, setCheckedf] = React.useState(false);
  const [checkedg, setCheckedg] = React.useState(false);
  const [checkedh, setCheckedh] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.checkboxText}> Select Active Thermistors </Text> 
      <View style={styles.checkboxView}>
        <Checkbox status={checkeda ? 'checked' : 'unchecked'} onPress={() => { setCheckeda(!checkeda); }} /> 
        <Text>#1</Text>
        <Checkbox status={checkedb ? 'checked' : 'unchecked'} onPress={() => { setCheckedb(!checkedb); }} /> 
        <Text>#2</Text>
        <Checkbox status={checkedc ? 'checked' : 'unchecked'} onPress={() => { setCheckedc(!checkedc); }} /> 
        <Text>#3</Text>
        <Checkbox status={checkedd ? 'checked' : 'unchecked'} onPress={() => { setCheckedd(!checkedd); }} /> 
        <Text>#4</Text>
      </View>
      <View style={styles.checkboxView}>
        <Checkbox status={checkede ? 'checked' : 'unchecked'} onPress={() => { setCheckede(!checkede); }} /> 
        <Text>#5</Text>
        <Checkbox status={checkedf ? 'checked' : 'unchecked'} onPress={() => { setCheckedf(!checkedf); }} /> 
        <Text>#6</Text>
        <Checkbox status={checkedg ? 'checked' : 'unchecked'} onPress={() => { setCheckedg(!checkedg); }} /> 
        <Text>#7</Text>
        <Checkbox status={checkedh ? 'checked' : 'unchecked'} onPress={() => { setCheckedh(!checkedh); }} /> 
        <Text>#8</Text>
      </View>
      <Text> Note: Thermal expansion module settings are in the 'Addons' tab.</Text>

      <TextInput label="Intake air thermistor # " mode="outlined" value="None (not used) " style={styles.textInput} />
      <TextInput label="Thermistor B-value [K] " mode="outlined" value="3380" style={styles.textInput} />

      <Text style={styles.heading}>{'\n'} Fan control settings:</Text>
      <View style={styles.checkboxView}>
        <Checkbox status={checked2 ? 'checked' : 'unchecked'} onPress={() => { setChecked2(!checked2); }} />
        <Text>&emsp; Enable Fan control circuit (Uses MPO3) </Text>
      </View>
      <TextInput label="Turn fan relay output ON when battery is warmer than (oC)" mode="outlined" value="28" style={styles.textInput} />
      <TextInput label="Increase fan speed for every (oC)" mode="outlined" value="3.0" style={styles.textInput} />
      <TextInput label="Max fan speed while charging " mode="outlined" value="6" style={styles.textInput} />
      <View style={styles.checkboxView}>
        <Checkbox status={checked3 ? 'checked' : 'unchecked'} onPress={() => { setChecked3(!checked3); }} />
        <Text>&emsp; Enable Fan PWM output (Uses MPO4) </Text>
      </View>

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
    paddingTop: 30,
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
