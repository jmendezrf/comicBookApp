import React, {Component} from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

export default class Comics extends Component{

    constructor(props){
        super(props);
        this.state = {
            comics: []
        }
    }


  componentDidMount(){
      const parameter = {
          method: 'GET', 
      }
      const url = "http://comicbookdev-env.eba-eiw4rndx.us-east-2.elasticbeanstalk.com/api/comicbooks"
      fetch(url,parameter)
      .then(res =>  res.json())
      .then((data) => {
          this.setState({ comics: data})
          console.log(data)
      })
      .catch(console.log);
  }

    render = () => 
        
            this.state.comics.map((e) => (
                <Container key={e.id}>
                <Row className=" d-flex justify-content-sm-center">
                    <Col className="pt-5" lg="auto">
                        <Card className="p-5">
                        <Card.Title>{e.title}</Card.Title>
                            <Card.Text>
                            {e.description}
                            </Card.Text>
                        </Card>
                    </Col>
              </Row>
              </Container>
          
            ))
     
}

