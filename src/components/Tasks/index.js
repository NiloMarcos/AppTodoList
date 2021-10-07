import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tasks({ title }) {
  return(
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{title}</Text>
      </View>

      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#c4c4c4',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.8,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    fontFamily: 'Roboto_400Regular'
  },
  circular: {
    width: 18,
    height: 18,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  }
});