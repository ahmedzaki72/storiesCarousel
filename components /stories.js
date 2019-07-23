import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';



const { width, height } = Dimensions.get("window");

class Stories extends Component {
  state = {
    ready: false,
    images: [],
  }

  componentDidMount = () => {
    this.setState({ ready: true });
  }

  componentWillMount = () => {
    const data = this.props.navigation.state.params.image
    console.log(data)
    this.setState({ images: data });
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <ImageBackground
          style={{ width: width, height: height}}
          source={{ uri: item }}
        >
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.container1}>
            <Text style={{ color: "#fff", fontSize: 20 }}>X</Text>
          </TouchableOpacity>
          <Text style={{ textAlign: 'center', color: 'white', marginTop: height * 0.5, fontSize: 40, fontWeight: 'bold' }}>this is photo stories </Text>
        </ImageBackground>
      </View>
    );
  }
  render() {
    const { ready, images } = this.state
    if (!ready) {
      return (
        <View style={styles.container2}>
          <ActivityIndicator size="large" color="white" />
        </View>
      );
    }
    return (
      <Carousel
        ref={(c) => { this._carousel = c }}
        data={this.state.images}
        renderItem={this._renderItem.bind(this)}
        sliderWidth={width}
        itemWidth={width}
        lockScrollWhileSnapping={true}
        autoplay={true}
        autoplayDelay={1000}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  container1: {
    alignSelf: "flex-end",
    alignItems: 'center',
    width: 30,
    marginTop: 10,
    marginRight: 10
  },
  container2 : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
  }
});


export default Stories;