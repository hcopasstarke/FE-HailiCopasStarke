import React, { Component } from "react";
import {
  Container,
  Menu,
  Sticky,
  Button
} from "semantic-ui-react";

import { Link } from "react-router-dom";

class NavHeader extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Sticky>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item
              as={Link}
              to="/"
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            >
              Follow Your Dreams
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/Login"
              name="login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            >
              <Button as="a" inverted>
                Log in
              </Button>
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/RegForm"
              name="regform"
              active={activeItem === "regform"}
              onClick={this.handleItemClick}
            >
              <Button as="a" inverted>
                Sign Up
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </Sticky>
    );
  }
}

export default NavHeader;