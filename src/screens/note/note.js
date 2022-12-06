import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Color from "../../common/color"
import { Input } from "react-native-elements"
import Icons from "../../common/icon"
const Note = () => {

    return (
        <View style={styles.container}>
            <Input
                autoFocus
                placeholder="search"
                inputContainerStyle={styles.inputStyle}
                containerStyle={styles.inputContainerStyle}
                leftIcon={{
                    type: 'font-awesome',
                    name: Icons.EvilIcons.search
                }}
            />
        </View>
    )
}

export default Note

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 20,
    },
    inputContainerStyle: {
        borderColor: Color.black,
        borderWidth: 0.5,
        height: 55,
        borderRadius: 10,
        marginTop: 20,
    },
    inputStyle: {
        borderBottomWidth: 0,
        top: 3
    },
})