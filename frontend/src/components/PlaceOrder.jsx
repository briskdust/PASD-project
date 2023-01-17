import React from "react";
import sanityClient from "../client";

const PlaceOrder = () => {
  return (
    <div>
      <form>
        <input type="checkbox" id="is-breakable" />
        <label htmlFor="is-breakable">Breakable</label>
        <input type="checkbox" id="is-perishable" />
        <label htmlFor="is-perishable">Perishable</label>
        <input type="checkbox" id="is-private" />
        <label htmlFor="is-private">Private</label>
        <input type="checkbox" id="is-premium" />
        <label htmlFor="is-premium">Premium</label>
      </form>
    </div>
  );
};

export default PlaceOrder;
