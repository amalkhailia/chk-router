import React from 'react'
import ReactPlayer from 'react-player/youtube'
import{Button} from 'react-bootstrap'
import  "./AddTrailer.css";

 const AddTrailer = (props) => {
    const movies = props.location.state.movies
    return (
        <div className="trailer">
            
        <h1>{movies.description}</h1>
        <ReactPlayer controls url={movies.trailer}  className="video"/>
        <Button variant="dark" onClick={()=>{props.history.push("/")}}>Home</Button>

        
    </div>
)
}

export default AddTrailer