import "../../styles/temp.css";
import sanityClient from "../../client";

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
  return <button onClick={trialPatch}></button>;
};

export default HomePage;
