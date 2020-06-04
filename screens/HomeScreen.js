import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";
export default () => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  });
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
