import React from 'react'
import Badge from 'react-bootstrap/Badge'


const Tags = ({colorbadge,textobadge}) => {
  return (
    <div>
      <Badge bg={colorbadge}>
        {textobadge}
      </Badge>
    </div>
  )
}

export default Tags
