import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../assets/images/avatar.png')}
              style={styles.welcomeImage}
            />
            <Text>Let's go {"\n"}Cris Freeman</Text>
            
          </View>
          <View  style={{alignItems:'center'}}>
          <Text>
          Choose your commute!
          </Text>
          </View>
          <View style={styles.commutesContainer}>


            <TouchableOpacity onPress={this._handleHelpPress}>
              <Image
              source={require('../assets/images/bike.png')}
              style={styles.welcomeImage}
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._handleHelpPress}>
              <Image
              source={require('../assets/images/carro.png')}
              style={styles.welcomeImage}
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._handleHelpPress}>
              <Image
              source={require('../assets/images/bus.png')}
              style={styles.welcomeImage}
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._handleHelpPress}>
              <Image
              source={require('../assets/images/andando.png')}
              style={styles.welcomeImage}
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._handleHelpPress}>
              <Image
              source={require('../assets/images/trem.png')}
              style={styles.welcomeImage}
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._handleHelpPress}>
              <Image
              source={require('../assets/images/skate.png')}
              style={styles.welcomeImage}
              />
              </TouchableOpacity>
          </View>
        </ScrollView>

      
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://maps.google.com');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://maps.google.com'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  commutesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
