import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function Home() {
  return(
    <View style={styles.container}>

      <View style={styles.taskWrapper}> 
        <Text style={styles.sectionTitle}>Today`s Tasks</Text>

        <View style={styles.items}>

        </View>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {

  },
});