import React from 'react'
import { Text, View, StyleSheet, YellowBox } from 'react-native'
import { Router, Scene, Tabs, Drawer, Stack, Modal } from 'react-native-router-flux'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import Images from 'assets/Images'

import ScarletScreen from 'frontend/Screens/ScarletScreen'
import GrayScreen from 'frontend/Screens/GrayScreen'
import BlueScreen from 'frontend/Screens/BlueScreen'
import MaizeScreen from 'frontend/Screens/MaizeScreen'
import GoldScreen from 'frontend/Screens/GoldScreen'
import BlackScreen from 'frontend/Screens/BlackScreen'
import ModalScreen from 'frontend/Screens/ModalScreen'
import Black2Screen from 'frontend/Screens/Black2Screen'
import Black3Screen from 'frontend/Screens/Black3Screen'
import DrawerContent from 'frontend/Screens/drawer/DrawerContent'
import ErrorModal from 'frontend/Screens/modal/ErrorModal'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

// Simple component to render something in place of icon
const TabIcon = (props) => {
  const textColor = props.focused ? 'red' : 'black'

  return (
    <View>
      <Text style={{color: textColor}}>
        {props.title}
      </Text>
    </View>
  )
}

const App = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Modal key="modal"
          hideNavBar
          transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}
        >
          <Drawer
            hideNavBar
            key="drawer"
            contentComponent={DrawerContent}
            drawerImage={Images.icMenu}
            drawerWidth={300}
          >
            {/*
                Wrapper Scene needed to fix a bug where the tabs would
                reload as a modal ontop of itself
              */}
            <Scene hideNavBar>
              {/* Tab Container */}
              <Tabs
                key="tabbar"
                tabBarStyle={styles.tabBarStyles}
                tabBarPosition='bottom'
                showLabel={false}
              >
                {/* Tab and it's scenes */}
                <Stack key="osu" icon={TabIcon} tabBarLabel="osu" title="osu">
                  <Scene
                    key="scarlet"
                    component={ScarletScreen}
                    title="Scarlet"
                  />
                  <Scene
                    back
                    key="gray"
                    component={GrayScreen}
                    title="Gray"
                  />
                </Stack>

                {/* Tab and it's scenes */}
                <Stack key="um" icon={TabIcon} tabBarLabel="um" title="um">
                  <Scene
                    key="blue"
                    component={BlueScreen}
                    title="Blue"
                  />
                  <Scene
                    back
                    key="maize"
                    component={MaizeScreen}
                    title="Maize"
                  />
                </Stack>

                {/* Tab and it's scenes */}
                <Stack key="vu" icon={TabIcon} tabBarLabel="vu" title="vu">
                  <Scene
                    key="gold"
                    component={GoldScreen}
                    title="Gold"
                  />
                  <Scene
                    back
                    key="black"
                    component={BlackScreen}
                    title="Black"
                    hideTabBar
                  />
                </Stack>
              </Tabs>
              <Scene key='blackn'>
                <Scene
                  drawer={false}
                  key="black2"
                  component={Black2Screen}
                  title="Black2"
                  back
                />
                <Scene
                  key="black3"
                  component={Black3Screen}
                  title="Black3"
                  back={true}
                />
              </Scene>
            </Scene>
          </Drawer>
          <Scene
            key="modalScreen"
            direction="vertical"
            component={ModalScreen}
            title="Modal"
            hideNavBar
          />
          <Scene key="error" component={ErrorModal} />
        </Modal>
      </Scene>
    </Router>
  )
}

const styles = StyleSheet.create({
  tabBarStyles: {
    backgroundColor: '#FFFFFF'
  }
})

export default App
