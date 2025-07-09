import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';


const API_URL = "http://808dev.pl/jdmcars";

export default function CarList() {
  const [cars, setCars] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error("Error fetching cars:", err));
  }, []);

  const renderCar = ({ item }) => (
    <TouchableOpacity onPress={() => router.push({
      pathname: '/car-info',
      params: { carData: JSON.stringify(item) }
    })}>

    
    <View style={styles.card}>
      {item.car_image ? (
        <Image source={{ uri: item.car_image }} style={styles.image} />
      ) : (
        <Text style={styles.noImage}>No image</Text>
      )}
      <Text style={styles.title}>{item.brand} {item.model}</Text>
      {/* <Text style={styles.cardText}>Body: {item.body_type?.join(", ") || "N/A"}</Text>
      <Text style={styles.cardText}>Engine Capacity: {item.engine_capacity?.join(", ") || "N/A"} L</Text>
      <Text style={styles.cardText}>Fuel: {item.fuel_type || "N/A"}</Text>
      <Text style={styles.cardText}>Transmission: {item.transmission_type?.join(", ") || "N/A"}</Text>
      <Text style={styles.cardText}>Power (kW): {item.power_in_kW?.join(", ") || "N/A"}</Text>
      <Text style={styles.cardText}>Drive: {item.drive_type || "N/A"}</Text>
      <Text style={styles.cardText}>Equipment Versions: {item.equipment_versions?.join(", ") || "N/A"}</Text> */}
      <Text style={styles.cardText}>Years of productions: {item.years || "N/A"}</Text>
    </View>
    </TouchableOpacity>
  );

  return (

   

   
    <ScrollView style={styles.container}>
        {/* <Text style={{ color: 'red' }}>
        {cars.length === 0 ? "No cars loaded yet" : `${cars.length} cars loaded`}
        </Text> */}
        <Text style={styles.title}>All JDM Cars List</Text>
      <FlatList
        data={cars}
        keyExtractor={(item) => item._id}
        renderItem={renderCar}
        scrollEnabled={false}
        style={styles.list} // Prevents FlatList from taking full height
         // Use ScrollView for smoother experience with dynamic height
      />
   
    </ScrollView>
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
  list: {
    top:10,
    paddingBottom: 20,
    width: "100%",
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
