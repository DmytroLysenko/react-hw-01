import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const VARS = {
  mainBGColor: "#fff",
  titleColor: "#212121",
  textColor: "#ffffff",
  radius: "5px",
};

const Section = styled.section`
  background: ${VARS.mainBGColor};
  width: 400px;
  margin: 0 auto;
  border-radius: ${VARS.radius};
`;

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  padding: 25px 0;
  margin: 0;
  color: ${VARS.titleColor};
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListItem = styled.li`
  width: 100%;
  padding: 0.75em 0;
  background-color: ${(props) => props.bgColor};
  box-shadow: inset 2px 0px 5px 0px rgba(0, 0, 0, 0.5);
  :nth-child(1) {
    box-shadow: none;
    border-bottom-left-radius: ${VARS.radius};
    border-top-left-radius: ${VARS.radius};
  }
  :nth-last-child(1) {
    border-bottom-right-radius: ${VARS.radius};
    border-top-right-radius: ${VARS.radius};
  }
`;

const Label = styled.span`
  text-align: center;
  display: block;
  font-size: 0.85em;
  font-weight: 700;
  margin-bottom: 0.75em;
  color: ${VARS.textColor};
`;

const Percentage = styled.span`
  text-align: center;
  display: block;
  font-size: 1.25em;
  color: ${VARS.textColor};
`;

const Statistics = (props) => {
  const { title, stats } = props;
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map((item) => {
          return (
            <ListItem key={item.id} bgColor={makeRandomColor()}>
              <Label>{item.label}</Label>
              <Percentage>{item.percentage}%</Percentage>
            </ListItem>
          );
        })}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  ).isRequired,
};

export default Statistics;

function makeRandomColor() {
  const color = `
  rgb(
    ${randomInteger(0, 255)},
    ${randomInteger(0, 255)}, 
    ${randomInteger(0, 255)}
    )`;
  return color;
}

function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
