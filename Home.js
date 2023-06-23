import React from "react";
import myImage from "../images/internet.jpg";


function Home() {
  return (
    
    <div>
      <div
        className="container"
        style={{ textAlign: "center", color: "white" }}
      >
        <h1>
          <strong>Welcome to TECHVIO</strong>
        </h1>
      </div>
      <img
        src={myImage}
        alt="Internet"
        height={250}
        width={250}
        style={{ position: "absolute", right: "300px", top: "250px" }}
      />

      <div
        className="container"
        style={{
          position: "absolute",
          left: "300px",
          right: "500px",
          top: "250px",
          color: "white",
        }}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          voluptatibus
          <br /> culpa nulla pariatur reprehenderit impedit illo perferendis
          neque, atque mollitia
          <br />
          dignissimos voluptates cumque ipsam nihil sint repudiandae, sed
          consequuntur est?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit hic sit
          iusto error
          <br />
          Dolorem exercitationem recusandae fuga consequatur? Vel consectetur
          quisquam, ipsum amet
          <br />
          facilis veniam similique doloribus laboriosam corporis.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          perspiciatis provident
          <br />
          placeat cum ratione nemo nostrum! Deleniti iusto odit voluptatem.
          Veniam, quidem nemo
          <br />
          incidunt assumenda consequuntur iure.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          quibusdam quisquam s
          <br />
          eligendi consectetur suscipit, rem minima obcaecati doloremque
          repudiandae, optio esse
          <br />
          aliquid atque odio ea. Placeat, harum nihil?
        </p>
      </div>

      <div
        className="container"
        style={{ position: "absolute", left: "100px", top: "90px" }}
      >
        <div
          className="container"
          style={{ position: "absolute", left: "150px", top: "600px" }}
        >
          <div className="card" style={{ width: "18rem" }}>
            <img src={myImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div
          className="container"
          style={{ position: "absolute", left: "500px", top: "600px" }}
        >
          <div className="card" style={{ width: "18rem" }}>
            <img src={myImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{ position: "absolute", left: "850px", top: "600px" }}
        >
          <div className="card" style={{ width: "18rem" }}>
            <img src={myImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
