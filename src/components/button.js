import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import Color from "../common/color"

const Button = ({ onPress, titleStyle, style, title, color = Color.blue }) => {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <View style={[styles.container, { backgroundColor: color }]}>
                <Text style={titleStyle ? titleStyle : styles.txtTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const FloatingButton = ({ onPress, style, color = Color.blue, image }) => {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <View style={[styles.containerFloating, { backgroundColor: color }]}>
                <Image source={image} style={styles.imageFloatingBtn} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 10
    },
    containerFloating: {
        borderRadius: 50,
        padding: 10,
    },
    imageFloatingBtn: {
        height: 40,
        width: 40,
    },
    txtTitle: { fontSize: 22, color: Color.white },
})

export default { Button, FloatingButton };