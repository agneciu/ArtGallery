import './HomePage.css'
import Topic from '../../Topic/Topic'
import Button from '../../Button/Button'
import { useState } from "react";




const HomePage = () => {

const [titleText, setTitleText] = useState();
const [descriptionText, setDescriptionText] = useState();
const [buttonText, setNewButtonText] = useState("Read more");


const  newButtonText = "Less";
const newTitleText = "What is Modern Art Museum?";
const newDescriptionText = "one of the largest private virtual art collections, the museum collection consists of artworks dating from the 1960s to this day. It includes around 6 000 works of modern and contemporary art. In 2011 the collection was officially recognized as being of “national significance.”";

const handleClick = () => {
    setTitleText(newTitleText);
    setDescriptionText(newDescriptionText);
    setNewButtonText(newButtonText);
}


    return <div className="homePage">
        <Topic title="Welcome to Modern Art Museum" description="An exceptional opportunity to experience – and meet! – the works of world-renowned artists, such as Guerrilla Girls, Andy Warhol, Yves Klein and the others!"/>
        <Topic title={titleText} description={descriptionText} />
        <Button label={buttonText} onClick={handleClick} />
    </div>
}

export default HomePage