import React from "react";
import { Container } from "react-bootstrap";

function Section() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100%", width: "100%" }}
    >
      <Container>
       <div className="d-flex justify-content-between align-items-center " style={{height:'100%',width:'100%',padding:'10px'}}>
            <div className="">
              <h1 className="rating text-center" >5M</h1>
              <p className="para2">Daily User Engagements</p>
            </div>
            <div className="">
            
              <h1 className="rating">$500K</h1>
              <p className="para2">Revenue Surge for an Platform</p>
            </div>
            <div className="">
              <h1 className="rating">10X</h1>
              <p className="para2">ROAS on all our marketing campaigns</p>
            </div>
       </div>
      </Container>
    </div>
  );
}

export default Section;
