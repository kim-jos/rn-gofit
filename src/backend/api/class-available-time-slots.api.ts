import firestore from "@react-native-firebase/firestore";

export default async function getTimeSlots(docRefs: Object[]) {
  try {
    const timeSlots = await firestore()
      .collection("classAvailableTimeSlots")
      .where(firestore.FieldPath.documentId(), "in", docRefs)
      .get();
    const data = timeSlots.docs.map((timeSlot) => ({
      ...timeSlot.data(),
      id: timeSlot.id,
    }));
    console.log("data time slots: ", data);
    return data;
  } catch (error) {
    console.error("Error retrieving timeSlot:", error);
    return [];
  }
}
