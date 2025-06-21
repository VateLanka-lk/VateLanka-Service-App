import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Linking,
} from "react-native";
import { COLORS } from "../../utils/Constants";
import CustomText from "../../utils/CustomText";

const ContactUS = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [ContactNo, setContactNo] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !comment || !ContactNo) {
      Alert.alert("Error", "Please fill all fields.");
      return;
    }
    const subject = encodeURIComponent("Contact Us Form Submission");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nContact No: ${ContactNo}\n Comment: ${comment}`
    );
    const mailtoUrl = `mailto:vatelanka@gmail.com?subject=${subject}&body=${body}`;
    Linking.openURL(mailtoUrl)
      .then(() => {
        setName("");
        setEmail("");
        setComment("");
        setContactNo("");
      })
      .catch(() => {
        Alert.alert("Error", "Could not open the mail app.");
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.formCard}>
            <CustomText style={styles.heading}>Contact Us</CustomText>
            <CustomText style={styles.label}>Name</CustomText>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
              placeholderTextColor={COLORS.textGray}
            />
            <CustomText style={styles.label}>Email</CustomText>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor={COLORS.textGray}
            />
            <CustomText style={styles.label}>Contact No</CustomText>
            <TextInput
              style={styles.input}
              placeholder="0123456780"
              value={ContactNo}
              onChangeText={setContactNo}
              placeholderTextColor={COLORS.textGray}
            />
            <CustomText style={styles.label}>Comment</CustomText>
            <TextInput
              style={[styles.input, styles.comment]}
              placeholder="Comment"
              value={comment}
              onChangeText={setComment}
              multiline
              numberOfLines={4}
              placeholderTextColor={COLORS.textGray}
            />
            <View style={styles.buttonContainer}>
              <Button
                title="Submit"
                color={COLORS.primary}
                onPress={handleSubmit}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formCard: {
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 24,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: 18,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    color: COLORS.textGray,
    marginBottom: 6,
    marginTop: 10,
    fontWeight: "500",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: COLORS.borderGray || COLORS.gray,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    fontSize: 16,
    color: COLORS.text,
    backgroundColor: COLORS.inputBackground || "#f9f9f9",
  },
  comment: {
    height: 100,
    textAlignVertical: "top",
    marginBottom: 16,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default ContactUS;
