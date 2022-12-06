import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Color from "../../../common/color"

const Infomation = () => {
    const imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR5T8LUTUYZ9krhbeezHDALin2_pyoizA5TqIT8QUWF7Kfw737wtrSz3G1STyASPjyIg&usqp=CAU"
    return (
        <View style={styles.containerInfo}>
            <View style={styles.boxAvatar}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: imageURL,
                    }}
                />
            </View>
            <Text style={styles.name}>Ly Cao Thang</Text>
            <Text style={styles.email}>thangly2k1@gmail.com</Text>
        </View>
    )
}

export default Infomation

const styles = StyleSheet.create({
    containerInfo: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxAvatar: {
        borderRadius: 10,
        overflow: 'hidden',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowColor: Color.black,
        shadowOpacity: 1,
        elevation: 10,
        backgroundColor: "#000",
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    name: {
        color: Color.magenta,
        fontWeight: "bold",
        fontSize: 32,
        marginTop: 10
    },
    email: {
        color: Color.black,
        fontSize: 24,
    }
})