import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPowerbi,
  
  SiApachespark,
  SiMysql
  
} from "react-icons/si";
import {FaDatabase, FaFileExcel ,FaDocker, FaJenkins } from "react-icons/fa";


const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileExcel /> {/* Excel icon */}
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase /> {/* MySQL Workbench icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker /> {/* Docker icon */}
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaJenkins /> {/* Jenkins icon */}
      </Col>
      
      
    </Row>
  );
}

export default Toolstack;
