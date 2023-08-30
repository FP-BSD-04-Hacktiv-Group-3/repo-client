import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";

const OngkirForm = () => {
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedProv1, setSelectedProv1] = useState("");
  const [selectedCity1, setSelectedCity1] = useState("");
  const [selectedProv2, setSelectedProv2] = useState("");
  const [selectedCity2, setSelectedCity2] = useState("");
  const [weight, setWeight] = useState("1000");
  const [courier, setCourier] = useState("");
  const [shippingCost, setShippingCost] = useState("");

  useEffect(() => {
    // Fetch provinces from the API and populate the provinces state
    fetchProvinces();
  }, []);

  const fetchProvinces = async () => {
    try {
      const response = await axios.get("http://localhost:4002/api/provinsi"); // Replace with your API endpoint
      setProvinces(response.data);
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  };

  const fetchCities = async (provinceId, target) => {
    try {
      const response = await axios.get(
        `http://localhost:4002/api/kota/${provinceId}`
      ); // Replace with your API endpoint
      if (target === "selectedCity1") {
        setCities(response.data);
      } else {
        setCities(response.data);
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const cekOngkir = async () => {
    // Implement your logic for calculating shipping cost here
    try {
      const response = await axios.post("http://localhost:4002/api/ongkos", {
        origin: selectedCity1,
        destination: selectedCity2,
        weight: weight,
        courier: courier,
      });
      setShippingCost(response.data.cost);
    } catch (error) {
      console.error("Error calculating shipping cost:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Implementasi API RajaOngkir dengan {"\n"} NodeJS + Express
      </Text>
      <View style={styles.table}>
        <Text style={styles.tableHeading}>ASAL PAKET</Text>
        <View style={styles.tableRow}>
          <Text>Provinsi Asal</Text>
          {/* <Picker
            selectedValue={prov1}
            onValueChange={(itemValue, itemIndex) => {
              setProv1(itemValue);
              loadKota(itemValue, "kot1"); // Implement loadKota logic here
            }}
          >
            <Picker.Item label="-- Pilih Provinsi --" value="" />
          </Picker> */}

          <Picker
            selectedValue={selectedProv1}
            onValueChange={(itemValue, itemIndex) => {
              setProv1(itemValue);
              loadKota(itemValue, "kot1"); // Implement loadKota logic here
            }}
          >
            <Picker.Item label="-- Pilih Provinsi --" value="" />
          </Picker>
        </View>
        <View style={styles.tableRow}>
          <Text>Kota Asal</Text>
          {/* <Picker
            selectedValue={kot1}
            onValueChange={(itemValue, itemIndex) => setKot1(itemValue)}
          >
            <Picker.Item label="-- Pilih Kota --" value="" />
          </Picker> */}

          <Picker
            selectedValue={selectedCity1}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCity1(itemValue)
            }
          >
            <Picker.Item label="-- Pilih Kota --" value="" />
          </Picker>
        </View>
        {/* Similar logic for TUJUAN PAKET section */}
        {/* Similar logic for CEK ONGKOS section */}
        <View style={styles.tableRow}>
          <Text>Berat Paket (gram)</Text>
          <TextInput
            style={styles.input}
            value={weight}
            onChangeText={(text) => setWeight(text)}
            keyboardType="numeric"
            placeholder="1000"
            min="1000"
            step="100"
          />
        </View>
        <View style={styles.tableRow}>
          <Text>Kurir</Text>
          {/* <Picker
            selectedValue={kurir}
            onValueChange={(itemValue, itemIndex) => setKurir(itemValue)}
          >
            <Picker.Item label="-- Pilih Kurir --" value="" />
            <Picker.Item label="JNE" value="jne" />
            <Picker.Item label="POS Indonesia" value="pos" />
            <Picker.Item label="TIKI" value="tiki" />
          </Picker> */}
          <Picker
            ref={pickerRef}
            selectedValue={kurir}
            onValueChange={(itemValue, itemIndex) => setKurir(itemValue)}
          >
            <Picker.Item label="-- Pilih Kurir --" value="" />
            <Picker.Item label="JNE" value="jne" />
            <Picker.Item label="POS Indonesia" value="pos" />
            <Picker.Item label="TIKI" value="tiki" />
          </Picker>
        </View>
        <View style={styles.tableRow}>
          <Button title="Cek Ongkir" onPress={handleCekOngkir} />
        </View>
      </View>
      <View style={styles.resultContainer} id="hasil">
        {/* Display shipping cost results here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
  tableHeading: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    flex: 1,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default OngkirForm;
