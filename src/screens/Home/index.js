import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { 
  Text, 
  View, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform, 
  TextInput, 
  TouchableOpacity, 
  Keyboard, 
  ScrollView 
} from 'react-native';
import Tasks from '../../components/Tasks';

export default function Home() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItem] = useState([]);

  const handleAddTask = () => {
    if (task === '') {
      alert('Digite uma tarefa valida!')
      return;
    }
    Keyboard.dismiss();
    setTaskItem([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  }

  return (
    <View style={styles.container}>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder="Write a task" value={task} onChangeText={(text) => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
              <Feather name="plus" size={28} color="#000" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>


      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today`s Tasks</Text>

        <ScrollView style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Tasks title={item} />
                </TouchableOpacity>
              );
            })
          }
        </ScrollView>
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
    fontFamily: 'Roboto_700Bold_Italic',
  },
  items: {
    marginTop: 90,
    height: 480
  },
  writeTaskWrapper: {
    position: 'absolute',
    width: '100%',
    marginTop: 130,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#c4c4c4',
    borderRadius: 10,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    alignItems: 'center',
    paddingLeft: 15,
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    marginLeft: 5
  },
  addWrapper: {
    width: 60,
    height: 50,
    backgroundColor: '#c4c4c4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#c0c0c0',
    backgroundColor: '#c4c4c4',
    marginRight: 5
  },
});