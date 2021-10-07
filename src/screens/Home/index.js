import React, {useState} from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Tasks from '../../components/Tasks';

export default function Home() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItem] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItems, task]);
    setTask(null);
  }

  return(
    <View style={styles.container}>

      <View style={styles.taskWrapper}> 
        <Text style={styles.sectionTitle}>Today`s Tasks</Text>

        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return <Tasks title={item} key={index}/>
            })
          }
          {/* <Tasks title="Tasks - 1" />
          <Tasks title="Tasks - 2" />
          <Tasks title="Tasks - 3" /> */}
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder="Write a task" value={task} onChangeText={(text) => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addTask}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

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
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#c4c4c4',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    alignItems: 'center',
    paddingLeft: 15
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#c4c4c4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    backgroundColor: '#c4c4c4',
  },
  addTask: {

  },
});