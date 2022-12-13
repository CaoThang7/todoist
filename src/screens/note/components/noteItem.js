import { View, Text, StyleSheet, TouchableOpacity, } from "react-native"
import React, { useState } from "react"
import { CheckBox, Icon } from "react-native-elements"
import Icons from "../../../common/icon"
import Color from "../../../common/color"
import { useDispatch } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { mainStack } from "../../../common/navigator"
import { removeTodo } from "../../../redux/actions" // action remove redux basic
import { todoListSlice } from "../../../redux/toolkit/slices/todo" // action remove redux toolkit

const NoteItem = ({ item }) => {
  const [check4, setCheck4] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const goEditTodo = () => {
    navigation.navigate(mainStack.edit, { item: item })
  }

  const handleRemoveTodo = () => {
    // dispatch action removeTodo with redux basic:
    /* dispatch(removeTodo(item.id)) */
    dispatch(todoListSlice.actions.removeTodo(item.id)) // dispatch action with redux toolkit
  }

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <CheckBox
          center
          checkedIcon={
            <Icon
              name="radio-button-checked"
              type="material"
              color="green"
              size={25}
            />
          }
          uncheckedIcon={
            <Icon
              name="radio-button-unchecked"
              type="material"
              color="grey"
              size={25}
            />
          }
          checked={check4}
          onPress={() => setCheck4(!check4)}
        />
        <View style={styles.noteItem}>
          <Text style={styles.textTitle}>{item.name}</Text>
          <View style={styles.iconAction}>
            <TouchableOpacity onPress={goEditTodo}>
              <Icon name={Icons.Feather.edit} color={Color.green} size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRemoveTodo}>
              <Icon name={Icons.Feather.delete} color={Color.red} size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: 330,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 18,
  },
  noteItem: {
    flexDirection: 'row',
    width: 245,
    justifyContent: 'space-between'
  },
  iconAction: {
    flexDirection: 'row',
  },
})
export default NoteItem;