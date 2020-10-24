import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class Like extends Component {
  state = {};
  render() {
     return < FontAwesomeIcon icon={faHeart}/>;
    // return <FontAwesomeIcon icon={["fal", "coffee"]} />;
  }
}

export default Like;
