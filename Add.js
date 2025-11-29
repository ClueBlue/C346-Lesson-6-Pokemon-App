import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { datasource } from './Data.js';

const Add = ({ navigation }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [type, setType] = useState('Earth');

  const handleSubmit = () => {
    if (!name || !image) {
      alert("Please enter both name and image URL!");
      return;
    }

    let item = { name, image };
    let indexnum = type === "Earth" ? 0 : 1;

    datasource[indexnum].data.push(item);
    navigation.navigate("Home");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      <Text style={styles.title}>Add Pokemon</Text>

      {/* Add Card */}
      <View style={styles.addBox}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter Pokemon Name"
        />

        <Text style={styles.label}>Image URL:</Text>
        <TextInput
          style={styles.input}
          value={image}
          onChangeText={setImage}
          placeholder="Enter Image URL"
        />

        <Text style={styles.label}>Type:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={type}
            onValueChange={(value) => setType(value)}
            style={{ color: '#333' }}
          >
            <Picker.Item label="Earth" value="Earth" />
            <Picker.Item label="Fire" value="Fire" />
          </Picker>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <StatusBar translucent={false} />
    </ScrollView>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: '#D2B48C',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'green',
    textShadowColor: 'white',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    marginBottom: 20,
  },
  addBox: {
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'lightgrey'
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 12,
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
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#AAA',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#FFF',
  },
  submitButton: {
    backgroundColor: 'lightgreen',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'green',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});