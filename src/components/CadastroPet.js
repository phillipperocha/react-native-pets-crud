import React, { Component } from 'react'
import { StyleSheet, View, Text , Alert} from 'react-native'
import FormPet from './FormPet'
import qs from 'querystring'
 
export default class CadastroPet extends Component {
  onSave (data) {
    fetch('https://pets-unipe.herokuapp.com/pets', {
      method: 'POST',
      body: qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(T => T.json())
      .then(() => this.props.history.push('/'))
  }
 
  render () {
    return (
      <View style={styles.container}>
        <Text>CadastroPet</Text>
        <FormPet
          onSave={this.onSave.bind(this)}
          onCancel={() => this.props.history.push('/')}
        />
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