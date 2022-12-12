import { View, ActivityIndicator, StyleSheet } from "react-native"
import React from "react"
import Colors from "../common/color"

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors.magenta} />
        </View>
    )
}

export default Loading;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
})