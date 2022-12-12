import { Text, TouchableOpacity, StyleSheet, View } from "react-native"
import React from "react"
import { Dialog } from "react-native-elements"
import Color from "../common/color"
import FormCreate from "../screens/note/components/formCreate"

const SimpleDialog = ({ isVisible, onBackdropPress }) => {
    return (
        <Dialog isVisible={isVisible} onBackdropPress={onBackdropPress}>
            <Dialog.Title title="Thêm việc cần làm" titleStyle={styles.txtDialog} />
            <View style={styles.container}>
                <FormCreate />
                <TouchableOpacity onPress={onBackdropPress} style={styles.btnClose}>
                    <Text style={styles.textBtn}>Đóng</Text>
                </TouchableOpacity>
            </View>
        </Dialog>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 300,
    },
    txtTitle: { textAlign: "center" },
    txtDialog: {
        textAlign: "center",
        fontSize: 24,
        color: Color.magenta,
        fontWeight: 'bold'
    },
    btnClose: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        bottom: 0,
        left: 0
    },
    textBtn: {
        textAlign: "center",
        color: Color.black,
        fontSize: 24,
        marginTop: 10,
    },
})

export default SimpleDialog;