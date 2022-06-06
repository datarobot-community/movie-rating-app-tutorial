import React, { useState, useEffect } from 'react';
import { Container, Form, Button} from 'react-bootstrap';


import ReviewModal from '../components/ReviewModal'
import MovieDisplay from '../components/MovieDisplay'

export default function Home() {
    const [review, setReview] = useState("")
    const [movie, setMovie] = useState(null)
    const [predictionScore, setPredictionScore] = useState("")
    let reviewInput = React.createRef();

    const getNextMovie = async () => {
      let response = await fetch(
        `api/get_movie`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      return response.json()
    }

    const nextMovie = async () => {
      const movie = await getNextMovie()
      setMovie(movie)
    }

    useEffect(() => {nextMovie()}, [])

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
      let myReview = reviewInput.current.value

      setReview(myReview)

      let predictionResponse = await predictMovieScore(myReview)
      let prediction = predictionResponse.prediction === 'positive' ? '👍' : '👎'
      setPredictionScore(prediction)
    }

    const hideModal = () => {
      reviewInput.current.value = ""
      setReview("")
      setPredictionScore("")
      nextMovie()
    }


    return (
      <div className="App">
        <ReviewModal
          show={predictionScore.length > 0}
          score={predictionScore}
          onHide={hideModal}
        />

        <MovieDisplay movie={movie} reviewInput={reviewInput} />

        <Container className="mw-auto my-2" style={{width: '40rem'}}>
          <Button variant="primary rx-1" onClick={submitReview}>
            Submit
          </Button>
          <Button variant="secondary mx-1" onClick={nextMovie}>
            Next movie
          </Button>
        </Container>
      </div>
    );
  }
