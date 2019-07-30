import React,{Component} from 'react'
import { ScrollView,StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import {url} from '../url'
import Cards from './Cards'

export default class Blackjack extends Component {
  constructor(){
    super()
    this.state={
      cards:[]
    }
  }
  componentDidMount(){
    axios.get(`${url}/api/cards`).then(({data:cards})=> {
      this.setState({cards})
    })
  }  

  render(){
    console.log(this.state.cards)
      const mappedCards = this.state.cards.map(card=>{
        return(
          <Cards key={card.card_id} card={card}/>
        )
      })
        return(<View style={styles.container}>
            <ScrollView style={{width:'100%'}}>
                <Text>Black Jack</Text>
                {mappedCards}
            </ScrollView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    display:'flex',
    width:'100%'
  }
});
