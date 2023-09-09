import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import  Button  from 'react-bootstrap/Button';




const Main = () => {



  return ( 
   <main>
    <Container>
      <Row className='px-4 my-5'>
        <Col sm={7}>
        <Image src="http://dummyimage.com/900x400/dee2e6/6c757d.jpg" fluid rounded  />;
        </Col>
        <Col sm={5}>
          <h1 className='font-weigh-ligh'>Tagline</h1>
          <p className='mt-4'> Some text Goes here about the ithem</p>
          <Button variant='outline-primary'>call to action</Button>
        </Col>
      </Row>
      
    </Container>
   </main>
   );
}
 
export default Main;