import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Icone from 'react-native-vector-icons/Feather'

import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Container, Content, Text, Thumbnail, Header, Left, Right, Body } from 'native-base';
import CardComponent from '../CardComponent';

export default class HomeTab extends Component {

  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
      < Icon name='home' size={20} style={{
        color: tintColor
      }}
      />
    )
  }

  render() {
    return (
     <Container style={styles.container}>

      <Header androidStatusBarColor="#d1cece" style={{backgroundColor: '#fff', height: 46}}>
        <Left>
          <Icon name='camera' size={25} style={{ paddingLeft: 10, color: '#000'}}></Icon>
        </Left>
        <Body><Text style={{ left: 10, fontSize: 17, color: '#000'}}>Instagram</Text></Body>
        <Right><Icone name={'tv'} size={25} style={{ left: 30, color: '#000'}}></Icone></Right>
        <Right><Icon name='paper-plane' size={25} style={{ paddingRight: 10, color: '#000'}}></Icon></Right>
      </Header>
       <Content>

         <View style={{ height: 80}}>
           <View style={{ flex: 3}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: 'center',
                paddingStart:5,
                paddingEnd: 5,
              }}
            >
              <View>
                <Thumbnail
                  style={{marginHorizontal: 5, top: 0, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/me.jpg')} />
                  <Text style={{top: 5, fontSize: 10, left: 10}} note>Seu story</Text>
                </View>
                <View>
                  <Thumbnail
                  style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/stories/storie1.jpg')} />
                  <Text style={{top: 5, fontSize: 10, left: 10, color: '#000'}} note>alpinaweb</Text>
                </View>
                <View>
                  <Thumbnail
                  style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/stories/storie2.jpg')} />
                  <Text style={{top: 5, fontSize: 10, left: 10, color: '#000'}} note>tecmundo</Text>
                </View>
                <View>
                  <Thumbnail
                  style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/stories/storie3.jpg')} />
                  <Text style={{top: 5, fontSize: 10, left: 10, color: '#000'}} note>sandyliss</Text>
                </View>
                <View>
                  <Thumbnail
                  style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/stories/storie4.jpg')} />
                  <Text style={{top: 5, fontSize: 10, left: 5, color: '#000'}} note>messiasbls</Text>
                </View>
                <View>
                  <Thumbnail
                  style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/stories/storie5.jpg')} />
                  <Text style={{top: 5, fontSize: 10, left: 10, color: '#000'}} note>wesleysf</Text>
                </View>
                <View>
                  <Thumbnail
                  style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/stories/storie6.jpg')} />
                  <Text style={{top: 5, fontSize: 10, left: 10, color: '#000'}} note>mjoaquina</Text>
                </View>
                <View>
                  <Thumbnail
                  style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/stories/storie7.jpg')} />
                  <Text style={{top: 5, fontSize: 10, left: 10, color: '#000'}} note>eversonzoio</Text>
                </View>
                <View>
                  <Thumbnail
                  style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/stories/storie8.jpg')} />
                  <Text style={{top: 5, fontSize: 10, left: 10, color: '#000'}} note>ronaldinhoo</Text>
                </View>
                <View>
                  <Thumbnail
                  style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/stories/storie10.jpg')} />
                  <Text style={{top: 5, fontSize: 10, left: 10, color: '#000'}} note>lucasfredo</Text>
                </View>
                <View>
                  <Thumbnail
                  style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/stories/storie11.jpg')} />
                  <Text style={{top: 5, fontSize: 10, left: 10, color: '#000'}} note>jessicalm</Text>
                </View>
            </ScrollView>
           </View>
         </View>
         <CardComponent imageSource="1" likes="101" />
         <CardComponent imageSource="2" likes="78" />
         <CardComponent imageSource="3" likes="92" />
       </Content>
     </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  }
});
