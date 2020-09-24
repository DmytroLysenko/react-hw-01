import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Table = styled.table`
  text-align: center;
  width: 60%;
  margin: 0 auto;
  background: #fff;
  border-collapse: collapse;
  border-radius: 5px;
  box-shadow: 0px 3px 3px 0px #808080;
`;
const Caption = styled.caption`
  text-align: right;
  padding: 5px;
  color: #808080;
  font-size: 0.75em;
  font-style: italic;
`;
const Thead = styled.thead`
  text-transform: uppercase;
  background-color: #4690ec;
  color: #fff;
`;
const Tbody = styled.tbody`
  text-transform: capitalize;
  color: #808080;
`;
const Tr = styled.tr`
  background-color: ${(props) => (props.accent ? "#ececec" : null)};
`;
const Th = styled.th`
  padding: 10px;
  :nth-of-type(1) {
    border-top-left-radius: 5px;
    border-right: 1px solid #fff;
  }
  :nth-last-of-type(1) {
    border-top-right-radius: 5px;
    border-left: 1px solid #fff;
  }
`;
const Td = styled.td`
  padding: 10px;
  :nth-of-type(1) {
    border-right: 1px solid #d3d3d3;
  }
  :nth-last-of-type(1) {
    border-left: 1px solid #d3d3d3;
  }
`;

const TransactionHystory = ({ items, name }) => {
  if (items.length === 0) {
    return <p>The hystory of transactions is clear</p>;
  }
  return (
    <Table>
      {name ? <Caption>{name}</Caption> : null}
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>
      <Tbody>
        {items.map((item, idx) => {
          const isAccent = (idx + 1) % 2 === 0 ? true : false;
          return (
            <Tr key={item.id} accent={isAccent}>
              <Td>{item.type}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.currency}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default TransactionHystory;

TransactionHystory.defaultProps = {
  name: "Hystory of transactions",
};

TransactionHystory.propTypes = {
  name: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
