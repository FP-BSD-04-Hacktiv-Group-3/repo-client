import React, { useState, useRef } from "react";
import axios from "axios";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
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

const CheckoutButton = styled.TouchableOpacity`
  background-color: #feaf27;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckoutButtonText = styled.Text`
  color: #0c1a30;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

const Payment = () => {
  const navigation = useNavigation();

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
        <Navbar back="back" title="Payment" />

        <ScrollDiv
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 1,
            flex: 1,
            height: "100%",
          }}
        >
          <HeaderTitle>Midtrans / Xendit</HeaderTitle>
          <CheckoutButton onPress={() => navigation.navigate("CartPage")}>
            <CheckoutButtonText>Pay</CheckoutButtonText>
          </CheckoutButton>
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

export default Payment;
