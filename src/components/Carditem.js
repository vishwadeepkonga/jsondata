import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Carditem({data}) {
  return data.map((item=>
    <Card style={{ width: '18rem' }} className='' >
    <Card.Header>{item.id}</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>{item.title}</ListGroup.Item>
      <ListGroup.Item>{item.body}</ListGroup.Item>
    </ListGroup>
  </Card>

    
    ))
  
}

export default Carditem;