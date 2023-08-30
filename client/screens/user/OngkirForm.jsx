import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import Navbar from "../../components/Navbar";

const URL = "http:localhost:4002";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import Loading from "../../components/Loading";

const Container = styled.View`
  flex: 1;
  height: 100%;
  background: white;
`;

const ScrollDiv = styled.ScrollView`
  background: white;
  flex: 1;
  padding: 24px 30px;
`;

const HeaderTitle = styled.Text`
  font-size: 16px;
  font-family: DMSans_500Medium;
  margin-bottom: 10px;
`;

const PickerTitle = styled.Text`
  font-size: 14px;
  font-family: DMSans_500Medium;
  margin: 0 auto;
  margin-top: 14px;
  width: 98%;
`;

const PickerDiv = styled.View`
  margin: 0 auto;
  margin-top: 14px;
  width: 98%;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
`;

const ButtonCheckOngkir = styled.TouchableOpacity`
  background-color: #feaf27;
  border-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
`;

const ButtonText = styled.Text`
  color: #0c1a30;
  text-align: center;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

const OngkirForm = () => {
  const navigation = useNavigation();
  const pickerRef = useRef();

  // function open() {
  //   pickerRef.current.focus();
  // }

  // function close() {
  //   pickerRef.current.blur();
  // }

  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedProv1, setSelectedProv1] = useState("");
  const [selectedCity1, setSelectedCity1] = useState("");
  const [selectedProv2, setSelectedProv2] = useState("");
  const [selectedCity2, setSelectedCity2] = useState("");
  const [weight, setWeight] = useState("");
  const [courier, setCourier] = useState("");
  const [shippingCost, setShippingCost] = useState("");

  const [openView, setOpenView] = useState(false);

  // useEffect(() => {
  //   // Fetch provinces from the API and populate the provinces state
  //   fetchProvinces();
  // }, []);

  const fetchProvinces = async () => {
    try {
      const response = await axios.get(`${URL}/api/provinsi`); // Replace with your API endpoint
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
      setOpenView(true);
      // navigation.navigate("Payment");
      // const response = await axios.post(`${URL}/api/ongkos`, {
      //   origin: selectedCity1,
      //   destination: selectedCity2,
      //   weight: weight,
      //   courier: courier,
      // });
      // setShippingCost(response.data.cost);
    } catch (error) {
      console.error("Error calculating shipping cost:", error);
    }
  };

  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Navbar back="back" title="Ongkos Kirim" />

        <ScrollDiv
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 1,
            flex: 1,
            height: "100%",
            paddingBottom: 100,
          }}
        >
          {openView ? (
            <View style={{ paddingBottom: 60 }} id="hasil">
              {/* Display shipping cost results here */}
              <Text style={{ marginBottom: 10 }}>
                Hasil Perhitungan Ongkir + Total Pembayaran
              </Text>
              <ButtonCheckOngkir onPress={() => navigation.navigate("Payment")}>
                <ButtonText>Bayar</ButtonText>
              </ButtonCheckOngkir>
            </View>
          ) : (
            <View style={{ paddingBottom: 60 }}>
              <HeaderTitle>Asal Paket</HeaderTitle>
              <View
                style={{
                  backgroundColor: "black",
                  height: 1,
                  width: "100%",
                  marginBottom: 4,
                }}
              ></View>

              <PickerTitle>Provinsi</PickerTitle>
              <PickerDiv>
                <Picker
                  selectedValue={selectedProv1}
                  onValueChange={(itemValue, itemIndex) => {
                    setProv1(itemValue);
                    loadKota(itemValue, "kot1"); // Implement loadKota logic here
                  }}
                  style={{
                    borderRadius: 8,
                    padding: 10,
                    flex: 1,
                    border: "1px solid black",
                  }}
                >
                  <Picker.Item label="-- Pilih Provinsi --" value="" />
                  <Picker.Item label="test" value="test" />
                </Picker>
              </PickerDiv>

              <PickerTitle>Kota</PickerTitle>
              <PickerDiv>
                <Picker
                  selectedValue={selectedCity1}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedCity1(itemValue)
                  }
                  style={{
                    borderRadius: 8,
                    padding: 10,
                    flex: 1,
                  }}
                >
                  <Picker.Item label="-- Pilih Kota --" value="" />
                </Picker>
              </PickerDiv>

              <View style={{ height: 40, width: "100%" }}></View>

              <HeaderTitle>Tujuan Paket</HeaderTitle>
              <View
                style={{
                  backgroundColor: "black",
                  height: 1,
                  width: "100%",
                  marginBottom: 4,
                }}
              ></View>

              <PickerTitle>Provinsi</PickerTitle>
              <PickerDiv>
                <Picker
                  selectedValue={selectedProv2}
                  onValueChange={(itemValue, itemIndex) => {
                    setProv2(itemValue);
                    loadKota(itemValue, "kot1"); // Implement loadKota logic here
                  }}
                  style={{
                    borderRadius: 8,
                    padding: 10,
                    flex: 1,
                    border: "1px solid black",
                  }}
                >
                  <Picker.Item label="-- Pilih Provinsi --" value="" />
                  <Picker.Item label="test" value="test" />
                </Picker>
              </PickerDiv>

              <PickerTitle>Kota</PickerTitle>
              <PickerDiv>
                <Picker
                  selectedValue={selectedCity2}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedCity2(itemValue)
                  }
                  style={{
                    borderRadius: 8,
                    padding: 10,
                    flex: 1,
                  }}
                >
                  <Picker.Item label="-- Pilih Kota --" value="" />
                </Picker>
              </PickerDiv>

              <View style={{ height: 40, width: "100%" }}></View>

              <HeaderTitle>Berat Paket</HeaderTitle>
              <View
                style={{
                  backgroundColor: "black",
                  height: 1,
                  width: "100%",
                  marginBottom: 4,
                }}
              ></View>

              <PickerDiv>
                <TextInput
                  style={styles.input}
                  value={weight}
                  disa
                  onChangeText={(text) => setWeight(text)}
                  keyboardType="numeric"
                  placeholder="e.g. 1000 => in gram)"
                  editable={false}
                />
              </PickerDiv>

              <View style={{ height: 40, width: "100%" }}></View>

              <HeaderTitle>Kurir Paket</HeaderTitle>
              <View
                style={{
                  backgroundColor: "black",
                  height: 1,
                  width: "100%",
                  marginBottom: 4,
                }}
              ></View>

              <PickerDiv>
                <Picker
                  ref={pickerRef}
                  selectedValue={courier}
                  onValueChange={(itemValue, itemIndex) =>
                    setCourier(itemValue)
                  }
                  style={{
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    flex: 1,
                    border: "1px solid black",
                  }}
                >
                  <Picker.Item label="-- Pilih courier --" value="" />
                  <Picker.Item label="JNE" value="jne" />
                  <Picker.Item label="POS Indonesia" value="pos" />
                  <Picker.Item label="TIKI" value="tiki" />
                </Picker>
              </PickerDiv>

              <View style={{ height: 20, width: "100%" }}></View>

              <ButtonCheckOngkir onPress={cekOngkir}>
                <ButtonText>Cek Ongkir</ButtonText>
              </ButtonCheckOngkir>
            </View>
          )}
        </ScrollDiv>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
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
    width: "100%",
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
    borderWidth: 0.1,
    flex: 1,
    borderRadius: 8,
    paddingHorizontal: 18,
    borderColor: "#f0f0f0",
    height: 54,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
  },
});

export default OngkirForm;
