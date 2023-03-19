import React, { useState, useEffect } from 'react';

const ArtworkPage = () => {
   const [loading, setLoading] = useState(true);


   
   
   return <div>
       <img/>
       <h2>title</h2>
       <p>date</p>
       <p>category</p>
       <p>medium</p>
       <select >
          <option value="inches">Inches</option>
          <option value="centimeters">Centimeters</option>
        </select>
        <p>dimensions</p>
        <p>author</p>
        <p>birthday</p>
        <p>nationality</p>

        <a>Similar artworks</a>



        </div>
}

export default ArtworkPage