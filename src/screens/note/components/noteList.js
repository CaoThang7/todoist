import { View, Text, ScrollView, StyleSheet } from "react-native"
import React from "react"
import { useSelector } from "react-redux"
import { todoRemainingSelector } from "../../../redux/selectors"
import NoteItem from "./noteItem"

const NoteList = () => {
    const data = useSelector(todoRemainingSelector);

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Hi Thắng! Công việc cần làm hôm nay</Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.box}>
                    {data.map((item, i) => (
                        <NoteItem key={item.id} item={item} />
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: "white",
        flex: 1
    },
    textTitle: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 10,
        color: "black",
    },
    box: {
        flexDirection: 'column',
        flexWrap: "wrap",
    },
})

export default NoteList;