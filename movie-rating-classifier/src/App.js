import React, { useState } from 'react';

import { Container, Form, Button, Image } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
// import {getNextMovie, predictMovieScore } from './Api'
import ReviewModal from './components/ReviewModal';
import movies from './utils/movies'

function App() {

  const getRandomMovie = () => movies[Math.floor(Math.random() * movies.length)]

  const [review, setReview] = useState("")
  const [movie, setMovie] = useState(getRandomMovie())
  const [predictionScore, setPredictionScore] = useState("")
  let reviewInput = React.createRef();

  const nextMovie = () => {
    let newMovie = getRandomMovie()
    setMovie(newMovie) 
  }

  const predictMovieScore = async (review) => {
    let response = await fetch(
        `api/prediction`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ review })
        }
    )
    return response.json()
}

  const submitReview =  async () => {
    console.log("Form submitted!")

    let myReview = reviewInput.current.value

    setReview(myReview)
    console.log(review)

    let predictionResponse = await predictMovieScore(myReview)
  }

  const hideModal = () => {
    reviewInput.current.value = ""
    setReview("")
    setPredictionScore("")
    nextMovie()
  }

  return (
    <div className="App">
      <Header />
      <ReviewModal 
        show={ predictionScore.length > 0}
        score={predictionScore}
        onHide={hideModal}
        />

      <Container className="mw-auto my-2" style={{width: '40rem'}}>

        <div className="text-center my-4">
          <Image style={{width: '30rem'}} variant="top" src={movie.Poster} />
        </div>
        
        <h2>{`${movie.Title} (${movie.Year})`}</h2>
        
        <Form>
          <Form.Group controlId="writeReview">
            <Form.Label>Write your review</Form.Label>
            <Form.Control as="textarea" rows="3" ref={reviewInput} />
          </Form.Group>
        
        </Form>
        <Button variant="primary rx-1" onClick={submitReview}>
            Submit
          </Button>
          <Button variant="secondary mx-1" onClick={nextMovie}>
            Next movie
          </Button>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
