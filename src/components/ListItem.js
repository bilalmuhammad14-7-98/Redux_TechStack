import React, {Component} from 'react';
import {CardSection} from './common';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from 'react-native';
import * as actions from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component {
  constructor(props) {
    super(props);

    LayoutAnimation.spring();
  }

  renderDescription() {
    const {id, title, description} = this.props.library.item;
    const {expanded} = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{flex: 1}}>{description}</Text>
        </CardSection>
      );
    }
  }
  render() {
    // console.log(this.props.library, 'data');
    const {titleStyle} = styles;
    const {id, title} = this.props.library.item;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          console.log(this.props.library.item.id, 'iddddddddddddd');
          this.props.selectLibrary(id);
        }}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>

          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return {
    expanded,
  };
};

export default connect(mapStateToProps, actions)(ListItem);
