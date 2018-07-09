import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native'
import { Actions } from 'react-native-router-flux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
})

class DrawerContent extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string
  }

  static contextTypes = {
    drawer: PropTypes.object
  }

  render () {
    return (
      <View style={styles.container}>
        {/* <Text>Drawer Content</Text>
        <Button onPress={Actions.closeDrawer}>Back</Button> */}
        <Text>Title: {this.props.title}</Text>

        <Text onPress={Actions.pop}>Back</Text>
        <Text onPress={Actions.osu}>Switch to tab1</Text>
        <Text onPress={Actions.um}>Switch to tab2</Text>
        <Text onPress={Actions.vu}>Switch to tab3</Text>
        <Text onPress={Actions.error}>Show error modal</Text>
      </View >
    )
  }
}

export default DrawerContent
