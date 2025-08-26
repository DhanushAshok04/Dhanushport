import React from "react";
import ReactMarkdown from 'react-markdown'
import { Row } from "react-bootstrap";

const Leetcode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      
      <ReactMarkdown>
      ![LeetCode Stats](https://leetcode.com/u/DhanushAshokkumar/)
      </ReactMarkdown>
    </Row>
  );
}

export default Leetcode;
