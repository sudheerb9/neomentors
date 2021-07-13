import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LiveclassScreen() {
  return (
    <View style={styles.container}>
      <Text>Live class Screen</Text>
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
});
