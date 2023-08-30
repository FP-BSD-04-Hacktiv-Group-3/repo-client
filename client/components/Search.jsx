import { useEffect, useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Camera } from "expo-camera";
import styled from "styled-components/native";

const URL = "https://fae1-182-2-134-54.ngrok.io";

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

export default function Search() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
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
      console.log(resultjson);
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <Form>
        <ScanIconDiv>
          <ScanIcon
            resizeMode="cover"
            source={require("../assets/icons/camera.png")}
          />
        </ScanIconDiv>
        <Input
          placeholder="Produk apa yang mau kamu cari?"
          placeholderTextColor="#C4C5C4"
        />

        <SearchIconDiv>
          <SearchIcon
            resizeMode="cover"
            source={require("../assets/icons/search.png")}
          />
        </SearchIconDiv>
      </Form>

      {/* <View style={{ flex: 1 }}>
        <View style={styles.cameraContainer}>
          <Camera
            ref={(ref) => setCamera(ref)}
            style={styles.fixedRatio}
            type={type}
            ratio={"1:1"}
          />
        </View>
        <Button
          title="Flip Image"
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        ></Button>
        <Button title="Take Picture" onPress={() => takePicture()} />
        {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
});
