import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem/FriendListItem";

const FriendListComponent = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  width: 50%;
`;

const FriendList = ({ friends }) => {
  return (
    <FriendListComponent>
      {friends.map((friend) => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        );
      })}
    </FriendListComponent>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
