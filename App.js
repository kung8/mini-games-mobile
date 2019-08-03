import React from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import Dash from './views/Dash'
import Profile from './views/Profile'
import Game from './views/Games'

const nav = createBottomTabNavigator({
  DASH: Dash,
  GAME:Game,
  ABOUT:Profile 
})

const App = createAppContainer(nav)

export default App

