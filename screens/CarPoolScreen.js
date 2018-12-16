// https://snack.expo.io/SkcXG97g4
import * as React from 'react';
import { Text, View,Image, TouchableOpacity,FlatList, Button, StyleSheet, ListView } from 'react-native';
import { Constants ,WebBrowser} from 'expo';


export default class App extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
     
    "users": 
 [
  {
    "_id": "5c1606965ece172c7ede51a7",
    "index": 0,
    "guid": "69ccff94-3b3e-4454-8a65-e84189a39a77",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "routename": {
      "start": "Harbor Court",
      "cross": "Hendrickson Street"
    },
    "stops": [
      {
        "address": "222 Cedar Street, Chestnut, Utah, 5276"
      },
      {
        "address": "763 Scholes Street, Cucumber, District Of Columbia, 9031"
      }
    ],
    "seats": 3,
    "rank": 2,
    "driver": "Mack Spence",
    "email": "mack spence.mack spence@undefined.io",
    "phone": "+1 (855) 417-3857",
    "registered": "Sunday, December 21, 2014 8:45 PM",
    "routedata": [
      {
        "latitude": "76.940165",
        "longitude": "26.28873"
      }
    ],
    "tags": [
      "elit",
      "nisi",
      "eiusmod",
      "amet",
      "occaecat"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Cash Porter"
      },
      {
        "id": 1,
        "name": "Jolene Craft"
      },
      {
        "id": 2,
        "name": "Chapman Larson"
      }
    ],
    "greeting": "Hello, Mack Spence! You have 5 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5c16069666618874bb52022b",
    "index": 1,
    "guid": "7a7ad07f-32f8-4112-82e6-ee8c80e83421",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "routename": {
      "start": "Glen Street",
      "cross": "Estate Road"
    },
    "stops": [],
    "seats": 3,
    "rank": 4,
    "driver": "Faith Conner",
    "email": "faith conner.faith conner@undefined.ca",
    "phone": "+1 (896) 452-2164",
    "registered": "Monday, December 26, 2016 8:13 PM",
    "routedata": [
      {
        "latitude": "-59.76036",
        "longitude": "136.691136"
      }
    ],
    "tags": [
      "deserunt",
      "occaecat",
      "minim",
      "non",
      "nulla"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Billie Duffy"
      }
    ],
    "greeting": "Hello, Faith Conner! You have 10 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5c160696bf60837edba66f13",
    "index": 2,
    "guid": "a66d776d-7e90-4d13-bffd-60f997ed6e59",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "routename": {
      "start": "Stryker Street",
      "cross": "Newel Street"
    },
    "stops": [
      {
        "address": "915 Morgan Avenue, Waukeenah, Alaska, 7962"
      },
      {
        "address": "271 Overbaugh Place, Savannah, Guam, 8135"
      },
      {
        "address": "397 Fiske Place, Rivers, Puerto Rico, 6228"
      }
    ],
    "seats": 4,
    "rank": 2,
    "driver": "Fern Bernard",
    "email": "fern bernard.fern bernard@undefined.us",
    "phone": "+1 (893) 402-3350",
    "registered": "Sunday, February 23, 2014 6:11 AM",
    "routedata": [
      {
        "latitude": "79.181374",
        "longitude": "88.435404"
      }
    ],
    "tags": [
      "excepteur",
      "id",
      "elit",
      "cillum",
      "aliqua"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Dawson Abbott"
      },
      {
        "id": 1,
        "name": "Dena Cooper"
      },
      {
        "id": 2,
        "name": "Cotton Barlow"
      }
    ],
    "greeting": "Hello, Fern Bernard! You have 7 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5c1606966a43a1638d8b60fb",
    "index": 3,
    "guid": "e0418e37-f794-482f-9668-7c166f5e41f3",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "routename": {
      "start": "Vermont Court",
      "cross": "Oriental Court"
    },
    "stops": [
      {
        "address": "925 Lois Avenue, Ribera, West Virginia, 7058"
      },
      {
        "address": "249 Schweikerts Walk, Idledale, South Carolina, 4229"
      },
      {
        "address": "589 Rochester Avenue, Inkerman, California, 175"
      }
    ],
    "seats": 3,
    "rank": 2,
    "driver": "Gentry Torres",
    "email": "gentry torres.gentry torres@undefined.biz",
    "phone": "+1 (984) 493-3792",
    "registered": "Friday, October 27, 2017 12:16 AM",
    "routedata": [
      {
        "latitude": "23.064032",
        "longitude": "-45.540155"
      }
    ],
    "tags": [
      "commodo",
      "aliquip",
      "consequat",
      "enim",
      "et"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Munoz Hendrix"
      },
      {
        "id": 1,
        "name": "Brooke Gonzales"
      },
      {
        "id": 2,
        "name": "Shelton Franco"
      }
    ],
    "greeting": "Hello, Gentry Torres! You have 9 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5c160696a505f0263f829c29",
    "index": 4,
    "guid": "4d6650e2-61c4-43fe-bfd9-3508b6f85193",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "routename": {
      "start": "Waldorf Court",
      "cross": "Lexington Avenue"
    },
    "stops": [
      {
        "address": "311 Lombardy Street, Templeton, Hawaii, 7995"
      },
      {
        "address": "848 Hastings Street, Sisquoc, Missouri, 1591"
      },
      {
        "address": "762 Lancaster Avenue, Oretta, Vermont, 1416"
      }
    ],
    "seats": 3,
    "rank": 1,
    "driver": "Newton Brennan",
    "email": "newton brennan.newton brennan@undefined.me",
    "phone": "+1 (899) 476-2042",
    "registered": "Thursday, October 6, 2016 10:39 PM",
    "routedata": [
      {
        "latitude": "-14.802793",
        "longitude": "-139.97948"
      }
    ],
    "tags": [
      "consectetur",
      "laboris",
      "laboris",
      "et",
      "exercitation"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Dominique Mcneil"
      },
      {
        "id": 1,
        "name": "Blanchard Dudley"
      },
      {
        "id": 2,
        "name": "Martinez Mccray"
      },
      {
        "id": 3,
        "name": "Garrett Briggs"
      },
      {
        "id": 4,
        "name": "Hill Hall"
      }
    ],
    "greeting": "Hello, Newton Brennan! You have 5 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5c160696ac382f65df3a86c4",
    "index": 5,
    "guid": "281e196c-5044-4112-a553-041f7af4ca90",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "routename": {
      "start": "Lake Street",
      "cross": "Crown Street"
    },
    "stops": [
      {
        "address": "284 Baughman Place, Cartwright, Nebraska, 2653"
      },
      {
        "address": "362 Emmons Avenue, Bodega, Idaho, 991"
      },
      {
        "address": "750 Fanchon Place, Jugtown, Northern Mariana Islands, 5160"
      },
      {
        "address": "192 Hazel Court, Orason, Kentucky, 5649"
      },
      {
        "address": "499 Delmonico Place, Guilford, Minnesota, 1872"
      }
    ],
    "seats": 5,
    "rank": 0,
    "driver": "Krystal Fletcher",
    "email": "krystal fletcher.krystal fletcher@undefined.biz",
    "phone": "+1 (827) 450-2779",
    "registered": "Saturday, September 1, 2018 5:06 AM",
    "routedata": [
      {
        "latitude": "34.64285",
        "longitude": "154.130552"
      }
    ],
    "tags": [
      "laborum",
      "eiusmod",
      "ad",
      "Lorem",
      "aliquip"
    ],
    "friends": [],
    "greeting": "Hello, Krystal Fletcher! You have 8 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5c160696c4bfa7a23e750168",
    "index": 6,
    "guid": "468ab3ec-a186-434d-827e-ae821d378fe1",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "routename": {
      "start": "Moore Place",
      "cross": "Herkimer Street"
    },
    "stops": [
      {
        "address": "352 Gerritsen Avenue, Elliston, New York, 5068"
      },
      {
        "address": "226 Cook Street, Abiquiu, Massachusetts, 7057"
      },
      {
        "address": "610 Sedgwick Place, Blodgett, Oregon, 7850"
      }
    ],
    "seats": 2,
    "rank": 5,
    "driver": "Lora Holland",
    "email": "lora holland.lora holland@undefined.name",
    "phone": "+1 (853) 545-2160",
    "registered": "Friday, January 24, 2014 2:44 AM",
    "routedata": [
      {
        "latitude": "-89.864734",
        "longitude": "-6.364968"
      }
    ],
    "tags": [
      "nisi",
      "id",
      "officia",
      "eu",
      "nulla"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Audra Horne"
      },
      {
        "id": 1,
        "name": "Alba Walls"
      },
      {
        "id": 2,
        "name": "Connie Evans"
      },
      {
        "id": 3,
        "name": "Pearl Hudson"
      },
      {
        "id": 4,
        "name": "Keri Ware"
      }
    ],
    "greeting": "Hello, Lora Holland! You have 6 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5c160696b88c1f5599dddd15",
    "index": 7,
    "guid": "f697a9e6-a41b-4004-b31d-709e8287851b",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "routename": {
      "start": "Huntington Street",
      "cross": "Campus Road"
    },
    "stops": [],
    "seats": 3,
    "rank": 4,
    "driver": "Joanna Johnson",
    "email": "joanna johnson.joanna johnson@undefined.info",
    "phone": "+1 (998) 401-2374",
    "registered": "Monday, October 13, 2014 9:09 PM",
    "routedata": [
      {
        "latitude": "11.654897",
        "longitude": "-126.002704"
      }
    ],
    "tags": [
      "dolor",
      "excepteur",
      "elit",
      "nulla",
      "cupidatat"
    ],
    "friends": [],
    "greeting": "Hello, Joanna Johnson! You have 6 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5c160696e410853f596cf18e",
    "index": 8,
    "guid": "53701b72-f9b9-4d6c-8a1d-d4dcbc71b71b",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "routename": {
      "start": "Royce Place",
      "cross": "Banker Street"
    },
    "stops": [
      {
        "address": "573 Taaffe Place, Herlong, Federated States Of Micronesia, 7358"
      },
      {
        "address": "298 Whitwell Place, Hobucken, Connecticut, 1283"
      },
      {
        "address": "500 Huron Street, Kapowsin, Alabama, 7590"
      },
      {
        "address": "436 Clove Road, Day, Wyoming, 4815"
      }
    ],
    "seats": 4,
    "rank": 5,
    "driver": "Iva Andrews",
    "email": "iva andrews.iva andrews@undefined.co.uk",
    "phone": "+1 (894) 437-2003",
    "registered": "Monday, September 4, 2017 5:10 PM",
    "routedata": [
      {
        "latitude": "85.11094",
        "longitude": "138.374537"
      }
    ],
    "tags": [
      "veniam",
      "incididunt",
      "mollit",
      "labore",
      "adipisicing"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Oneal Key"
      },
      {
        "id": 1,
        "name": "Erickson Moreno"
      },
      {
        "id": 2,
        "name": "Latasha Forbes"
      }
    ],
    "greeting": "Hello, Iva Andrews! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  }
]
 
    };
  }
  


  _handleNamePress = () => {
     
    
    WebBrowser.openBrowserAsync(
      'https://www.google.com/maps/dir/?api=1&origin=153+Goularte+Way&destination=DCP+Alum+Rock+High+School' 
    );
  };

   alertItemName = (item) => {
      alert(item.routename.start +"-" + item.routename.cross, item.driver,item.isActive)
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
            <Text onPress = { this. _handleNamePress }  style={styles.name}>{item.routename.start} - {item.routename.cross}</Text>
             <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={styles.email}>Stops: {item.stops.length}</Text>
            <Text style={styles.email}>seats: {item.seats}</Text>
            <Text style={styles.email}>Available: {(item.isActive) ? "Yes" : "No"}</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
             <Button  style={styles.btn} title="View" onPress = { this. onPress = () => this.alertItemName(item)}  />
              <Button style={styles.btn} title="Join" onPress = { this.onButtonPress } />
              </View> 
               <TouchableOpacity onPress={()=>this._handleHelpPress('walking')}>
           
               </TouchableOpacity>
          </View>
          }
          keyExtractor={item => item.email}
        />
      </View>
    );
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10, 
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontSize: 18
  },
  email: {
    color: 'red',
    paddingTop: 5, 
  },
  btn:{
    color:"#90A4AE",
    backgroundColor: 'red',
  }
});

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
