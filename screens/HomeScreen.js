import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function HomeScreen() {
  return (
      <View style={styles.container}> 
        <Button icon="battery" mode="outlined" color="black" style={styles.button} labelStyle={styles.buttonText} onPress={() => console.log('pressed')}>
          Connect to BMS
        </Button>
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
  button:{
    width: 220, 
    height: 50, 
    alignContent: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16
  }
});
