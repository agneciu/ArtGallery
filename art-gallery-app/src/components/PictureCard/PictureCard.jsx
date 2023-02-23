import styles from "./PictureCard.css"

export const PictureCard = () => {
 return (
 <div className={styles.root}>
 <img className={styles.image} src={src} alt={alt}></img>
 </div>
 )
}