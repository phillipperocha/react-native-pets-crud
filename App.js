import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  // As variáveis de estado
  state = {
    pets: []
  }

  componentDidMount() {
    fetch('https://pets-unipe.herokuapp.com/pets', { method: 'GET'})
      .then(T => T.json())
      .then(pets => this.setState({ pets }))
  }

  render() {

    // Criar uma constante que será os nossos pets
    // Vamos descompactar a variável que está dentro do state
    const { pets } = this.state

    return (
      <View>
        <Text>Pets!</Text>
        <Button title="Adicionar" onPress={() => console.log('criou o pet')}/>
        
        <View>

          { pets.map((pet, chave) => (
            <View key={ chave }>
              <Text>{ pet.name }</Text>
              <Button title="Editar" onPress={() => console.log('editando o pet')}/>
              <Button title="Excluir" onPress={() => console.log('excluíndo o pet')}/>
            </View>

          ))}

        </View>
      </View>
    );
  }
}