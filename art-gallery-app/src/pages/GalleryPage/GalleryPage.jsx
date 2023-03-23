import Topic from "../../components/Topic/Topic";
import Grid from "../../components/Grid/Grid";
import { useEffect } from "react";
import { useState } from "react";
import PictureCard from "../../components/PictureCard/PictureCard";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";


const GalleryPage = () => {

  
    const [errMessage, setErrMessage] = useState("");
    const [art, setArt] = useState();
    const [addMoreArt, setAddMoreArt] = useState([]); //an array to store/load additional art// setArt state could not be used, it delivers an error with an empty page
    const [loading, setLoading] = useState(false); //kaip pas Vytauta, to-do list'e, ta pati logika
    // const [page, setPage] = useState("https://api.artsy.net/api/artworks?total_count=1&size=6") not needed anymore
   
    function getImages(address) {
      return fetch(address, {
        headers: {
          "X-Xapp-Token":
          "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2NDBhMmZiZWRjZDZlZTAwMGQ4NDdlNzEiLCJleHAiOjE2Nzk3NjM0MjcsImlhdCI6MTY3OTE1ODYyNywiYXVkIjoiNjQwYTJmYmVkY2Q2ZWUwMDBkODQ3ZTcxIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0MTVlZDYzMTg2YTYwMDAwYzhhMzkyMCJ9.xwBMrzZuOVu5BEBILr56h_NIKZEbnOD_yJmSzrpS0Ho",
        },
      })
      .then((res) => res.json())
      .then((data)=>{
        setArt(data)
        setAddMoreArt([...addMoreArt, ...data._embedded.artworks])
       
      });
    }

    useEffect(() => {
      getImages("https://api.artsy.net/api/artworks?total_count=1&size=6")
      .catch((err) => setErrMessage("Something went wrong!"));
    }, []);

    // const onNextPage = () => {
    //   setLoading(true);
    //   getImages(art._links.next?.href);

    // }


    //await - pauses the execution of an asynchronous function until the Promise is resolved
    // when returning a Promise inside an async function, you don’t need to use await

    const onNextPage = () => {
      setLoading(true);
      getImages(art._links.next?.href)
      // setAddMoreArt([...addMoreArt, ...data._embedded.artworks]) needs to be moved, page crashes
      .catch ((err) => 
      // if i try to console.log things here - the loading breaks down, interesting
        setErrMessage("Something went wrong!")
      )
      setLoading(false);
      
    };

  // const onNextPage = async () => {
  //   setLoading(true);
  //   try{
  //     getImages(art._links.next?.href);
  //   } catch (_) {
  //     setErrMessage("Something went wrong!");
  //   }
  //   setLoading(false);
  // };

return <div>
    <Topic title={""} description={""}/>
    <Container>
    {errMessage && <h1>{errMessage}</h1>}
        {!errMessage && (loading ? <h2>Gallery is loading...</h2> :
    <Grid>
    {addMoreArt?.map((artwork)=> {
            return (<PictureCard src={artwork._links.image.href.replace(
              "{image_version}",
              "medium"
            )} alt ={artwork.title} title={artwork.title} key={artwork.title + artwork.id} id={artwork.id}/>)
          })}
    </Grid>)}
    <Button className="galleryPageBtn" label="Load more" onClick={onNextPage}></Button>
    </Container>
</div>
}

// we use addMoreArt to map instead of previously used art?._embedded.artworks to display art + extra laoded art

export default GalleryPage;