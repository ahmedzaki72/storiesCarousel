import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, TouchableOpacity, Image} from 'react-native';


const { width, height } = Dimensions.get("window");

class Preview extends Component {
    state = {
        carouseles: [
            { id: 1, image: ["https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/france-v-germany-uefa-nations-league-a-5bca0ac66f0e5b6500000001.jpg","https://e2.365dm.com/18/02/768x432/skysports-ibrahimovic-manchester-united-la-galaxy_4226515.jpg?20180214171341","https://cdn.newsapi.com.au/image/v1/87f4ee11f4e87ef70e33338ec91bf15e"] },
            { id: 2, image: ["https://cdn.wallpapersafari.com/36/2/Yw0apb.jpg", "http://www.football-observatory.com/IMG/sites/b5wp/2017/209/en/images/wp209.jpg?crc=506385515","https://cdn.images.express.co.uk/img/dynamic/galleries/x701/294673.jpg"] },
            { id: 3, image: ["https://cdn.soccerladuma.co.za/cms2/image_manager/uploads/News/500679/7/default.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfV72lPQ6afp5EXM4wcACVbZgm4kjID_uSYS1hv4JB5GpX05_t","https://www.watchmojo.com//uploads/thumbs720/SP-S-Top10-Football-Players-480i60.jpg"] },
            { id: 4, image: ["https://atgbcentral.com/data/out/132/5111937-football-players.jpg", "https://www.essentiallysports.com/wp-content/uploads/2017/05/Cristiano-Ronaldo-Top-10-Richest-Football-Players-in-The-World-2017.jpg", "http://fcnaija.com/public/images/f90dbf0d5983ffa5ec9ccc28b79159c4.jpg"] },
            { id: 5, image: ["https://lh5.googleusercontent.com/proxy/SmRL5MvmTxn-EwpDgDY8xaaq9sIJO1ObwL8LAXLfk7a0XgZbV8bwQxIbjPm8L6QCJmnHnhzMahqZ-QOUXQqBc7Sa2EgNsgmiPJMmCqcao3puzx5mcVUAkDpVeXO7LYcpQZTTmiHuEt8bJRrpHKE9fjKVql1s8jun8m4=s0-d","http://im.rediff.com/sports/2018/aug/08neymar1.jpg","https://i.pinimg.com/236x/43/ba/38/43ba3832b8b941f51c080c9c619024af--football-photos-neymar-jr.jpg"] },
            { id: 6, image: ["https://2.bp.blogspot.com/-B8_zWD0gvSI/WsCpM2EoUJI/AAAAAAAADUc/ryNUXcv4Ldg3XSQXysZ9lR5RuefcjpbKwCLcBGAs/s1600/1.JPG", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHP8OxNdSbDuHb1HQWrElRMG45bFv15WXsnljOd0LevYYsATDgPQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIkUGuBlq0ZqqbljRYzXlJdkmENQ2U9Z8Izsd5aUpzbQH_G0yB"] },
            { id: 7, image: ["https://usatthebiglead.files.wordpress.com/2015/12/gettyimages-499043080.jpg?w=1000&h=600&crop=1", "https://fcbarcelona-static-files.s3.amazonaws.com/fcbarcelona/photo/2018/09/21/3461628c-e62c-4570-8996-1e7592ee55fa/39537642.jpg","https://balkanweb.com/wp-content/uploads/2016/12/1265104-27293699-2560-1440.jpg"] }
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
                        <TouchableOpacity onPress={() =>this.props.navigation.navigate('stories' , {id :item.id , image : item.image})} key={index}   style={{ width: 100, height: 150 ,borderColor: 'white', borderWidth: 2 ,overflow: 'hidden' }}>
                            <Image
                                style={{ width: 100, height: 150}}
                                source={{ uri: item.image[0]}}
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
