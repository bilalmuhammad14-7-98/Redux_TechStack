import React, {Component} from 'react';
import {CardSection} from './common';
import {Text} from 'react-native';

class ListItem extends Component {
  render() {
    console.log(this.props.library, 'item data');
    const {titleStyle} = styles;
    return (
      <CardSection>
        <Text style={titleStyle}>
          {this.props.library.item.title} - {this.props.library.item.id}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default ListItem;
