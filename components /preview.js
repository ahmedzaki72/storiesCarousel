import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, TouchableOpacity, Image } from 'react-native';

const { width, height } = Dimensions.get("window");

class Preview extends Component {
    state = {
        carouseles: [
            { id: 1, image: "https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/france-v-germany-uefa-nations-league-a-5bca0ac66f0e5b6500000001.jpg" },
            { id: 2, image: "https://cdn.wallpapersafari.com/36/2/Yw0apb.jpg" },
            { id: 3, image: "https://cdn.soccerladuma.co.za/cms2/image_manager/uploads/News/500679/7/default.jpg" },
            { id: 4, image: "https://atgbcentral.com/data/out/132/5111937-football-players.jpg" },
            { id: 5, image: "https://lh5.googleusercontent.com/proxy/SmRL5MvmTxn-EwpDgDY8xaaq9sIJO1ObwL8LAXLfk7a0XgZbV8bwQxIbjPm8L6QCJmnHnhzMahqZ-QOUXQqBc7Sa2EgNsgmiPJMmCqcao3puzx5mcVUAkDpVeXO7LYcpQZTTmiHuEt8bJRrpHKE9fjKVql1s8jun8m4=s0-d" },
            { id: 6, image: "https://2.bp.blogspot.com/-B8_zWD0gvSI/WsCpM2EoUJI/AAAAAAAADUc/ryNUXcv4Ldg3XSQXysZ9lR5RuefcjpbKwCLcBGAs/s1600/1.JPG" },
            { id: 7, image: "https://usatthebiglead.files.wordpress.com/2015/12/gettyimages-499043080.jpg?w=1000&h=600&crop=1" }
        ],
        ready: false,
    }

    componentDidMount = () => {
        this.setState({ready : true})
    }
    render() {
        const { ready, carouseles } = this.state
        if (!ready) {
            return (
                <View style={styles.container1}>
                    <ActivityIndicator size="large" color="white" />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                {carouseles.map((item, index) => {
                    return (
                        <TouchableOpacity onPress={() => console.log('work')} key={index}   style={{ width: 100, height: 150 ,borderColor: 'white', borderWidth: 2 ,overflow: 'hidden' }}>
                            <Image
                                style={{ width: 100, height: 150}}
                                source={{ uri: item.image }}
                                resizeMode='cover'
                            />
                        </TouchableOpacity>
                    )
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        marginTop: 20,
        width: width,
        height: height,
        flexWrap : 'wrap'
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222222',
    },
});

export default Preview;
