import styles from "./PictureCard.module.css";
import React from "react";
import { Link } from "react-router-dom";

const PictureCard = ({src , alt, id, title}) => {

  
// const redirectToArtwork = () => {
//   window.location.href = '/artwork'
// }

// doesn't work the way we need to, try to approach like we did in a group project with beauty products


 return (
  
  <Link to={id.toString()}>
      
  <div className={styles.root}>
    <img className={styles.image} src={src} alt={alt} title={title} />
  </div>
 
  <p className={styles.author}>{alt}</p>
  
  </Link>
 )
}

export default PictureCard;