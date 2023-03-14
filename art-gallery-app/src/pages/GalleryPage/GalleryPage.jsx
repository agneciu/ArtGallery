import Topic from "../../components/Topic/Topic";
import Grid from "../../components/Grid/Grid";
import { useEffect } from "react";
import { useState } from "react";
import PictureCard from "../../components/PictureCard/PictureCard";
import data from "../../components/data/image_list.json";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";


const GalleryPage = () => {

  
    const [errMessage, setErrMessage] = useState("");
    const [art, setArt] = useState();
  
    function getImages(address) {
      return fetch(address, {
        headers: {
          "X-Xapp-Token":
          "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2NDBhMmZiZWRjZDZlZTAwMGQ4NDdlNzEiLCJleHAiOjE2Nzg5OTM5ODMsImlhdCI6MTY3ODM4OTE4MywiYXVkIjoiNjQwYTJmYmVkY2Q2ZWUwMDBkODQ3ZTcxIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0MGEyZmJmNjE2MjVlMDAwYzYxMzYyMSJ9.TjdeOLAxWBE7Yoah4EczQ_bovIETTKy__VA1VrkISjE",
        },
      })
      .then((res) => res.json())
      .then((data)=>setArt(data)); 

    }

    useEffect(() => {
      getImages("https://api.artsy.net/api/artworks?total_count=1&size=6")
      .catch((err) => setErrMessage("Something went wrong!"));
    }, []);

    const onNextPage = () => {
      getImages(art._links.next?.href);
    }

return <div>
    <Topic title={""} description={""}/>
    <Container>
    {errMessage && <h1>{errMessage}</h1>}
        {!errMessage &&
    <Grid columns= {3}>
    {art?._embedded.artworks.map((artwork)=> {
            return (<PictureCard src={artwork._links.image.href.replace(
              "{image_version}",
              "medium"
            )} alt ={artwork.title} title={artwork.title} key={artwork.title + artwork.id}/>)
          })}
    </Grid>}
    <Button className="galleryPageBtn" label="Next" onClick={onNextPage}></Button>
    </Container>
</div>
}

export default GalleryPage;