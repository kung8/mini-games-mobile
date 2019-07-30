import React from 'react'
import { View, Text } from 'react-native'

export default function CardStyling(card) {
    let suit
    if (card.suit === 'heart') {
        suit = "♥︎"
    } else if (card.suit === 'diamond') {
        suit = "♦︎"
    } else if (card.suit === 'spade') {
        suit = "♠︎"
    } else if (card.suit === 'club') {
        suit = "♣︎"
    }

    let suitRepeat
    if (card.value == 'K') {
        suitRepeat = (
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 250 }}>

                <Text>
                    {/* <i class="fas fa-crown"></i> */}
                </Text>

            </View>
        )
    } else if (card.value == 'Q') {
        suitRepeat = (
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 250 }}>
                <Text>
                    {/* <i className="fas fa-chess-queen" /> */}
                </Text>
            </View>
        )
    } else if (card.value == 'J') {
        suitRepeat = (
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 250 }}>
                <Text>
                    {/* <i class="fas fa-chess-pawn"></i> */}
                </Text>
            </View>
        )
    } else if (+card.value == '10') {
        suitRepeat =
            (<View style={{ display: 'flex', width: 100, flexDirection: 'row', height: 250, justifyContent: 'space-around' }}>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>
                <View style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>
            </View>)
    } else if (+card.value === 9) {
        suitRepeat = (
            <View style={{ display: 'flex', width: 100, flexDirection: 'row', height: 250, justifyContent: 'space-around' }}>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>
                <View style={{
                    display: 'flex', flexDirection: 'row', alignItems: 'center'
                }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>
            </View>)
    } else if (+card.value === 8) {
        suitRepeat = (
            <View style={{ display: 'flex', justifyContent: 'space-around', height: 250, width: 100, flexDirection: 'column', alignItems: 'center' }}>
                <View style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', width: 120, marginTop: 30 }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>

                <View>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>

                <View style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', width: 120 }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>

                <View>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>

                <View style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', width: 120, marginBottom: 30 }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>
            </View>)
    } else if (+card.value === 7) {
        suitRepeat = (
            <View style={{ position: 'relative', display: 'flex', flexDirection: 'column', width: 120, height: 250, justifyContent: 'space-around' }}>
                <View style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', width: 120, marginTop: 30 }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>

                <View style={{ position: 'absolute', display: 'flex', alignItems: 'center', top: 70, left: 45 }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>
                <View style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', width: 120 }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>

                <View style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', width: 120, marginBottom: 30 }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>
            </View>
        )
    } else if (+card.value === 6) {
        suitRepeat = (
            <View style={{ display: 'flex', justifyContent: 'space-around', height: 250, width: 120, flexDirection: 'column' }}>
                <View style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', width: 120, marginTop: 30 }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>

                <View style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', width: 120 }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>

                <View style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', width: 120, marginBottom: 30 }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>
            </View>
        )
    } else if (+card.value === 5) {
        suitRepeat = (
            <View style={{ display: 'flex', flexDirection: 'column', width: 100, height: 250, justifyContent: 'space-around', alignItems: 'center' }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: 120 }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>
                <View>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>
                <View style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', width: 120 }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>
            </View>
        )
    } else if (+card.value === 4) {
        suitRepeat = (
            <View style={{ display: 'flex', justifyContent: 'space-around', height: 250, width: 120, flexDirection: 'column' }}>
                <View style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', width: 120, marginTop: 30 }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>
                <View style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', width: 120, marginBottom: 30 }}>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                    <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                </View>
            </View>
        )
    } else if (+card.value === 3) {
        suitRepeat = (
            <View style={{ display: 'flex', flexDirection: 'column', height: 250, justifyContent: 'space-evenly' }}>
                <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
            </View>
        )
    } else if (+card.value === 2) {
        suitRepeat = (
            <View style={{ display: 'flex', flexDirection: 'column', height: 250, justifyContent: 'space-evenly' }}>
                <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
                <Text style={{ color: card.color, margin: 0, fontSize: 40 }}>{suit}</Text>
            </View>
        )
    } else if (card.value === 'A') {
        suitRepeat = (
            <View style={{ display: 'flex', flexDirection: 'column', height: 250, justifyContent: 'center' }}>
                <Text style={{ color: card.color, margin: 0, fontSize: 60 }}>{suit}</Text>
            </View>
        )
    }

    return (
        <View key={card.card_id} style={{ position: 'relative', backgroundColor: '#fff', borderRadius: 16, display: 'flex', border: 'solid black 1px', margin: 5, height: 250, width: 200, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ display: 'flex', flexDirection: 'column', height: '20%', justifyContent: 'space-between', position: 'absolute', left: 15, top: 20, alignItems: 'center' }}>
                <Text style={{ color: card.color, margin: 0, fontSize: 30 }}>{card.value}</Text>
                <Text style={{ color: card.color, margin: 0, fontSize: 30 }}>{suit}</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {suitRepeat}
            </View>

            <View style={{ display: 'flex', flexDirection: 'column', height: '20%', justifyContent: 'space-between', position: 'absolute', right: 15, bottom: 40, alignItems: 'center' }}>
                <Text style={{ color: card.color, margin: 0, fontSize: 30 }}>{suit}</Text>
                <Text style={{ color: card.color, margin: 0, fontSize: 30 }}>{card.value}</Text>
            </View>
        </View>)
}

