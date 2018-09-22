import React  from 'react';

function About(props) {
    return <h1>About page {props.match.params.id}</h1>;
}

export default About;