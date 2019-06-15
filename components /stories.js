import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions , ActivityIndicator , ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get("window");

class Stories extends Component {
    state = {
        params: this.props.navigation.state.params,
        ready : false
      }

      componentDidMount = () => {
        this.setState({ready : true});
      }

      _renderItem({ item, index }) {
        return (
          <View style={styles. container}>
            <ImageBackground 
              style={{width : width , height : height}} 
              source={{uri : item.image}}
            >
            <Text style={{textAlign : 'center', color : 'white', marginTop : height * 0.5, fontSize : 40, fontWeight : 'bold' }}>this is photo stories </Text>
            </ImageBackground>
          </View>
        );
      }
      render() {
        const {ready} = this.state
        if (!ready) {
          return (
            <View style={styles.container1}>
              <ActivityIndicator size="large" color="white" />
            </View>
          );
        }
        return (
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.params}
            renderItem={this._renderItem}
            sliderWidth={width}
            itemWidth={width}
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
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#222222',
    },
  });

  
export default Stories;