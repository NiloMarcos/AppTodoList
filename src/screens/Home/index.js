import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Tasks from '../../components/Tasks';

export default function Home() {
  return(
    <View style={styles.container}>

      <View style={styles.taskWrapper}> 
        <Text style={styles.sectionTitle}>Today`s Tasks</Text>

        <View style={styles.items}>
          <Tasks title="Tasks - 1" />
          <Tasks title="Tasks - 2" />
          <Tasks title="Tasks - 3" />
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