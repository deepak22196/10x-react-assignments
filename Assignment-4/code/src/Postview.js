import React from "react";
import { useEffect, useState } from "react";
import "./Postview.css";
import Card from "./Card";
import Loader from "./loader";
const url = "http://localhost:3004/user";

const Postview = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    try {
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      setPeople([...data]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return (
      <>
        <Loader></Loader>
      </>
    );
  } else {
    return (
      <>
        <header>
          <img src="/images/insta-logo.jpg" alt="logo" className="logo-image" />

          <span className="title">InstaClone</span>
          <img
            src="/images/camera-image.png"
            alt="camera-image"
            className="camera-image"
          />
        </header>
        {people.map((person) => {
          return (
            <>
              <Card person={person}></Card>
            </>
          );
        })}
      </>
    );
  }
};

export default Postview;
