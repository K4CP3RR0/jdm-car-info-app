import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Select } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CarInfoScreen() {
  const { carData } = useLocalSearchParams();
  
  // Parse the car data from the JSON string
  const car = carData ? JSON.parse(carData as string) : null;

  if (!car) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No car data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {car.car_image ? (
          <Image source={{ uri: car.car_image }} style={styles.image} />
        ) : (
          <Text style={styles.noImage}>No image</Text>
        )}
        <Text style={styles.title}>{car.brand} {car.model}</Text>
        <Text style={styles.cardText}>Body: {car.body_type?.join(", ") || "N/A"}</Text>
        <Text style={styles.cardText}>Engine Capacity: {car.engine_capacity?.join(", ") || "N/A"} L</Text>
        <Text style={styles.cardText}>Fuel: {car.fuel_type || "N/A"}</Text>
        <Text style={styles.cardText}>Transmission: {car.transmission_type?.join(", ") || "N/A"}</Text>
        <Text style={styles.cardText}>Power (kW): {car.power_in_kW?.join(", ") || "N/A"}</Text>
        <Text style={styles.cardText}>Drive: {car.drive_type || "N/A"}</Text>
        <Text style={styles.cardText}>Equipment Versions: {car.equipment_versions?.join(", ") || "N/A"}</Text>
        <Text style={styles.cardText}>Years of productions: {car.years || "N/A"}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#171717",
  },
  errorText: {
    color: "#ff6b6b",
    fontSize: 16,
    textAlign: "center",
    marginTop: 50,
  },
  cardText: {
    color: "#171717",
    fontSize: 20,
    marginBottom: 5,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#EDEDED",
    padding: 15,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 15,
  },
  noImage: {
    fontStyle: "italic",
    color: "#EDEDED",
    marginBottom: 10,
    textAlign: "center",
    fontSize: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 15,
    color: "#EDEDED",
    textAlign: "center",
  },
});
