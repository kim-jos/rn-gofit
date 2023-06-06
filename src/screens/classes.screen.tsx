import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import getClasses from "../backend/api/classes.api";
import Classes from "../backend/models/classes.model";
import { ScreenNames } from "../utils/screen.names";

export default function ClassesScreen() {
  const [classes, setClasses] = useState<any>();

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const classesData = await getClasses();
      setClasses(classesData);
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>classes screen</Text>
      <Button title="데이터 불러오기" onPress={getClasses} />
      {classes?.map((studio: Classes, idx: string) => {
        return (
          <TouchableOpacity
            key={idx}
            onPress={() => {
              navigation.navigate(
                ScreenNames.CLASSDETAILS as never,
                { studio } as never
              );
            }}
          >
            <Text>{studio.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
