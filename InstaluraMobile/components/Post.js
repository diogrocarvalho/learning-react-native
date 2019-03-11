import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from "react-native";

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  photo: {
    width: width
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10
  },
  userPicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginStart: 5,
    marginEnd: 5,

  }
});

export default class App extends Component {
  render() {
    return (
        <View>
          <View style={styles.container}>
            <Image
                source={require("../assets/images/placeholder.png")}
                style={styles.userPicture}
            />
            <Text>{this.props.post.name}</Text>
          </View>
          <Image
              source={require("../assets/images/placeholder.png")}
              style={styles.photo}
          />
        </View>
    )
  }
}

