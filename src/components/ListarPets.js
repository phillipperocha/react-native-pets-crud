import React from 'react'
import { Text, View, Button, Alert, StyleSheet } from 'react-native'
 
export default class ListaPet extends React.Component {
  state = {
    pets: []
  }
 
  componentDidMount () {
    fetch('https://pets-unipe.herokuapp.com/pets', { method: 'GET' })
      .then(T => T.json())
      .then(pets => this.setState({ pets }))
  }
 
  onDelete (id) {
    Alert.alert(
      'Exclusão de Pet',
      'Você confirma a exclusão deste pet?',
      [
        { text: 'Não', style: 'cancel' },
        {
          text: 'Sim',
          onPress: () => {
            fetch(`https://pets-unipe.herokuapp.com/pets/${id}`, { method: 'DELETE' })
              .then(T => T.json())
              .then(() => this.setState({ pets: this.state.pets.filter(T => T.id !== id) }))
              .then(() => this.props.history.push('/'))
          }
        }
      ])
  }
 
  render () {
    const { pets } = this.state
 
    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Text>Pets</Text>
          <Button title='Adicionar' onPress={() => this.props.history.push('/cadastro')} /> 
        </View>
        <View style={{ flex: 0.9 }}>
          {pets.map((pet, key) => (
            <View key={key} style={{ flex: 0.1, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ flex: 0.6 }}>{pet.name}</Text>
              <Button style={{ flex: 0.2 }} title='Editar' onPress={() => this.props.history.push('/' + pet._id)} />
              <Button style={{ flex: 0.2 }} title='Excluir' onPress={() => this.onDelete(pet._id)} />
            </View>
          ))}
        </View>
      </View>
    )
  }
}

// onPress={() => this.props.history.push('/cadastro')}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    paddingLeft: 20,
    paddingRight: 20
  },
  subcontainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})