import React from "react";
import { View, Text, SafeAreaView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#3b82f6" }}>
          🏪 Grocery Scout
        </Text>
      </View>
    </SafeAreaView>
  );
}
