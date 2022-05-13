import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput, Menu, Checkbox, Button  } from 'react-native-paper';

export default function CANBUSScreen() {

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>CANBUS Settings:</Text>
      <TextInput label="CANBUS #1 Frequency [kbps]" mode="outlined" value="500 kBit/sec" style={styles.textInput} />
      <TextInput label="CANBUS #2 Frequency [kbps]" mode="outlined" value="500 kBit/sec" style={styles.textInput} />
      <TextInput label="J1939 ECU Address" mode="outlined" value="0xF3" style={styles.textInput} />
      <TextInput label="OBDII ECU Identifier" mode="outlined" value="0x7E3" style={styles.textInput} />
      <TextInput label="Enable Battery Cell Broadcast" mode="outlined" value="Broadcast Disabled" style={styles.textInput} />
      <TextInput label="Battery cell broadcast speed (ms)" mode="outlined" value="0" style={styles.textInput} />
      <TextInput label="Battery cell broadcast CAN ID" mode="outlined" value="0x0" style={styles.textInput} />

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
