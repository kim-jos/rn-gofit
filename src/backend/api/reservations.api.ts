import firestore from "@react-native-firebase/firestore";
import Reservations from "../models/reservations.model";

export default async function createReservation(data: Reservations) {
  try {
    return await firestore().collection("reservations").add(data);
  } catch (error) {
    console.error("Error creating reservation:", error);
  }
}
