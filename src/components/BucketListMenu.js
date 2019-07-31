import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

const createLabel = (iconName, labelText) => (
  <span>
    <Icon name={iconName} />
    {labelText}
  </span>
);

// const homeLabel = createLabel("home", "Home");
const bucketList = createLabel("home", "Your Bucket List");
const completedItems = createLabel("users", "Completed Items");
const newLabel = createLabel("plus square", "New Item");

const panes = [
  //   {
  //     menuItem: <Menu.Item key="home" as={Nav} to={`/`} content={homeLabel} />
  //   },
  {
    menuItem: (
      <Menu.Item key="list" as={Nav} to={`/active`} content={bucketList} />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="completed"
        as={Nav}
        to={`/completed`}
        content={completedItems}
      />
    )
  },
  {
    menuItem: (
      <Menu.Item key="new-item" as={Nav} to={`/new`} content={newLabel} />
    )
  }
];

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />;

export default TabNav;
