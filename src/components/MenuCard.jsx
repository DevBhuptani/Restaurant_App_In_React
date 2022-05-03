import { Card } from "antd";
import React from "react";
import { Image } from "react-bootstrap";

const MenuCard = ({ menuData }) => {
  console.log(menuData);

  return (
    <>
      <section className="main-card--container">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                {/*key={id} == key={curElem.id}*/}
                <Card className="card">
                  <Card className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </Card>
                  <Image src={image} alt="images"/>
                  <span className="card-tag subtle">Order Now</span>
                </Card>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
