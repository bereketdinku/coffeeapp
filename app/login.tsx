import { LinearGradient } from "expo-linear-gradient"
import { router } from "expo-router"
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from "react-native"
const facebookIcon = require('../assets/icons/facebookIcon.png')
const googleIcon = require('../assets/icons/googleIcon.png')
const bg_image = require('../assets/coffee_assets/americano/square/americano_pic_2_square.png')
const Login = () => {
  return (<View style={styles.container}>
    <LinearGradient colors={["black", "transparent"]} style={styles.topGradient}>

    </LinearGradient>
    <View style={styles.bgImgArea}>
      <Image source={bg_image} resizeMode="contain" style={styles.bg_Image} />
    </View>
    <LinearGradient colors={["transparent", "black"]} style={styles.bottomGradient}>

    </LinearGradient>
    <View style={styles.logoArea}>
      <Image source={bg_image} resizeMode="contain" style={styles.bg_Image} />
      <Text style={styles.logoName}>Coffee APP</Text>
    </View>
    
      <View style={styles.formBox}>
        <Text style={styles.label
        }>EMAIL</Text>
        <View style={styles.emailInputArea}>
          <TextInput style={styles.emailInput} placeholderTextColor={"#A2A2A2"} placeholder="email here" />
        </View>
        <Text style={styles.label}>PASSWORD</Text>
        <View style={styles.emailPasswordArea} >
          <TextInput style={styles.emailPassword} placeholderTextColor={"#A2A2A2"} placeholder="password here" />
          <View style={styles.forgotLabelArea}>
            <Text style={styles.forgotLabel}>FORGOT?</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton} activeOpacity={0.9} onPress={()=>{
          router.push("(tabs)")
        }}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.socialLoginTextArea}>
          <View style={styles.socialLoginTextSt}></View>
          <Text style={styles.socialLoginText}>Social Logins</Text>
          <View style={styles.socialLoginTextSt}></View>
        </View>
        
        <View style={styles.socialLoginButtonArea}>
          <View style={styles.socialLoginButton}>
            <Image
              source={facebookIcon}
              style={styles.socialLoginButtonIcon}
              resizeMode="contain"
            />
          </View>
          <View style={styles.socialLoginButton}>
            <Image
              source={googleIcon}
              style={styles.socialLoginButtonIcon}
              resizeMode="contain"
            />
          </View>
        </View>
        <Text style={styles.newAccountText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={()=>{
          router.push("signup")
        }} activeOpacity={0.9}>
          <Text style={styles.registerButton}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    
  </View>)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  topGradient: {
    zIndex: 10,
    position: 'absolute',
    width: "100%",
    height: 100
  },
  bottomGradient: {
    zIndex: 10,
    position: 'absolute',
    top: 380,
    width: "100%",
    height: 200
  },
  bgImgArea: {
    alignSelf: 'center',
    position: 'absolute',
    top: -180,
    left: -400,
    width: 1250,
    height: 750,
    backgroundColor: "black"
  },
  bg_Image: {
    height: "100%",
    width: "100%"
  },
  logoArea: {
    height: 500,
    justifyContent: "center",
    alignItems: "center"
  }
  ,
  logo: {
    marginTop: 10,
    height: 110,
    width: 110
  },
  logoName: {
    color: "#FFBB3B",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2
  },
  formBox: {
    zIndex: 10,
    alignSelf: 'center',
    marginTop: -120,
    width: 360,
    height: 400,
    padding: 10
  },
  label: {
    marginTop: 15,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1.5
  },
  emailInputArea: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    height: 40,
    color: "white",
    fontSize: 16,
    backgroundColor: "#212121"
  },
  emailPasswordArea: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    height: 40,
    color: "white",
    fontSize: 16,
    backgroundColor: "#212121",
    flexDirection: "row"
  },

  emailInput: {
    width: 280,
    height: 40,
    padding: 10,
    color: "white",
    fontSize: 17,
    backgroundColor: "#212121",
    marginLeft: 10,
  },
  emailPassword: {
    width: 230,
    height: 40,
    padding: 10,
    color: "white",
    fontSize: 17,
    marginLeft: 10,
  },
  forgotLabelArea: {
    justifyContent: "center",
    marginLeft: 20,
  },
  forgotLabel: {
    fontSize: 12.5,
    color: "white",
    fontWeight: "bold",
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
  socialLoginTextArea: {
    marginTop: 22,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  socialLoginTextSt: {
    height: 1,
    width: 108,
    backgroundColor: "#FFFFFF40",
  },
  socialLoginText: {
    color: "white",
    marginLeft: 20,
    marginRight: 20,
  },
  socialLoginButtonArea: {
    marginTop: 5,
    alignSelf: "center",
    flexDirection: "row",
  },
  socialLoginButton: {
    marginTop: -5,
    margin: 5,
  },
  socialLoginButtonIcon: {
    width: 60,
    margin: 5,
  },
  newAccountText: {
    marginTop: 15,
    alignSelf: "center",
    fontSize: 16,
    color: "#FFFFFF70",
  },
  registerButton: {
    marginTop: 5,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  }

})
export default Login