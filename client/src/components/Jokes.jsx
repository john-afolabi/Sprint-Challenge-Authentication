import React, { useEffect, useState } from "react";
import withAuth from "../helpers/axios";
import { Card, CardText, CardBody } from "reactstrap";

function Jokes() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    withAuth()
      .get("http://localhost:3300/api/jokes")
      .then(res => {
        setJokes(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      {jokes.map(joke => {
        return (
          <Card key={joke.id} className="mt-4">
            <CardBody>
              <CardText>
                <strong> {joke.joke}</strong>
              </CardText>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
}

export default Jokes;
