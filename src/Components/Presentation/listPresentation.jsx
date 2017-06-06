
import React from 'react';
export const AlbumList = (props)=>   { 

    let toRender = "Please click Fetch Data to view the latest albums.....";
    if(props.albums.length>0){
        toRender = <div>
                {props.albums.map((option,index)=>{
                    return (
                <div key={index}>
                    <img src={option.thumbnailUrl} />
                    {option.title}
                    <br/>
                    </div>  )                  
                    
                })}
            </div>;
    }
    return(
    <div>
        {toRender}

    </div>
    );
}