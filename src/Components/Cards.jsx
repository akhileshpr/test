import React from "react";
import { Container } from "react-bootstrap";

function Cards() {
  return (
  <>
 
     
            <div className="row d-flex justify-content-evenly align-items-center mt-5" style={{height:'100%',width:'100%',padding:'10px'}}>
            
                  <div className="col-lg-3 d-flex justify-content-between align-items-center flex-column">
                    <img
                      src="https://i.postimg.cc/N0JSffdW/image.png"
                      alt=""
                      className="img-fluid "
                      style={{ height: "347px", width: "347px" }}
                    />
                    <div className="">
                        <p className="para1 mt-2">
                          Explore large, destructible environments where no two games are
                          ever the same.
                        </p>
                    </div>
                  </div>

                  <div className="col-lg-3 d-flex justify-content-between align-items-center flex-column">
                    <img
                      src="https://i.postimg.cc/Y0cXh4Yy/image.png"
                      alt=""
                      className="img-fluid"
                      style={{ height: "347px", width: "347px" }}
                    />
                   <div className="">
                        <p className="para1 mt-2">
                          Team up with friends by sprinting, climbing and smashing your way
                          to earn your Victory Royale
                        </p>
                   </div>
                  </div>
                  <div className="col-lg-3 d-flex justify-content-between align-items-center flex-column">
                    <img
                      src="https://i.postimg.cc/s2vKmPJN/image.png"
                      alt=""
                      className="img-fluid"
                      style={{ height: "347px", width: "347px" }}
                    />
                   <div className="">
                        <p className="para1 mt-2">
                        Discover even more ways to play across thousands of creator-made game genres
                        </p>
                   </div>
                  </div>
             
                
             
            </div>
      
  </>
  );
}

export default Cards;
