import React from 'react';

function MediaCrad ({name,body,imageUrl})
{
    return (
        <div style={{width:400}}>
           
            <center><h1>{name}</h1></center>
            <hr/>
            <center><p>{body}</p></center>
            <center><img src={imageUrl} alt="abc" /></center>

        </div>
    )
}

export default MediaCrad;