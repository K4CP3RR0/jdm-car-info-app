import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from "react-native";

export default function CarScreen( { route }) {
  const { car } = route.params;

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
    top:20,
    padding: 15,
    width: "100%",
    backgroundColor: "#171717",
  },
  card: {
    backgroundColor: "#444444",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#171717",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    
  },
  cardText: {
    color: "#EDEDED",
    fontSize: 14,
    marginBottom: 5,
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  noImage: {
    fontStyle: "italic",
    color: "#EDEDED",
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    color: "#EDEDED",
  },
});