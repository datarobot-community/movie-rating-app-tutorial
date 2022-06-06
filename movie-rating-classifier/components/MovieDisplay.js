import Image from 'next/image'
import { Container, Form, Button} from 'react-bootstrap';

export default function MovieDisplay({movie, reviewInput}) {
  console.log(movie)

  if (movie === null) {
    movie = {
      Title: "Loading...",
      Year: ""
    }
  }

  return (
    <>
      <Container className="mw-auto my-2" style={{width: '40rem'}}>

        <div className="text-center">
          { typeof movie.Poster !== "undefined" ?
            <Image variant="top" src={movie.Poster} width={300} height={445}/> :
            <div style={{height: 445, width: 300}}/>
          }
        </div>

        <h4>{`${movie.Title} (${movie.Year})`}</h4>

        <Form style={{'marginBottom':'1em'}}>
          <Form.Group controlId="writeReview">
            <Form.Label>Write your review</Form.Label>
            <Form.Control as="textarea" rows="3" ref={reviewInput} />
          </Form.Group>

        </Form>
      </Container>
    </>    );
}
