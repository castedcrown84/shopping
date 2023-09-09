import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import  Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Main = () => {
  return ( 
   <main>
    <Container>
      <Row className='px-4 my-5'>
        <Col sm={7}>
        <Image src="http://picsum.photos/900/400" fluid rounded  />;
        </Col>
        <Col sm={5}>
          <h1 className='font-weigh-ligh'>Tagline</h1>
          <p className='mt-4'> Some text Goes here about the ithem</p>
          <Button variant='outline-primary'>call to action</Button>
        </Col>
      </Row>
      <Row>
      <Card className='text-center bg-secondary text-white my-5 py-4'>
      <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      </Row>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/200/320/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/200/320/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/200/320/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>

      </Row>
      
    </Container>
   </main>
   );
}
 
export default Main;