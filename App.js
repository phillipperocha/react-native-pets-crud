import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ListarPet from './src/components/ListarPets'
import CadastroPet from './src/components/CadastroPet'

export default class App extends React.Component {

 render() {

    return (
      <CadastroPet />
      );
  }
}