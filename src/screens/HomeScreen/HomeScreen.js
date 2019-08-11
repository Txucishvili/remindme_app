import React from "react";
import axios from "axios/index";
import {Button, Dimensions, ScrollView, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import layoutControl from "../../Utils/variables/layout.variables";
import HeaderComponent from "../../components/header/HeaderComponent";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarLabel: 'Homessss',
    headerStyle: {
      backgroundColor: '#49beb7',
      height: layoutControl.header.height
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: layoutControl.header.fontSize,
    },
  };


  constructor(props) {
    super(props);
    this.state = {
      posts: [{title: 'hhh'}]
    }
  }

  getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      this.setState({
        posts: response.data
      });
      console.log(response.data.length);
    })
  };

  componentDidMount() {
    console.log(this.props.navigation);
  }

  render() {
    return (
      <View>
      <HeaderComponent
        style={styles.header}
        content={this.props.navigation.title}
      />
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 12, paddingTop: 12}}>
          {/* other code from before here */}
          {this.state.posts
            ? this.state.posts.map((item, key) => {
              return <TouchableOpacity key={key}><Text style={{padding: 15, fontSize: 24, backgroundColor: '#042f4b', borderRadius: 6, color: '#FFF', marginVertical: 3, marginHorizontal: 12, width: Dimensions.get('window').width - 12}}>{item.title}</Text></TouchableOpacity>
            })
            : null
          }
          <Button
            title="Load Data"
            onPress={() => this.getData()}
          />
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    width: Dimensions.get('window').width,
    height: 40
  }
});

export default HomeScreen;
