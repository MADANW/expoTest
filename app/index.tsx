import React from "react";
import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";

const { width } = Dimensions.get("window");

const IMAGES = {
  banner: require("../assets/images/background-image.png"),
  emoji1: require("../assets/images/emoji1.png"),
  emoji2: require("../assets/images/emoji2.png"),
  emoji3: require("../assets/images/emoji3.png"),
  emoji4: require("../assets/images/emoji4.png"),
  emoji5: require("../assets/images/emoji5.png"),
  emoji6: require("../assets/images/emoji6.png"),
  logo: require("../assets/images/react-logo.png"),
};

const emojis = [
  IMAGES.emoji1,
  IMAGES.emoji2,
  IMAGES.emoji3,
  IMAGES.emoji4,
  IMAGES.emoji5,
  IMAGES.emoji6,
];

export default function Index() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const styles = getStyles(isDark);

  const handlePress = (index: number) => {
    Alert.alert("Sticker tapped", `You tapped sticker #${index + 1}`);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.bannerContainer}>
          <Image source={IMAGES.banner} style={styles.banner} />
          <View style={styles.bannerOverlay}>
            <Text style={styles.title}>Sticker Smash</Text>
            <Text style={styles.subtitle}>A playful demo gallery</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Stickers</Text>
          <View style={styles.grid}>
            {emojis.map((img, i) => (
              <TouchableOpacity
                key={i}
                style={styles.card}
                activeOpacity={0.8}
                onPress={() => handlePress(i)}
              >
                <Image source={img} style={styles.cardImage} resizeMode="contain" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.sectionLarge}>
          <Text style={styles.sectionTitle}>About this demo</Text>
          <View style={styles.infoRow}>
            <Image source={IMAGES.logo} style={styles.logo} />
            <Text style={styles.infoText}>
              This is a small Expo/React Native demo using local images from the
              assets folder. Tap any sticker to see a quick interaction.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function getStyles(isDark: boolean) {
  const colors = {
    background: isDark ? "#0b0b0f" : "#fff",
    surface: isDark ? "#121212" : "#f8f8f8",
    primaryText: isDark ? "#fff" : "#111",
    secondaryText: isDark ? "#c7c7cc" : "#333",
    cardShadow: isDark ? "#000" : "#000",
  };

  return StyleSheet.create({
    safe: { flex: 1, backgroundColor: colors.background },
    container: {
      paddingBottom: 40,
      backgroundColor: colors.background,
    },
  bannerContainer: {
    width: "100%",
    height: Math.round(width * 0.56),
    marginBottom: 16,
  },
  banner: {
    width: "100%",
    height: "100%",
  },
  bannerOverlay: {
    position: "absolute",
    left: 20,
    bottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  subtitle: {
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
    opacity: 0.95,
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  sectionLarge: {
    paddingHorizontal: 16,
    marginTop: 18,
  },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 12,
      color: colors.primaryText,
    },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
    card: {
      width: (width - 16 * 2 - 12) / 3,
      height: 110,
      backgroundColor: colors.surface,
      borderRadius: 12,
      marginBottom: 12,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: colors.cardShadow,
      shadowOpacity: isDark ? 0.12 : 0.05,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      elevation: 2,
    },
  cardImage: {
    width: "70%",
    height: "70%",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logo: {
    width: 64,
    height: 64,
    marginRight: 12,
  },
    infoText: {
      flex: 1,
      fontSize: 14,
      color: colors.secondaryText,
      lineHeight: 20,
    },
  });
}
