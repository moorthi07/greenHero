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


Badge = (props) => {
     let params = props.params;
     if (params.hasOwnProperty('pointsWon')) {
       
       return(
       <View  style={{alignItems:'center', justifyContent: 'center', backgroundColor:'green', margin:10, color:'blue',flexWrap: 'wrap', borderRadius: 10,padding:5}}>
          <View style={{flexDirection:'row',flexWrap: 'wrap'}}>
            <Text style={{fontSize:20,color:'white',flexWrap: 'wrap', fontWeight:'bold'}}>
            Congratulations, you just won{' '}
            </Text>
            <View style={{flexDirection:'row'}}>
            <Image
                source={require('../assets/images/coin.png')}
                style={{width:30, height:30}}
              />
            <Text style={{fontSize:20,color:'white', fontWeight:'bold'}}>
             {params.hasOwnProperty('pointsWon')?params.pointsWon:''} {'\n'}
            </Text>
            
             </View>
          <Text style={{fontSize:20,color:'white',flexWrap: 'wrap', fontWeight:'bold'}}>
          by commuting through {}
          </Text>
          <Text style={{fontSize:20,color:'red',flexWrap: 'wrap', fontWeight:'bold'}}>
            {' '+params.hasOwnProperty('travelmode')?params.travelmode:''}
          </Text>
          <Text style={{fontSize:20,color:'white',flexWrap: 'wrap', fontWeight:'bold'}}>
          !
          </Text>
          </View>
          </View>);
     }
     else return (null);
  }

export default class StatusScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  constructor(props) {
    super(props);
    this.state = {value:8200, travelmode: null}
    if(!this.props.navigation.state.params)
    this.props.navigation.state.params = {value: 8200, travelmode: 0, pointsWon: 0}
  }
  
  componentDidMount() {
    
    let params = this.props.navigation.state.params;
    if(this.state.value===(params.hasOwnProperty('value')?params.value:null))
      return;
    
    this.setState({value:params.hasOwnProperty('value')?params.value:0, travelmode: params.hasOwnProperty('travelmode')?params.travelmode:''});
    console.log('eeee');
    
  }
  
  componentDidUpdate() {
   let params = this.props.navigation.state.params;
    if(this.state.value===(params.hasOwnProperty('value')?params.value:null))
      return;
    
    this.setState({value:params.hasOwnProperty('value')?params.value:0, travelmode: params.hasOwnProperty('travelmode')?params.travelmode:''});
    console.log('eeee');
  }
  
  
  
  
  render() {
    
    let params = this.props.navigation.state.params;
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
          <Badge params={params}/>
            
          
          
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
  
  _changeScore = (travelmode) => {
    let updateValue = travelmode==='bicyling'?60:travelmode==='walking'?50:travelmode==='transit'?30:10;
    this.setState(prevState =>
    {
      {value: prev.state.value}
    });
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
