import "../../styles/temp.css";
import sanityClient from "../../client";
import MainHeader from "../MainHeader";
import { Route } from "react-router-dom";

const HomePage = () => {
  const doc = {
    _type: "order",
    name: "briskdust",
  };

  sanityClient
    .fetch(`*[_type == "order"]`)
    .then(data => console.log(data))
    .catch(console.error);

  const trialPatch = () => {
    sanityClient.create(doc);
  };
  return (
    <>
      <MainHeader />
      <Route path="/place-order"></Route>
      <Route path="/tracking"></Route>
      <Route path="/delivery"></Route>
    </>
  );
};

export default HomePage;
