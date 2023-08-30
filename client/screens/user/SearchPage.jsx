import { FlatList, Text, View, StyleSheet, Image } from "react-native";
import styled from "styled-components/native";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import Banner from "../../components/Banner";
import Category from "../../components/Category";
import FeaturedProductCard from "../../components/FeaturedProductCard";
import ItemNotFound from "../../components/ItemNotFound";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { APP_API_URL } from "../../config/api";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import Loading from "../../components/Loading";
import AllProductCard from "../../components/AllProductCard";

const products = [];

const ScrollDiv = styled.ScrollView`
  background: white;
`;

const Div = styled.View`
  background: white;
  width: 90%;
  margin: 0 auto;
`;

const SearchDiv = styled.Pressable``;

const Form = styled.View`
  margin: 20px 24px 0px 24px;
  flex-direction: row;
  gap: 10px;
`;

const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  padding: 0 16px;
  margin-bottom: 20px;
  background-color: #fafafa;
`;

const SearchIconDiv = styled.Pressable`
  position: absolute;
  height: 50px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

const ScanIconDiv = styled.Pressable`
  height: 50px;
  width: 50px;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
`;

const ScanIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

const ButtonDiv = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
`;

const Button = styled.TouchableOpacity`
  border-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
  padding: 0 20px;
`;

const Button1 = styled(Button)`
  background-color: #feaf27;
`;

const Button2 = styled(Button)`
  border: 1px solid #feaf27;
`;

const ButtonText = styled.Text`
  text-align: center;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

const ButtonText1 = styled(ButtonText)`
  color: white;
`;

const ButtonText2 = styled(ButtonText)`
  color: black;
`;

const CloseBtn = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px auto;
  border: 1px solid white;
  border-radius: 100px;
`;

export default function Home() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [inputCamera, setInputCamera] = useState(false);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  useEffect(() => {
    async function fetchProduct(product_name) {
      const { data } = await axios({
        method: "GET",
        url: `${APP_API_URL}/product?productName=${product_name}`,
      });
      // console.log(data, 123123123);
      setProducts(data);
    }

    fetchProduct(search);
  }, [search]);

  const takePicture = async () => {
    // setLoading(true);
    if (camera) {
      setLoading(true);
      let apiUrl = URL + "/cariNama";
      const options = { quality: 0.7, base64: true };
      const data = await camera.takePictureAsync(options);
      const source = data.base64;
      setImage(data.uri);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imgsource: source,
        }),
      });

      const resultjson = await response.json();
      setKeywords(resultjson);
      setLoading(false);
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <View style={{ background: "whtie", height: "100%" }}>
        <Navbar />

        <ScrollDiv
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 1 }}
        >
          {/* <SearchDiv
            onPress={() =>
              navigation.navigate("AllProductsPage", {
                title: "Featured Products",
                items: products,
              })
            }
          >
            <Search />
          </SearchDiv> */}
          <Form>
            <ScanIconDiv
              onPress={() => setInputCamera(!inputCamera)}
              style={[inputCamera && { backgroundColor: "#d8d8d8" }]}
            >
              <ScanIcon
                resizeMode="cover"
                source={require("../../assets/icons/camera.png")}
              />
            </ScanIconDiv>
            <Input
              placeholder="Produk apa yang mau kamu cari?"
              placeholderTextColor="#C4C5C4"
              onChangeText={(text) => {
                setSearch(text);
              }}
            />

            <SearchIconDiv>
              <SearchIcon
                resizeMode="cover"
                source={require("../../assets/icons/search.png")}
              />
            </SearchIconDiv>
          </Form>
          {loading && (
            <View
              style={{ width: "100%", alignItems: "center", marginBottom: 20 }}
            >
              <Loading />
            </View>
          )}

          <Div>
            {inputCamera ? (
              <View style={{ flex: 1, marginBottom: 60 }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Camera
                    ref={(ref) => setCamera(ref)}
                    style={{ flex: 1, aspectRatio: 3 / 4 }}
                    type={type}
                    ratio={"1:1"}
                  />
                </View>

                <ButtonDiv>
                  <Button2
                    title="Flip Image"
                    onPress={() => {
                      setType(
                        type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                      );
                    }}
                  >
                    <ButtonText2>Putar Kamera</ButtonText2>
                  </Button2>
                  <Button1 title="Take Picture" onPress={() => takePicture()}>
                    <ButtonText1>Deteksi Gambar</ButtonText1>
                  </Button1>
                </ButtonDiv>

                {/* <CloseBtn>
                  <AntDesign
                    name="closecircle"
                    size={35}
                    color="#BC0F10"
                    onPress={() => setInputCamera(false)}
                  />
                </CloseBtn> */}

                {/* {image && <Image source={{ uri: image }} style={{ flex: 1 }} />} */}

                {/* {image && (
                  <View
                    style={{
                      width: "100%",
                      height: "200px",
                      background: "red",
                    }}
                  >
                    <Image
                      source={{ uri: image }}
                      style={{
                        height: "200px",
                        width: "200px",
                        backgroundColor: "red",
                      }}
                    />
                  </View>
                )} */}

                {/* <Text style={{ textAlign: "center" }}>
                    {JSON.stringify(keywords)}
                  </Text> */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {keywords?.map((k) => (
                    <Text key={k} style={{ margin: 10, textAlign: "center" }}>
                      {k}
                    </Text>
                  ))}
                </View>
              </View>
            ) : products?.length === 0 ? (
              <>
                <ItemNotFound
                  image={require("../../assets/vector/pnf.png")}
                  title="Produk tidak ditemukan"
                  subtitle="Coba cari kata lain untuk mencari produk yang kamu inginkan"
                />
                <Text style={{ textAlign: "center" }}>{search}</Text>
              </>
            ) : Array.isArray(products) && products?.length > 0 ? (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {products?.map((item, index) => (
                  <AllProductCard content={item} key={index} />
                ))}
              </View>
            ) : (
              <ItemNotFound
                image={require("../../assets/vector/pnf.png")}
                title="Produk tidak ditemukan"
                subtitle="Coba cari kata lain untuk mencari produk yang kamu inginkan"
              />
            )}
          </Div>
        </ScrollDiv>
      </View>
    );
  }
}
