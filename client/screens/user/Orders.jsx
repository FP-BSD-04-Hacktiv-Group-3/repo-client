import { FlatList, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../../components/Navbar";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import Loading from "../../components/Loading";

const items = [
  {
    id: "1",
    total_price: 712000,
    total_items: 2,
    Items: [
      {
        id: "2",
        name: "Product 2",
        price: 356000,
        amount: 2,
        image: require("../../assets/products/poster.png"),
      },
      {
        id: "3",
        name: "Product 3",
        price: 356000,
        amount: 6,
        image: require("../../assets/products/poster.png"),
      },
    ],
  },
  {
    id: "11",
    total_price: 712000,
    total_items: 2,
    Items: [
      {
        id: "21",
        name: "Product 21",
        price: 356000,
        amount: 2,
        image: require("../../assets/products/poster.png"),
      },
    ],
  },
];

const ScrollDiv = styled.ScrollView`
  background: white;
  flex: 1;
  padding: 24px;
`;

const HeaderTitle = styled.Text`
  font-size: 16px;
  font-family: DMSans_500Medium;
  margin-bottom: 20px;
`;

const Container = styled.View`
  margin: 0 0 40px 0;
`;

const Row = styled.Pressable`
  padding: 12px 0px;
  flex-direction: row;
  gap: 20px;
`;

const RowIcon = styled.View``;

const RowLeft = styled.View`
  flex: 1;
`;

const RowRight = styled.View`
  justify-content: center;
  padding: 0 10px;
`;

const RowTitle = styled.Text`
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

const RowText = styled.Text`
  font-size: 14px;
  font-family: DMSans_400Regular;
`;

export default function Orders() {
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
      <View style={{ flex: 1 }}>
        <Navbar />

        <ScrollDiv
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 1 }}
        >
          <HeaderTitle>Orders</HeaderTitle>

          <Container>
            <Row onPress={() => navigation.navigate("OrderDetailsPage")}>
              <RowIcon>
                <MaterialIcons name="history" size={24} color="#0C1A30" />
              </RowIcon>

              <RowLeft>
                <RowTitle>
                  Order ID: <RowText>123123129</RowText>
                </RowTitle>
                <RowTitle>
                  Total Items: <RowText>2</RowText>
                </RowTitle>
                <RowTitle>
                  Total Harga: <RowText>Rp 299.000</RowText>
                </RowTitle>
                <RowTitle>
                  Created At: <RowText>22 July 2023</RowText>
                </RowTitle>
                <RowTitle>
                  Status: <RowText>Paid</RowText>
                </RowTitle>
              </RowLeft>
              <RowRight>
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </RowRight>
            </Row>

            <Row onPress={() => navigation.navigate("OrderDetailsPage")}>
              <RowIcon>
                <MaterialIcons name="history" size={24} color="#0C1A30" />
              </RowIcon>

              <RowLeft>
                <RowTitle>
                  Order ID: <RowText>1231231231</RowText>
                </RowTitle>
                <RowTitle>
                  Total Items: <RowText>4</RowText>
                </RowTitle>
                <RowTitle>
                  Total Harga: <RowText>Rp 70.000</RowText>
                </RowTitle>
                <RowTitle>
                  Created At: <RowText>4 May 2023</RowText>
                </RowTitle>
                <RowTitle>
                  Status: <RowText>Delivered</RowText>
                </RowTitle>
              </RowLeft>
              <RowRight>
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </RowRight>
            </Row>

            <Row onPress={() => navigation.navigate("OrderDetailsPage")}>
              <RowIcon>
                <MaterialIcons name="history" size={24} color="#0C1A30" />
              </RowIcon>

              <RowLeft>
                <RowTitle>
                  Order ID: <RowText>1551231231</RowText>
                </RowTitle>
                <RowTitle>
                  Total Items: <RowText>1</RowText>
                </RowTitle>
                <RowTitle>
                  Total Harga: <RowText>Rp 44.000</RowText>
                </RowTitle>
                <RowTitle>
                  Created At: <RowText>3 September 2023</RowText>
                </RowTitle>
                <RowTitle>
                  Status: <RowText>Delivered</RowText>
                </RowTitle>
              </RowLeft>

              <RowRight>
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </RowRight>
            </Row>
          </Container>
        </ScrollDiv>
      </View>
    );
  }
}
