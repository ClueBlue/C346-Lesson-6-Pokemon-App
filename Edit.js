import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { datasource } from './Data.js';

const Edit = ({ navigation, route }) => {
  const [name, setName] = useState(route.params.name);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Edit/Delete Pokemon Name</Text>

      {/* Edit Box */}
      <View style={styles.editBox}>
        <TextInput
          value={name}
          style={styles.input}
          onChangeText={setName}
          placeholder="Edit/Delete Pokemon name"
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={() => {
            let indexnum = route.params.type === "Earth" ? 0 : 1;
            datasource[indexnum].data[route.params.index].name = name;
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => {
            let indexnum = route.params.type === "Earth" ? 0 : 1;
            datasource[indexnum].data.splice(route.params.index, 1);
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>

      <StatusBar translucent={false} />
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2B48C',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'lightgreen',
    textShadowColor: 'red',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    marginBottom: 20,
  },
  editBox: {
    backgroundColor: '#FFEFD5',
    padding: 20,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#DDD',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#AAA',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#FFF',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  saveButton: {
    backgroundColor: 'lightgreen',
    borderWidth: 2,
    borderColor: 'green',
  },
  deleteButton: {
    backgroundColor: 'tomato',
    borderWidth: 2,
    borderColor: 'red',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});