import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.innerContainer}>
            {/* Company Logo */}
            <View style={styles.companyLogo}>
              <Image
                source={require("../assets/images/Logo.png")}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>

            {/* Text Group */}
            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>
                Find your favorite place here
              </Text>
              <Text style={styles.textSmall}>The best prices for over 2</Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            {/* Buttons + Navigation Prompt */}
            <View style={styles.footer}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.transparentButton}>
                  <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.navigationPrompt}>
                <Text style={{ color: "white" }}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // fallback for safe area
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  logoImage: {
    width: 120,
    height: 120,
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    marginRight: 10,
  },
  buttonText: {
    ...StyleSheet.flatten({
      color: "black",
      fontSize: 18,
      fontWeight: "500",
      textAlign: "center",
    }),
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navigationPrompt: {
    alignItems: "center",
    paddingVertical: 20,
  },
});
