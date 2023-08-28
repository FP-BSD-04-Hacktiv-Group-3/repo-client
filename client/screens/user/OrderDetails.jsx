import { FlatList, Text, View } from "react-native";
import styled from "styled-components/native";
import Navbar from "../../components/Navbar";
import {
  FontAwesome,
  MaterialIcons,
  Ionicons,
  Fontisto,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const Container = styled.View`
  flex: 1;
`;

const ScrollDiv = styled.ScrollView`
  background: white;
  padding: 20px 24px 0px 24px;
`;

const HeaderTitle = styled.Text`
  font-size: 16px;
  font-family: DMSans_500Medium;
  margin-bottom: 20px;
`;

const HeaderText = styled.Text`
  font-size: 16px;
  font-family: DMSans_700Bold;
  margin-bottom: 20px;
`;

const Container2 = styled.View`
  margin: 0 0 40px 0;
`;

const Row = styled.View`
  padding: 12px 0px;
  flex-direction: row;
  gap: 20px;
`;

const RowIcon = styled.View``;

const RowLeft = styled.View`
  flex: 1;
`;

const RowRight = styled.Pressable`
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

const Separator = styled.View`
  background: #ededed;
  padding: 0.1px;
  elevation: 1;
  margin: 18px 0;
`;

export default function OrderDetails() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading ...</Text>;
  } else {
    return (
      <Container>
        <Navbar back="back" title="Order Details" />

        <ScrollDiv style={{ marginTop: 1 }}>
          <HeaderTitle>
            Orders: <HeaderText> #1231231231</HeaderText>
          </HeaderTitle>

          <RowTitle>
            Total Harga: <RowText>Rp 1.064.000</RowText>
          </RowTitle>
          <RowTitle>
            Created At: <RowText>22 July 2023</RowText>
          </RowTitle>
          <RowTitle>
            Status: <RowText>Paid</RowText>
          </RowTitle>

          <View style={{ padding: 2 }}></View>
          <Separator />

          <Container2>
            <Row>
              <RowIcon>
                <Fontisto name="opencart" size={24} color="#0C1A30" />
              </RowIcon>

              <RowLeft>
                <RowTitle>
                  Nama Produk: <RowText>Test Product</RowText>
                </RowTitle>
                <View style={{ padding: 4 }}></View>
                <RowTitle>
                  Harga: <RowText>Rp 133.000/item</RowText>
                </RowTitle>
                <RowTitle>
                  Total Items: <RowText>2</RowText>
                </RowTitle>
                <View style={{ padding: 4 }}></View>
                <RowTitle>
                  Total Harga: <RowText>Rp 266.000</RowText>
                </RowTitle>
                <View style={{ padding: 4 }}></View>
              </RowLeft>
            </Row>

            <Row>
              <RowIcon>
                <Fontisto name="opencart" size={24} color="#0C1A30" />
              </RowIcon>

              <RowLeft>
                <RowTitle>
                  Nama Produk: <RowText>Test Product</RowText>
                </RowTitle>
                <View style={{ padding: 4 }}></View>
                <RowTitle>
                  Harga: <RowText>Rp 133.000/item</RowText>
                </RowTitle>
                <RowTitle>
                  Total Items: <RowText>2</RowText>
                </RowTitle>
                <View style={{ padding: 4 }}></View>
                <RowTitle>
                  Total Harga: <RowText>Rp 266.000</RowText>
                </RowTitle>
                <View style={{ padding: 4 }}></View>
              </RowLeft>
            </Row>

            <Row>
              <RowIcon>
                <Fontisto name="opencart" size={24} color="#0C1A30" />
              </RowIcon>

              <RowLeft>
                <RowTitle>
                  Nama Produk: <RowText>Test Product</RowText>
                </RowTitle>
                <View style={{ padding: 4 }}></View>
                <RowTitle>
                  Harga: <RowText>Rp 133.000/item</RowText>
                </RowTitle>
                <RowTitle>
                  Total Items: <RowText>2</RowText>
                </RowTitle>
                <View style={{ padding: 4 }}></View>
                <RowTitle>
                  Total Harga: <RowText>Rp 266.000</RowText>
                </RowTitle>
                <View style={{ padding: 4 }}></View>
              </RowLeft>
            </Row>

            <Row>
              <RowIcon>
                <Fontisto name="opencart" size={24} color="#0C1A30" />
              </RowIcon>

              <RowLeft>
                <RowTitle>
                  Nama Produk: <RowText>Test Product</RowText>
                </RowTitle>
                <View style={{ padding: 4 }}></View>
                <RowTitle>
                  Harga: <RowText>Rp 133.000/item</RowText>
                </RowTitle>
                <RowTitle>
                  Total Items: <RowText>2</RowText>
                </RowTitle>
                <View style={{ padding: 4 }}></View>
                <RowTitle>
                  Total Harga: <RowText>Rp 266.000</RowText>
                </RowTitle>
                <View style={{ padding: 4 }}></View>
              </RowLeft>
            </Row>
          </Container2>

          <View style={{ padding: 12 }}></View>
        </ScrollDiv>
      </Container>
    );
  }
}
