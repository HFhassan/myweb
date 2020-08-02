import React from 'react';
import './App.css';



function MediaCrad ({name,body,imageUrl,counter})
{

    return (
        <div className="box">
           
            <center><h1>{name}</h1></center>
            <hr/>
            <center><p>{body}</p></center>
            <center><img src={imageUrl} alt="abc" /></center>
        </div>
    )
}

export default MediaCrad;