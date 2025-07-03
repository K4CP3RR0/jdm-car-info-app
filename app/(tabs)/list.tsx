import CarList from '@/components/CarList';
import CarScreen from '@/components/CarScreen';
import { ThemedView } from '@/components/ThemedView';
import { createMultiStyleIconSet } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';


export default function ListScreen() {
  return (
    
    <ThemedView style={styles.container}>
      <ThemedView style={styles.card}>
          <CarList />
      </ThemedView>
    </ThemedView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    top: 10,
  },
 
  
  card: {
    backgroundColor: '#e0e0e0',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
    image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});
