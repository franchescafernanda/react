import React from "react"
import Card from "react-bootstrap/Card"

import Tags from "../components/Tags"



const MyCard = ({colorbadge,textobadge,img,name,information}) => {
  
      return (
        <>
        <div className="tarjet">
          <Card style = {{ whidth: '18rem'}}>
            <Tags colorbadge={colorbadge} textobadge ={textobadge}/>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {information}
              </Card.Text>
              <Tags colorbadge={colorbadge} textobadge={textobadge}/>
            </Card.Body>
          </Card>
        </div>
        </>
      )
    }
    
    export default MyCard

