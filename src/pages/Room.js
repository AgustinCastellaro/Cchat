import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import { useParams } from 'react-router';

function Room() {
    const { userId } = useParams();
    console.log("userId: " + userId);

    return (
        <div>
            <Header />
            <Container />
        </div>
    )
}

export default Room
