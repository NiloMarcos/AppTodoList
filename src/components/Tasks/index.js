import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tasks({ title }) {
  return(
    <View>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});