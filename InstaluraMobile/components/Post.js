import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from "react-native";

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  photo: {
    width: width,
    height: width
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
    marginEnd: 5
  },
  likeButton: {
    width: 40,
    height: 40
  },
  footer: {
    margin: 10
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { post: this.props.post };
  }

  likeButtonPressed(){
    console.warn("IIIIIIIIIIIIIIU")
  }

  render() {
    const { post } = this.state;

    return (
      <View>
        <View style={styles.container}>
          <Image source={{ uri: post.urlPerfil }} style={styles.userPicture} />
          <Text>{post.loginUsuario}</Text>
        </View>
        <View>
          <Image source={{ uri: post.urlFoto }} style={styles.photo} />
        </View>
        <TouchableOpacity style={styles.footer} onPress={this.likeButtonPressed.bind(this)}>
          <Image source={{ uri: post.urlFoto }} style={styles.likeButton} />
        </TouchableOpacity>
      </View>
    );
  }
}
