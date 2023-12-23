// import { BlurView } from "@react-native-community/blur"
import { Tabs } from "expo-router"
import React from "react"
import { StyleSheet } from "react-native"
import CustomIcon from "../../components/CustomIcon"
import { COLORS } from "../../theme/theme"
import { Ionicons } from "@expo/vector-icons"
const TabLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarStyle:styles.tabBarStyle,
        }}>
            <Tabs.Screen name="index" options={{
                headerTitle: 'Home',
                tabBarLabel: 'Home',
                tabBarIcon:({focused,color,size})=>(
                    <Ionicons name="home" size={25} color='white'/>
                                  )
            }} />
            <Tabs.Screen name="users/[id]" options={{
                headerTitle: 'User',
                tabBarLabel: 'User',
                tabBarIcon:({focused,color,size})=>(
  <CustomIcon name="home" size={25} color={focused? COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}/>
                )
            }} />
        </Tabs>
    )
}
const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor:COLORS.primaryBlackRGBA,
        elevation: 0,
        borderTopWidth: 0,
        borderTopColor: 'transparent'
    },
    BlurViewStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
})
export default TabLayout