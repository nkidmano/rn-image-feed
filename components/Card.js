import { Image, StyleSheet, View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import AuthorRow from './AuthorRow';

export default class Card extends React.Component {
  state = {
    loading: true,
  };

  static propTypes = {
    fullname: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
    linkText: PropTypes.string,
    onPressLinkText: PropTypes.func,
  };

  static defaultProps = {
    linkText: '',
    onPressLinkText: () => {},
  };

  handleLoad = () => {
    this.setState({ loading: false });
  };

  render() {
    const { loading } = this.state;
    const { fullname, image, linkText, onPressLinkText } = this.props;

    return (
      <View>
        <AuthorRow
          fullname={fullname}
          linkText={linkText}
          onPressLinkText={onPressLinkText}
        />
        <View style={styles.image}>
          {loading && (
            <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} />
          )}
          <Image
            style={StyleSheet.absoluteFill}
            source={image}
            onLoad={this.handleLoad}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
});
