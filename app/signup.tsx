import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native"
import { COLORS } from "../theme/theme";
import { Ionicons } from "@expo/vector-icons";
const registeruser=require("../assets/icons/registeruser.png")
const SignUp=()=>{
return (
<View style={styles.container}>
<SafeAreaView>
    <TouchableOpacity style={styles.backButtonArea} activeOpacity={0.9}>
    <Ionicons name='arrow-back' size={25} color={COLORS.primaryLightGreyHex}/>
    <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
    <View style={styles.addProPicArea}>
<View style={styles.registerIconArea}>
<Image source={registeruser} resizeMode="contain" style={styles.registerUserIcon}/>
</View>
<Text style={styles.addProText}>Add profile picture</Text>
    </View>
</SafeAreaView>
<View style={styles.formBox}>
        <Text style={styles.label}>FIRST NAME</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholderTextColor={"#A2A2A2"}
            placeholder="first name here"
          />
        </View>

        <Text style={styles.label}>LAST NAME</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholderTextColor={"#A2A2A2"}
            placeholder="last name here"
          />
        </View>

        <Text style={styles.label}>EMAIL NAME</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholderTextColor={"#A2A2A2"}
            placeholder="email here"
          />
        </View>

        <Text style={styles.label}>PASSWORD NAME</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholderTextColor={"#A2A2A2"}
            placeholder="password here"
          />
        </View>

        <Text style={styles.label}>CONFIRM PASSWORD</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholderTextColor={"#A2A2A2"}
            placeholder="confirm password here"
          />
        </View>

        <TouchableOpacity style={styles.loginButton} activeOpacity={0.9}>
          <Text style={styles.loginButtonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
</View>
)
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
      },
      backButtonArea: {
        width: 80,
        height: 50,
        marginLeft: 20,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      },
      backIcon: {
        width: 12,
        height: 12,
      },
      backText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#FFFFFF90",
      },
      addProPicArea: {
        width: "100%",
        height: 170,
        justifyContent: "center",
        alignItems: "center",
      },
      registerIconArea: {
        width: 120,
        height: 120,
        backgroundColor: "#1D1D1D",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
      },
      registerUserIcon: {
        width: 60,
        height: 60,
      },
      addProText: {
        width: 200,
        marginTop: 15,
        fontSize: 14,
        textAlign: "center",
        color: "#FFFFFF",
      },
      formBox: {
        zIndex: 10,
        alignSelf: "center",
        width: 360,
        height: 400,
        padding: 10,
      },
      label: {
        marginTop: 15,
        color: "white",
        fontSize: 15,
        fontWeight: "600",
        letterSpacing: 1,
      },
      inputArea: {
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 8,
        height: 40,
        color: "white",
        backgroundColor: "#212121",
      },
      input: {
        width: 280,
        height: 40,
        padding: 10,
        paddingBottom: 13,
        color: "white",
        fontSize: 17,
        backgroundColor: "#212121",
        marginLeft: 10,
      },
      loginButton: {
        marginTop: 12,
        width: "100%",
        borderRadius: 8,
        height: 50,
        backgroundColor: "#FFBB3B",
        justifyContent: "center",
        alignItems: "center",
      },
      loginButtonText: {
        fontSize: 15,
        fontWeight: "bold",
      },
})
export default SignUp