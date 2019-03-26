import React, { Component } from 'react';
import Icone from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialDesign from 'react-native-vector-icons/MaterialCommunityIcons'

import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { Icon, Container, Content, Text, Thumbnail, Header, Left, Right, Body, CardItem, Button } from 'native-base';



var images = [
  require('../../assets/public/img1.webp.jpg'),
  require('../../assets/public/img2.webp.jpg'),
  require('../../assets/public/img3.webp.jpg'),
  require('../../assets/public/img4.webp.jpg'),
  require('../../assets/public/img5.webp.jpg'),
  require('../../assets/public/img6.webp.jpg'),
  require('../../assets/public/img7.webp.jpg'),
  require('../../assets/public/img8.webp.jpg'),
  require('../../assets/public/img9.webp.jpg'),
  require('../../assets/public/img10.webp.jpg'),
]

var { width, height } = Dimensions.get('window');

export default class ProfileTab extends Component {

  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
      < Icon name='person' style={{
        color: tintColor
      }} />
    )
  }
  constructor(props) {
    super(props)

    this.state = {
      activeIndex:0
    }
  }

  segmentClicked = (index) => {

    this.setState({
      activeIndex: index
    })
  }


  renderSectionOne = () => {

    return images.map((image, index) => {

      return(
        <View key={index} style={[ {width:(width)/3}, {height:(width)/
        3},{ marginBottom:2},
          index % 3 !==0 ? { paddingLeft: 2}:{ paddingLeft: 0 }
        ]}>
          <Image style={{ flex: 1, width: undefined, height: undefined}}

          source={image}
          />
        </View>
      )
    })
  }

  renderSection = () => {

    if(this.state.activeIndex == 0)
    {
      return(
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionOne()}
        </View>
      )
    }
  }
  render() {
    return (
      <Container>
        <Header androidStatusBarColor="#d1cece" style={{backgroundColor: '#fff', height: 46}}>
        <Body><Text style={{ left: 10, fontSize: 17, color: '#000'}}>oseiassilva</Text></Body>
        <Left style={{right: 25, top: -2}}>
          <FontAwesome name='sort-down'></FontAwesome>
        </Left>
        <Right>
          <FontAwesome name='history' size={25} style={{color: '#000', right: 10 }}></FontAwesome>
          <Icone name='menu' size={25} style={{color: '#000'}}></Icone>
        </Right>
        </Header>
          <Content>
            <View>
              <View style={{ flexDirection: 'row'}}>
                <View style={{flex:1, marginTop: 20, alignItems: 'center' }}>
                  <Image source={require('../../assets/me.jpg')}
                    style={{ width: 75, height:75, borderRadius: 37.5
                    }} />
                    <FontAwesome backgroundColor= 'transparent' name='plus-circle' size={22} style={{left: 30, marginTop: -20, color: '#1e90ff'}} />
                </View>
                <View style={{ flex:3 }}>
                   <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                      <View style={{ alignItems: 'center'}}>
                        <Text>50</Text>
                        <Text style={{ fontSize: 10, color: 'grey'}}>
                        publica...
                        </Text>
                      </View>
                      <View style={{ alignItems: 'center'}}>
                        <Text>600</Text>
                        <Text style={{ fontSize: 10, color: 'grey'}}>
                        seguid...
                        </Text>
                      </View>
                      <View style={{ alignItems: 'center'}}>
                        <Text>900</Text>
                        <Text style={{ fontSize: 10, color: 'grey'}}>
                        seguind...
                        </Text>
                      </View>
                   </View>

                   <View style={{ flexDirection: 'row', paddingTop: 10}}>

                    <Button bordered dark style={{ flex: 1, height: 30, borderColor: 'grey',
                    marginRight: 25, marginLeft: 30, justifyContent: 'center'
                    }}
                    >
                      <Text style={{ textTransform: 'capitalize'}}>{'Editar Perfil'}</Text>
                    </Button>
                   </View>
                </View>
              </View>

              <View style={{ paddingVertical: 10, paddingHorizontal: 10}}>
                <Text style={{ fontWeight: 'bold'}}>Oséias</Text>
                <Text>Erechim - RS</Text>
                <Text>email: oseiass.net@gmail.com</Text>
              </View>
            </View>

            <View>
              <View style={{ flexDirection: 'row', justifyContent:
              'space-around', borderTopWidth: 1}}>
                <TouchableOpacity
                  transparent
                  onPress={() => this.segmentClicked(0)}
                  active={this.state.activeIndex == 0}
                  style={{marginTop: 2}}
                >
                  <MaterialDesign name='grid' size={25}
                    style={[ this.state.activeIndex == 0 ? {} : {
                    color: '#000'}]}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  transparent
                  transparent
                  onPress={() => this.segmentClicked(1)}
                  active={this.state.activeIndex == 1}
                >
                  <MaterialDesign name="crop-square" size={30}
                    style={[ this.state.activeIndex == 1 ? {} : {
                    color: '#000'}]}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  transparent
                  onPress={() => this.segmentClicked(2)}
                  active={this.state.activeIndex == 2}
                  style={{marginTop: 3}}
                >
                  <Icone name='user' size={23}
                    style={[ this.state.activeIndex == 1 ? {} : {
                    color: '#000'}]}
                  />
                </TouchableOpacity>
              </View>

              { this.renderSection()}
            </View>
          </Content>
      </Container>
    );
  }
}

