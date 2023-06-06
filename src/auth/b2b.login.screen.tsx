import { firebase } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { isValidCompanyEmail } from "../utils/validation/company.email.validation";

const B2bLoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allowedEmailDomains, setAllowedEmailDomains] = useState<string[]>([]);
  const [companies, setCompanies] = useState<any>();
  const [worked, setWorked] = useState(false);

  useEffect(() => {
    const getCompanyEmails = async () => {
      const domains: string[] = [];
      const companiesSnapshot = await firestore().collection("companies").get();
      const companies = companiesSnapshot.docs.map((companySnapshot) => {
        const companyData = companySnapshot.data();
        domains.push(companyData.email);
        return { ...companyData, id: companyData.id };
      });
      setAllowedEmailDomains(domains);
      setCompanies(companies);
      console.log("companies: ", companies);
    };
    getCompanyEmails();
  }, []);

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login successful, do something with userCredential.user
        console.log("Login successful:", userCredential.user);

        const isValidEmail = isValidCompanyEmail(email, allowedEmailDomains);
        if (!isValidEmail) throw new Error("Not a Valid Company Email");
        setWorked(true);
      })
      .catch((error) => {
        Alert.alert("Login Error", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={companies}
        renderItem={({ item }) => (
          <View>
            <Text>Email: {item.email}</Text>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
      {worked ? <Text>worked</Text> : <Text>didnt work</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default B2bLoginScreen;
