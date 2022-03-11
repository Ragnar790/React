import React from "react";
import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Post = (props) => {
  const {id, title, body} = props.post
  return (
    <Card className="cardBody">
      {/* <Link to={`/post/${id}`}> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {body}
          </Card.Text>
        </Card.Body>
      {/* </Link> */}
    </Card>
  )
}

export default Post