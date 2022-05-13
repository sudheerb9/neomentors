import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Menu, Checkbox, Button  } from 'react-native-paper';

export default function GeneralScreen() {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={styles.container}>
      <TextInput label="Selected Battery Cell" mode="outlined" value="Custom Cell Configuration" style={styles.textInput} />
      <View style={styles.checkboxView}>
        <Text style={styles.checkboxText}> Current Sensor Selected </Text> 
          <Menu.Item onPress={() => {}} title="LEM DHAB S/124" />
      </View>
      <View style={styles.checkboxView}>
        <Text style={styles.checkboxText}> Current Sensor Polarity Inverted </Text> 
        <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
      </View>
      <Text>&nbsp; Note: Charging current should show up as negative (-)</Text>
      <View style={styles.checkboxView}>
        <Text style={styles.checkboxText}> Pack Amp Hours (Ah) </Text> 
          <Menu.Item onPress={() => {}} title="1.00" />
      </View>

      <View style={styles.lastView}>
        <Button icon="" mode="outlined" color="black" style={styles.button} labelStyle={styles.buttonText} onPress={() => console.log('pressed')}>
          APPLY
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingTop: 28
  },
  checkboxView:{
    paddingTop: 15,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  checkboxText:{
    fontSize: 16
  },
  textInput: {
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
