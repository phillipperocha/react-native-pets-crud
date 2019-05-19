import React, { Component } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import FormPet from '../components/FormPet'
import qs from 'querystring'
 
export default class EditarPet extends Component {
  state = {
    pet: undefined
  }
 
  onSave (data) {
    const pageId = this.props.match.params.pageId
 
    const options = {
      method: 'PUT',
      body: qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
 
    fetch(`https://pets-unipe.herokuapp.com/pets/${pageId}`, options)
      .then(T => T.json())
      .then(() => Alert.alert('editar', 'pet editado'))
      .then(() => this.props.history.push('/'))
  }
 
  componentDidMount () {
    const pageId = this.props.match.params.pageId
 
    fetch(`https://pets-unipe.herokuapp.com/pets/${pageId}`, { method: 'GET' })
      .then(T => T.json())
      .then(pet => this.setState({ pet }))
  }
 
  render () {
    const { pet } = this.state
 
    return (
      <View style={styles.container}>
        <Text>Editar Pet</Text>
        {!pet && (
          <Text>Não ha nenhum pet</Text>
        )}
        {pet && (
          <FormPet
            value={pet}
            onSave={this.onSave.bind(this)}
            onCancel={() => this.props.history.push('/')}
          />
        )}
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