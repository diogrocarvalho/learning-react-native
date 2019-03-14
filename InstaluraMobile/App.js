/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { FlatList } from "react-native";
import Post from "./components/Post";

export default class App extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }
  componentDidMount() {
    fetch("http://10.0.2.2:8080/api/public/fotos/rafael")
      .then(resp => resp.json())
      .then(json => this.setState({ posts: json }));
  }

  render() {
    console.log(this.state.posts)
    return (
      <FlatList
        renderItem={({ item }) => <Post post={item} />}
        data={this.state.posts}
        keyExtractor={(item, index) => "list-item" + item.id + index}
      />
    );
  }
}
