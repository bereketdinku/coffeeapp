import { useLocalSearchParams } from "expo-router"
import React from "react"
import { Text, View } from "react-native"

const UserId=()=>{
    const {id}=useLocalSearchParams()
    return (
        <View>
            <Text>userspage {id}</Text>
        </View>
    )
}
export default UserId