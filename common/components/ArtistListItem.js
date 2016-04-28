import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class ArtistListItem extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Image
            source={{uri: this.props.artist.picture.value}}
            style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.artistName}>{this.props.artist.humanLabel.value}</Text>
          <Text style={styles.artistCountry}>{this.props.artist.country}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 5,
  },
  rightContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 81,
    height: 81,
  },
  artistName: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  artistCountry: {
    textAlign: 'center',
  },
});