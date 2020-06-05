import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, ScrollView, View, Linking } from "react-native";
import { extractInitialsFromName } from "../utils";
import EditContactScreen from "./EditContactScreen";
export default ({ navigation, route }) => {
  const [user, setUser] = useState({});
  const [index, setIndex] = useState(-1);
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    if (
      route &&
      route.params &&
      route.params.Contact &&
      route.params.Contact &&
      route.params.index >= 0
    ) {
      setUser(route.params.Contact);
      setIndex(route.params.index);
    }
    navigation.setOptions({
      title: null,
      headerRight: () => (
        <Text
          onPress={() => {
            setEditing(!editing);
          }}
          style={styles.headerRightText}
        >
          {editing ? "Cancel" : "Edit"}
        </Text>
      )
    });
  }, [editing]);
  return (
    <ScrollView style={styles.container}>
      {editing ? (
        <EditContactScreen
          editing={editing}
          setEditing={setEditing}
          index={index}
          route={route}
          navigation={navigation}
          item={user}
        />
      ) : (
        <>
          {user.avatar ? (
            <Image style={styles.avatar} source={{ uri: user.avatar }} />
          ) : (
            <View style={styles.avatar}>
              <Text style={styles.initials}>
                {extractInitialsFromName(user.first_name, user.last_name)}
              </Text>
            </View>
          )}
          <Text style={styles.name}>
            {user.first_name} {user.last_name}
          </Text>
          <Text style={styles.fieldTitle}>email</Text>
          <Text
            onPress={() => {
              Linking.openURL(`mailto:${user.email}?subject=Greetings From Lazer`);
            }}
            style={styles.fieldValue}
          >
            {user.email}
          </Text>
        </>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    padding: 12
  },
  avatar: {
    height: 120,
    width: 120,
    alignSelf: "center",
    backgroundColor: "#000",
    borderRadius: 60,
    justifyContent: "center"
  },
  initials: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 40
  },
  name: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 8
  },
  fieldTitle: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: "bold"
  },
  fieldValue: {
    marginTop: 8,
    fontSize: 14
  },
  headerRightText: {
    paddingRight: 12,
    fontSize: 18,
    color: "#2962FF"
  }
});
