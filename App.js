import React from 'react';
import { StyleSheet,
         Text,
         View,
         Image,
         Button } from 'react-native';

import Card from './components/record';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      records : [
          {
            appName: "codewars",
            user: "mike",
            pass: "rza851"
          },
          {
            appName: "kolos",
            user: "konos",
            pass: "kanoni"
          }

      ], 
      record : {
        appName : "udemy",
        user : "rafael",
        pass : "rza851" 
      }
    }
  }

  pressed = () => {
    console.log(this.state.records[0].appName);
    console.log(this.state.records[0].user);
    console.log(this.state.records[0].pass);    
  }



  render() {





    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>--Password Manager--</Text>
      </View>
        <Image
          style={styles.headImage} 
          source={require('./assets/key.png')}
        />
        <Card />
        <Button title="blast" onPress={this.pressed.bind(this)}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    
  },
  headerText: {
    fontSize: 23,
  },
  headImage: {
    width: 50,
    height: 50,
  }
});
