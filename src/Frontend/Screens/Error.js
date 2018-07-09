import React from 'react'
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native'
import Button from 'react-native-button'
import { Actions } from 'react-native-router-flux'

const { height: deviceHeight } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subView: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})

export default class Error extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      offset: new Animated.Value(-deviceHeight)
    }
  }

  componentDidMount () {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: 0
    }).start()
  }

  closeModal () {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: -deviceHeight
    }).start(Actions.pop)
  }

  render () {
    const backgroundColor = 'rgba(52,52,52,0.5)'
    return (
      <Animated.View style={[styles.container, { backgroundColor },
        { transform: [{ translateY: this.state.offset }] }]}>
        <View style={styles.subView}>
          <Text>{this.props.data}</Text>
          <Button onPress={this.closeModal.bind(this)}>Close</Button>
        </View>
      </Animated.View>
    )
  }
}
