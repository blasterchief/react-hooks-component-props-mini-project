import React from 'react'

function About({about, image="https://via.placeholder.com/215"}) {
function pTag(about) {    
const p = <p>{about}</p>
return p}
return(
        <aside>
            <img src={image} alt="blog logo" />
            {pTag(about)}
        </aside>
    )
}

export default About