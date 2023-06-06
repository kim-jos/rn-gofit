import firestore from "@react-native-firebase/firestore";
import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { Classes } from "../backend/models/classes.model";

export default function HomeScreen() {
  const [classes, setClass] = useState<any>();

  const getClasses = async () => {
    const studios = await firestore().collection("classes").get();
    setClass(
      studios.docs.map((studio) => ({ ...studio.data(), idx: studio.id }))
    );
  };

  return (
    <View>
      <Text>home screen</Text>
      <Button title="데이터 불러오기" onPress={getClasses} />
      {classes?.map((studio: Classes, idx: string) => {
        return (
          <TouchableOpacity key={idx}>
            <Text>{studio.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
