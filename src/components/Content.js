import React, { Component } from "react";

// import { Row, Col } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import contentData from "../utils/contentData";

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <div className="bottom-image">
          <img src="https://i.ibb.co/HdHmtS8/Screen-Shot-2022-07-13-at-5-02-36-PM.png" alt="Screen-Shot-2022-07-13-at-5-02-36-PM" border="0"></img>
        </div>
        {/* <Row className="d-flex justify-content-between">
          {contentData.map((col, i) => (
            <Col key={i} md={5} className="mb-4">
              <h6 className="mb-3">
                <a href={col.link}>
                  <FontAwesomeIcon icon="link" className="mr-2" />
                  {col.title}
                </a>
              </h6>
              <p>{col.description}</p>
            </Col>
          ))}
        </Row> */}
      </div>
    );
  }
}

export default Content;
