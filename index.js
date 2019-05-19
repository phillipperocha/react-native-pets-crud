import React from 'react'
import ListarPets from './src/components/ListarPets'
import CadastroPet from './src/components/CadastroPet'
import EditarPet from './src/components/EditarPet'
import { View } from 'react-native'
import { NativeRouter, Switch, Route } from 'react-router-native'
 
export default class App extends React.Component {
  render () {
    return (
      <NativeRouter>
        <View style={{ flex: 1 }}>
          <Switch>
            <Route path='/cadastro' component={CadastroPet} />
            <Route path='/:pageId' component={EditarPet} />
            <Route component={ListarPets} />
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}