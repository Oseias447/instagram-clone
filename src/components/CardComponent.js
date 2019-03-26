import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
} from 'native-base';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icone from 'react-native-vector-icons/Feather';

export default class CardComponent extends Component {

  render() {

    const images = {
      "1": require('../assets/posts/post1.jpg'),
      "2": require('../assets/posts/post2.jpg'),
      "3": require('../assets/posts/post3.jpg'),
    }

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail small source={require('../assets/me.jpg')} />
            <Body>
              <Text style={{color: '#000', fontSize: 12}}>oseiassilva</Text>
              <Text style={{color: '#000', fontSize: 8}}>Erechim, Rio Grande do Sul</Text>
            </Body>
          </Left>
          <Right style={{alignItems: 'flex-end'}}>
            <Icon name='options-vertical' style={{top: -1}}></Icon>
          </Right>
        </CardItem>
        <CardItem cardBody>
          <Image source={images[this.props.imageSource]}
          style={{height: 200, width: null, flex: 1}}
        />
        </CardItem>
        <CardItem style={{ height: 45}}>
          <Left>
            <Button transparent>
              <Icon name='heart' size={20} style={{color: 'black'}} />
            </Button>
            <Button transparent>
              <Icon name='bubbles' size={20} style={{color: 'black'}} />
            </Button>
            <Button transparent>
              <Icon name='paper-plane' size={20} style={{color: 'black'}} />
            </Button>
            <Button transparent>
              <Icone name='bookmark' size={20} style={{color: 'black', left: 150}} />
            </Button>
          </Left>
        </CardItem>

        <CardItem style={{ height: 20}}>
          <Text style={{color: 'black'}}>{this.props.likes} curtidas</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={{fontWeight: '900'}}>oseiassilva</Text>
            <Text>Caros amigos, a necessidade de renovação processual
            maximiza as possibilidades por conta das direções preferenciais
            no sentido do progresso. A certificação de metodologias que nos
            auxiliam a lidar com
            a complexidade dos estudos efetuados aponta
            para a melhoria dos paradigmas corporativos.</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Thumbnail small source={require('../assets/me.jpg')} />
            <Text style={{paddingLeft: 10}}>Adicione um comentário...</Text>
          </Left>
        </CardItem>
        <CardItem style={{top: -15}}>
          <Left>
            <Text style={{fontSize: 7}}>Há 13 MINUTOS</Text>
          </Left>
        </CardItem>
      </Card>
    );
  }
}
