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
  
  constructor(props) {
    super(props);
    this.state = {value:8200}
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../assets/images/avatar.png')}
              style={styles.welcomeImage}
            />
            <View style={{flexDirection:'column'}}>
            <Text style={{fontSize:30}}>Let's go {"\n"}Cris Freeman</Text>
            <View style={{flexDirection:'row'}}>
            <Image
              source={require('../assets/images/coin.png')}
              style={{width:30, height:30}}
            />
            <Text style={{fontSize:20}}> {this.state.value}</Text>
            </View>
            </View>
            
          </View>
          <View  style={{alignItems:'center'}}>
          <Text style={{fontSize:20}}>
          Choose your commute!
          </Text>
          </View>
          <View style={styles.commutesContainer}>


            <TouchableOpacity onPress={()=>this._handleHelpPress('bicycling', 'bicycle')}>
              <Image
              source={require('../assets/images/bike.png')}
              style={styles.welcomeImage}
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this._handleHelpPress('driving', 'carpool')}>
              <Image
              source={require('../assets/images/carro.png')}
              style={styles.welcomeImage}
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this._handleHelpPress('transit', 'bus')}>
              <Image
              source={require('../assets/images/bus.png')}
              style={styles.welcomeImage}
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this._handleHelpPress('walking', 'walking')}>
              <Image
              source={require('../assets/images/andando.png')}
              style={styles.welcomeImage}
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this._handleHelpPress('transit', 'train')}>
              <Image
              source={require('../assets/images/trem.png')}
              style={styles.welcomeImage}
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this._handleHelpPress('walking', 'skate')}>
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

  
  _changeScore = (travelmode, flair) => {
    let updateValue = travelmode==='bicycling'?60:travelmode==='walking'?50:travelmode==='transit'?30:10;
    console.log(updateValue);
    let newValue = this.state.value + updateValue;
    this.setState(prevState =>
    ( {value: prevState.value+updateValue} ));
    
    this.props.navigation.navigate('Status', {value: newValue, travelmode: flair, pointsWon: updateValue});
  };


  _handleHelpPress = (travelmode, flair) => {
    
    WebBrowser.openBrowserAsync('https://www.google.com/maps/dir/?api=1&origin=153+Goularte+Way&destination=DCP+Alum+Rock+High+School'+(travelmode?('&travelmode='+travelmode):null));
    
    this._changeScore(travelmode, flair);
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
    width: 120,
    height: 120,
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
