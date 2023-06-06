import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import getTimeSlots from "../backend/api/class-available-time-slots.api";
import createReservation from "../backend/api/reservations.api";
import Classes from "../backend/models/classes.model";
import { hasEnoughCredits } from "../utils/validation/credits.validation";

export default function ClassDetailsScreen({ route }: any) {
  const { studio } = route.params;
  const selectedClass: Classes = studio;

  const [timeSlots, setTimeSlots] = useState<any>();
  const [reservationData, setReservationData] = useState({
    timeSlot: "classAvailableTimeSlotsRef/asdf",
    user: "user/asdf",
    classRequiredCredits: selectedClass.creditsRequired,
    className: selectedClass.name,
    createdAt: new Date(Date.now()),
    isFinal: false,
    startTime: new Date(),
  });

  useEffect(() => {
    const fetchData = async () => {
      const timeSlotsData = await getTimeSlots(
        selectedClass.classAvailableTimeSlotsRefs
      );
      setTimeSlots(timeSlotsData);
    };
    fetchData();
  }, []);

  // createReservations();

  const renderTimeSlot = ({ item }: { item: any }) => {
    return (
      <View>
        <Text>Start Time: {item.startTime}</Text>
      </View>
    );
  };

  const handleSubmit = async () => {
    // TODO: need to add validation for b2c and b2b;
    if (hasEnoughCredits()) {
      setReservationData((prevData) => ({
        ...prevData,
        isFinal: true, // Update the isFinal field to true
      }));

      await createReservation(reservationData);
    } else {
      throw new Error("포인트가 부족합니다!");
    }
  };

  return (
    <View>
      <FlatList
        data={timeSlots}
        renderItem={renderTimeSlot}
        keyExtractor={(item) => item.id}
      />
      <Button title="Create Reservation" onPress={handleSubmit} />

      <Text>ClassDetailsScreen</Text>
      <Text>{selectedClass.name}</Text>
      <Text>{selectedClass.id}</Text>
      <Text>hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
