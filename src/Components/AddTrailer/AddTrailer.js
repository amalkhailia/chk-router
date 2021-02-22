import React from 'react'
 const AddTrailer = (props) => {
    const movies = props.location.state.movies
    return (
        <div>
            
        <h1>{movies.description}</h1>
        
    </div>
)
}

export default AddTrailer