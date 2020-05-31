import React from 'react'

function Home(props) {
    return (
        <div>
            <h1>The homepage</h1>
            <button onClick={props.myFunc}>Add To Cart</button>
        </div>
    )
}

export default Home
