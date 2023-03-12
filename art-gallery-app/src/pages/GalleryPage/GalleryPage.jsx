import Topic from "../../components/Topic/Topic";
import Grid from "../../components/Grid/Grid";
import { useEffect } from "react";
import { useState } from "react";
import PictureCard from "../../components/PictureCard/PictureCard";
import data from "../../components/data/image_list.json";
import Container from "../../components/Container/Container";

function getImages() {
    return fetch("https://picsum.photos/v2/list").then((res) => res.json())
  }



const GalleryPage = () => {

    const [imageList, setImageList] = useState( [] );
    const [errMessage, setErrMessage] = useState("");
    
  
    useEffect(() => {
      getImages()
      .then((imageData) => setImageList(imageData))
      .catch((err) => setErrMessage("Something went wrong!"));
    }, []);

return <div>
    <Topic title={""} description={""}/>
    <Container>
    {errMessage && <h1>{errMessage}</h1>}
        {!errMessage &&
    <Grid columns= {3}>
    {imageList.map(({download_url, author, id})=> {
            return (<PictureCard src={download_url} alt ={author} key={author + id}/>)
          })}
    </Grid>}
    </Container>
</div>
}

export default GalleryPage;