import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { datasource } from './Data.js';
import { FontAwesome6 } from '@expo/vector-icons';

const sectionIcons = { Earth: 'earth-asia', Fire: 'fire', Water: 'water' };
const sectionIconColors = { Earth: '#228B22', Fire: 'orange', Water: 'blue'};

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>

      {/* Top Header */}
      <View style={styles.topHeader}>
        <Text style={styles.title}>Pokemon Gallery</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("Add")}
        >
          <Text style={styles.addButtonText}>Add Pokemon</Text>
        </TouchableOpacity>
      </View>

      {/* Large Box Container */}
      <View style={styles.largeBox}>
        {datasource.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.sectionContent}>

            {/* Section Header */}
            <View style={[styles.headerBox, { backgroundColor: section.bgcolor }]}>
              <View style={styles.headerContent}>
              <FontAwesome6
                name={sectionIcons[section.title]}
                size={24}
                color={sectionIconColors[section.title]}
                style={{ marginRight: 10 }}
              />
                <Text style={styles.headerText}>{section.title}</Text>
              </View>
            </View>

            {/* Pokémon Cards */}
            {section.data.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.itemContainer}
                onPress={() =>
                  navigation.navigate("Edit", {
                    index: index,
                    type: section.title,
                    name: item.name,
                    image: item.image,
                  })
                }
              >
                <View style={styles.itemContent}>
                  <Text style={styles.itemText}>{item.name}</Text>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.pokemonImage}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <StatusBar translucent={false} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2B48C',
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  topHeader: {
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'yellow',
    textShadowColor: 'blue',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 4,
    marginBottom: 8,
    textAlign: "center",
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: 'grey',
    padding: 10,

  },

  addButton: {
    marginTop: 5,
    backgroundColor: 'lightgrey',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignSelf: 'flex-start',
    borderWidth: 2

  },

  addButtonText: { color: 'black', fontWeight: 'bold', fontSize: 16 },

  // Large box around the list
  largeBox: {
    backgroundColor: '#FFEFD5',
    borderRadius: 16,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderWidth: 2,
    borderColor: '#DDD',
  },

  sectionContent: {
    marginBottom: 20,
  },

  headerBox: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 3,
    marginBottom: 10,
  },

  headerContent: { flexDirection: 'row', alignItems: 'center' },

  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  itemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: 'grey',
    marginBottom: 12,
  },

  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  itemText: { fontSize: 18, fontWeight: '600', color: '#333' },

  pokemonImage: {
    width: 160,
    height: 160,
    borderColor: '#DDD',
    marginLeft: 12,
  },
});