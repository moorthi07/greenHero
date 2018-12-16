import * as React from 'react';
import { Text, View,Image, TouchableOpacity,FlatList, Button, StyleSheet, ListView } from 'react-native';
import { Constants ,WebBrowser} from 'expo';
 
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
     
    "users": 
        [
            {
                "name": "Proxima Midnight",
                "email": "proxima@appdividend.com"
            },
            {
                "name": "Ebony Maw",
                "email": "ebony@appdividend.com" 
            },
            {
                "name": "Black Dwarf",
                "email": "dwarf@appdividend.com"
            },
            {
                "name": "Mad Titan",
                "email": "thanos@appdividend.com"
            },
            {
                "name": "Supergiant",
                "email": "supergiant@appdividend.com"
            },
            {
                "name": "Loki",
                "email": "loki@appdividend.com"
            },
            {
                "name": "corvus",
                "email": "corvus@appdividend.com"
            },
            {
                "name": "Proxima Midnight",
                "email": "proxima1@appdividend.com"
            },
            {
                "name": "Ebony Maw",
                "email": "ebony1@appdividend.com"
            },
            {
                "name": "Black Dwarf",
                "email": "dwarf1@appdividend.com"
            },
            {
                "name": "Mad Titan",
                "email": "thanos1@appdividend.com"
            },
            {
                "name": "Supergiant",
                "email": "supergiant1@appdividend.com"
            },
            {
                "name": "Loki",
                "email": "loki1@appdividend.com"
            },
            {
                "name": "corvus",
                "email": "corvus1@appdividend.com"
            }
        ]
 
    };
  }
  


  _handleNamePress = () => {
     
    
    WebBrowser.openBrowserAsync(
      'https://www.google.com/maps/dir/?api=1&origin=153+Goularte+Way&destination=DCP+Alum+Rock+High+School'+(travelmode?('&travelmode='+travelmode):null)
    );
  };

   alertItemName = (item) => {
      alert(item.name)
   }
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.h2text}>
          CarPool Routes
        </Text>
          <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatview}>
            <Text onPress = { this. _handleNamePress }  style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>Stops: {item.email}</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
             <Button style={styles.btn} title="View" onPress = { this.onButtonPress } />
              <Button style={styles.btn} title="Add Stop" onPress = { this.onButtonPress } />
              </View>
              <Text style={styles.email}>Available</Text>
               <TouchableOpacity onPress={()=>this._handleHelpPress('walking')}>
           
               </TouchableOpacity>
          </View>
          }
          keyExtractor={item => item.email}
        />
      </View>
    );
    //  return (
          // <Image
          //     source={require('../assets/images/skate.png')}
          //     style={styles.flatview}
          //     />
    //    <View>
    //         {
    //            this.state.names.map((item, index) => (
    //               <View
    //                  key = {item.id}
    //                  style = {styles.container}
    //                  onPress = {() => this.alertItemName(item)}>
    //                  <Text  style = {styles.text}>
    //                     {item.name}
    //                  </Text>
    //                  <Text style = {styles.text}>
    //                    Change code ddin the editor and watch it change on your phone! Save to get a shareable url.
    //                  </Text>
    //                  <Text style = {styles.text}>
    //                     {item.name}
    //                  </Text>
                   
    //               </View>
    //            ))
    //         }
    //      </View>
    // );
    
    // return (

    //   <View style={styles.container}>
    //     <Text style={styles.paragraph}>
    //       Change code ddin the editor and watch it change on your phone! Save to get a shareable url.
    //     </Text>
        // <Card>
        //   <AssetExample />
        // </Card>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  email: {
    color: 'red'
  },
  btn:{
    backgroundColor: 'red',
  }
});
