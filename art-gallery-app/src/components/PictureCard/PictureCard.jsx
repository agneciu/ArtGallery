import styles from "./PictureCard.module.css";
import React from "react";

const PictureCard = ({src , alt}) => {
 return (
    <div>
  <div className={styles.root}>
    <img className={styles.image} src={src} alt={alt} />
  </div>
  <p className={styles.author}>{alt}</p>
  </div>
 )
}

export default PictureCard;