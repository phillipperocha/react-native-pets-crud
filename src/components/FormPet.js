import React, { Component } from 'react'
import { StyleSheet, Button, View, Text, TextInput, Picker } from 'react-native'
 
export default class FormPet extends Component {
  state = this.props.value || {
    name: '',
    raca: '',
  }
 
  componentWillReceiveProps (nextProps) {
    if (nextProps.value) {
      this.setState(nextProps.value)
    }
  }
 
  render () {
    return (
      <View style={styles.container}>
 
        <View>
          <View>
            <Text>Nome</Text>
            <TextInput
              placeholder='Ex.: Totó'
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
          </View>
          <View>
            <Text>Raça</Text>
            <TextInput
              placeholder='Ex.: Labrador'
              value={this.state.raca}
              onChangeText={raca => this.setState({ raca })}
            />
          </View>
        </View>
 
        <View>
          <Button title='Salvar' disabled={this.state.name === ''} onPress={() => this.props.onSave(this.state)} />
          <Button title='Cancelar' onPress={this.props.onCancel} />
        </View>
 
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})