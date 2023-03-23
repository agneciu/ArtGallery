import React, { useState, useEffect } from 'react';

const ArtworkPage = () => {
   const [loading, setLoading] = useState(true);


   
   
   return <div>
       <img src={artwork._links.image.href.replace(
              "{image_version}",
              "medium"
            )}/>
       <h2>title</h2>
       <p>date</p>
       <p>Category:</p>
       <p>medium</p>
       <select >
          <option value="inches">Inches</option>
          <option value="centimeters">Centimeters</option>
        </select>
        <p>Dimensions:</p>
        <p>Author:</p>
        <p>Birthday:</p>
        <p>Nationality</p>

        <a>Similar artworks:</a>



        </div>
}

export default ArtworkPage