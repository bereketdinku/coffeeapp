import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

const RootLayout=()=>{
return(
   <Stack>
    <Stack.Screen name="(tabs)" options={{
        headerShown:false
    }}/>
    <Stack.Screen name="detail"options={{
        headerShown:false
    }}/>
    <Stack.Screen name="payment"options={{
        headerShown:false
    }}/>
    
   </Stack>
)
}
export default RootLayout;