import React from "react";
import Image from "next/image";
import cardStyle from "./card1.module.scss";

const Card1 = () => {
  return (
    <div className={cardStyle.mainCard}>
      
        <div className={cardStyle.main}>
          <Image
            src="https://picsum.photos/id/287/250/300"
            alt="Mountains"
            width={500}
            height={500}
          />
          <figcaption>The Day</figcaption>
        </div>
        <div className={cardStyle.main}>
          <Image
            src="https://picsum.photos/id/475/250/300"
            alt="Mountains"
            width={300}
            height={300}
          />
          <figcaption>The Night</figcaption>
        </div>
      
    </div>
  );
};

export default Card1;
