import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Listing.scss";

const API_URL = "http://localhost:8080/listings/";

const Listing = () => {
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(null);

  const { id } = useParams();

  const getListing = useCallback(async () => {
    const res = await axios.get(API_URL + id);
    const { data } = res;
    setAddress(data.address);
    setPostalCode(data.postalCode);
    setPrice(data.price);
    setAvailable(data.available);
  }, [id]);

  useEffect(() => {
    getListing();
  }, [getListing]);

  return (
    <section>
      <h1>Listing</h1>
      <div className="listing-info">
        <label className="listing-info__label">
          Address
          <p className="listing-info__text">{address}</p>
        </label>
        <label className="listing-info__label">
          Postal Code
          <p className="listing-info__text">{postalCode}</p>
        </label>
        <label className="listing-info__label">
          Price
          <p className="listing-info__text">$ {price.toLocaleString()}</p>
        </label>
        <label className="listing-info__label">
          Availability
          <p className="listing-info__text">{available ? "Yes" : "No"}</p>
        </label>
      </div>

      <div className="edit-actions">
        <Link type="button" to={`/listings/${id}/edit`}>
          <button className="button">Edit</button>
        </Link>
      </div>
    </section>
  );
};

export default Listing;
