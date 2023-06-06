import firestore from "@react-native-firebase/firestore";

export default async function getClasses() {
  try {
    const studios = await firestore()
      .collection("classes")
      .where("hideClass", "==", false)
      .orderBy("priority", "asc")
      .get();
    return studios.docs.map((studio) => ({ ...studio.data(), id: studio.id }));
  } catch (error) {
    console.error("Error retrieving classes:", error);
    return [];
  }
}
