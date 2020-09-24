import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ListItem = styled.li`
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  :nth-last-of-type(1) {
    margin-bottom: 0;
  }
  :hover {
    box-shadow: 0px 2px 2px 0px rgba(255, 0, 0, 0.75);
  }
`;

const Status = styled.span`
  display: block;
  border-radius: 50%;
  margin: 0 10px;
  height: 10px;
  width: 10px;
  background-color: ${(props) => (props.isOnline ? "#00ff00" : "#ff0000")};
`;

const Avatar = styled.img`
  height: auto;
  width: 48px;
  display: block;
  border-radius: 10px;
`;

const Name = styled.p`
  margin-left: 10px;
  font-weight: 700;
  color: #212121;
`;

const FriendListItem = (props) => {
  const { avatar, name, isOnline } = props;
  return (
    <ListItem>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </ListItem>
  );
};

export default FriendListItem;

FriendListItem.defaultProps = {
  avatar:
    "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png",
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
