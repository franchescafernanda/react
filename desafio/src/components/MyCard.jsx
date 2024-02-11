import {Card, Button} from "react-bootstrap"
import Tags from "./Tags"

import Card from "./Card"


const MyCard = (props) => {
  
      return (
        <>
        <div className="tarjet">
          <Card style = {{ whidth: '18rem'}}>
            <Tags colorBg={props.colorBg} textBg ={props.props.textBg}/>
            <Card.img variant="top" src={props.img}/>
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                {props.information}
              </Card.Text>
              <button variant={props.ColorButton}>{props.btn}</button>
            </Card.Body>
          </Card>
        </div>
        </>
      )
    }
    
    export default MyCard
