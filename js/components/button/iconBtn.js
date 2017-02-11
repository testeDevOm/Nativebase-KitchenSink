
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, H3 } from 'native-base';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';


const {
    popRoute,
  } = actions;

class IconBtn extends Component {  // eslint-disable-line


  static propTypes = {
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="arrow-back" />
          </Button>
          </Left>
          <Body>
            <Title>Icon Buttons</Title>
          </Body>
          <Right />

        </Header>

        <Content padder style={{ padding: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button iconLeft light style={styles.mb15}>
              <Icon active name="arrow-back" />
              <Text>Back</Text>
            </Button>
            <Button light style={styles.mb15}>
              <Icon active name="arrow-down" />
            </Button>
            <Button light style={styles.mb15}>
              <Icon active name="arrow-up" />
            </Button>
            <Button light iconRight style={styles.mb15}>
              <Text>Next</Text>
              <Icon active name="arrow-forward" />
            </Button>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Button iconLeft style={styles.mb15}>
              <Icon active name="home" />
              <Text>Home</Text>
            </Button>
            <Button iconLeft bordered style={{ marginBottom: 20, marginLeft: 10 }}>
              <Icon active name="briefcase" />
              <Text>Work</Text>
            </Button>
          </View>
          <Button iconLeft transparent style={styles.mb15}>
            <Icon active name="beer" />
            <Text>Pub</Text>
          </Button>
          <View style={{ flexDirection: 'row' }}>
            <Button iconLeft success style={styles.mb15}>
              <Icon active name="people" />
              <Text>Friends</Text>
            </Button>
            <Button iconLeft success bordered style={{ marginBottom: 20, marginLeft: 10 }}>
              <Icon active name="paw"/>
              <Text>Best Friends</Text>
            </Button>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Button iconLeft danger style={styles.mb15}>
              <Icon active name="close" />
              <Text>Remove</Text>
            </Button>
            <Button danger bordered style={{ marginBottom: 20, marginLeft: 10 }}>
              <Icon active name="trash"/>
            </Button>
            <Button danger transparent style={{ marginBottom: 20, marginLeft: 10 }}>
              <Icon active name="trash"/>
            </Button>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Button iconLeft dark style={styles.mb15}>
              <Icon active name="cog" />
              <Text>Tools</Text>
            </Button>
            <Button dark transparent style={{ marginBottom: 20, marginLeft: 10 }}>
              <Icon active name="cog"/>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(IconBtn);