import React, { useEffect } from "react";
import { View, Text } from "react-native";
export default ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "Contact Name Here"
    });
  });
  return (
    <View>
      <Text>123123</Text>
    </View>
  );
};
