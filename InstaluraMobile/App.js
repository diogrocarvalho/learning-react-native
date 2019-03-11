/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from "react";
import {
  FlatList
} from "react-native";
import Post from "./components/Post";

export default class App extends Component {
  render() {

    const posts = [
      {id: 1, name: "Diogo"},
      {id: 2, name: "Tainá"},
      {id: 3, name: "Marcela"},
      {id: 4, name: "Thiago"}
    ];

    return (

        <FlatList
            renderItem={({item}) => (
                <Post post={item}/>
            )}
            data={posts}
            keyExtractor={(item, index) => 'list-item' + item.id + index}
        />

    );
  }
}
