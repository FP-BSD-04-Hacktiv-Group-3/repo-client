import { useRef, useState } from "react";
import { SafeAreaView, StatusBar, FlatList, Text, View } from "react-native";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const COLORS = {
  primary: "#feaf27",
  white: "#fff",
  black: "#0C1A30",
  lightGray: "#C4C5C4",
};

const slides = [
  {
    id: "1",
    image: require("../../assets/vector/marketplace.jpg"),
    title: "Shop the Extraordinary",
    subtitle:
      "Dive into a captivating and enchanting realm of extraordinary finds",
  },
  {
    id: "2",
    image: require("../../assets/vector/discover_unique.jpg"),
    title: "Discover Unique Creations",
    subtitle:
      "Unveil a world of one-of-a-kind treasures and handcrafted wonders",
  },
  {
    id: "3",
    type: "intro",
    title: "Welcome to Tacotta!",
    subtitle:
      "Our art bridges continents, inviting you to explore Indonesia's creative heartbeat",
  },
];

const FooterContainer = styled.View`
  height: 25%;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

const SlideContainer = styled.View`
  align-items: center;
`;

const SlideImage = styled.Image`
  height: 75%;
  width: ${width}px;
  resize-mode: contain;
`;

const SlideTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

const SlideSubtitle = styled.Text`
  font-size: 13px;
  margin-top: 10px;
  max-width: 70%;
  text-align: center;
  line-height: 23px;
`;

const IndicatorContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

const FooterButtonContainer = styled.View`
  flex-direction: row;
`;

const FooterButton = styled.TouchableOpacity`
  flex: 1;
  height: 50px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.View`
  width: ${width}px;
  height: 75%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-top: 60px;
`;

// background: rgba(254, 175, 39, 0.07);
//  background: rgba(187, 70, 72, 0.03);
const ImgIconContainer = styled.View`
  border-radius: 100px 0 100px 0;
  padding: 20px;
  border: 2px solid black;
`;

const ImageIcon = styled.Image`
  width: 100%;
  aspect-ratio: ${(props) => props.aspectRatio || 1};
`;

export default function GetStarted({ navigation }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <FooterContainer>
        {/* Indicator container */}
        <IndicatorContainer>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                {
                  height: 2.5,
                  width: 10,
                  marginHorizontal: 3,
                  borderRadius: 2,
                },
                currentSlideIndex == index && {
                  backgroundColor: COLORS.primary,
                  width: 25,
                },
              ]}
            />
          ))}
        </IndicatorContainer>

        {/* Buttons */}
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <FooterButton
                style={{
                  backgroundColor: COLORS.primary,
                  borderColor: COLORS.primary,
                  borderWidth: 1,
                }}
                onPress={() => navigation?.replace("HomeScreen")}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: COLORS.white,
                  }}
                >
                  GET STARTED
                </Text>
              </FooterButton>
            </View>
          ) : (
            <FooterButtonContainer>
              <FooterButton
                activeOpacity={0.8}
                style={{
                  backgroundColor: "transparent",
                  borderColor: COLORS.primary,
                  borderWidth: 1,
                }}
                onPress={skip}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: COLORS.black,
                  }}
                >
                  SKIP
                </Text>
              </FooterButton>
              <View style={{ width: 15 }} />
              <FooterButton
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={{
                  backgroundColor: COLORS.primary,
                  borderColor: COLORS.primary,
                  borderWidth: 1,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: COLORS.white,
                  }}
                >
                  NEXT
                </Text>
              </FooterButton>
            </FooterButtonContainer>
          )}
        </View>
      </FooterContainer>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <StatusBar backgroundColor="white" />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) =>
          item?.type === "intro" ? (
            // <SlideContainer>
            //   <ImgContainer>
            //     <ImageIcon
            //       resizeMode="cover"
            //       source={require("../../assets/brand/icon.png")}
            //       aspectRatio={1 / 1}
            //     />
            //     <ImageLogo
            //       resizeMode="cover"
            //       source={require("../../assets/brand/logo_shadow.png")}
            //     />
            //   </ImgContainer>
            // </SlideContainer>
            <SlideContainer>
              <ImgContainer>
                <ImgIconContainer>
                  <ImageIcon
                    source={require("../../assets/brand/icon.png")}
                    resizeMode="cover"
                    aspectRatio={1 / 1}
                  />
                </ImgIconContainer>
              </ImgContainer>
              <SlideTitle>{item?.title}</SlideTitle>
              <SlideSubtitle>{item?.subtitle}</SlideSubtitle>
            </SlideContainer>
          ) : (
            <SlideContainer>
              <SlideImage source={item?.image} />
              <SlideTitle>{item?.title}</SlideTitle>
              <SlideSubtitle>{item?.subtitle}</SlideSubtitle>
            </SlideContainer>
          )
        }
      />
      <Footer />
    </SafeAreaView>
  );
}
