import { useState, useEffect, useCallback } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./ListingEdit.scss";

const API_URL = "http://localhost:8080/listings/";

const ListingEdit = () => {
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(null);
  const [updatedConfirmation, setUpdatedConfirmation] = useState(false);

  const history = useHistory();
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

  const handleAddressChange = (event) => {
    // Validation to be added here
    setAddress(event.target.value);
  };
  const handlePostalCodeChange = (event) => {
    // Validation for only accepting valid postal code formatting would be here
    setPostalCode(event.target.value);
  };
  const handlePriceChange = (event) => {
    // Validation for only accepting valid number for price would be here
    setPrice(event.target.value);
  };
  const handleAvailableChange = (event) => {
    setAvailable(event.target.value === "true"); // Use the expression to turn the value string given by the target value into a boolean
  };
  const handleEditFormSubmit = async (event) => {
    event.preventDefault();
    const submittedData = {
      address: address,
      available: available,
      price: price,
      postalCode: postalCode,
    };
    const res = await axios.put(API_URL + id, submittedData);
    console.log(res.data);
    // getListing();
    setUpdatedConfirmation(true);
    setTimeout(() => {
      history.push("/listings");
    }, 3000);
  };

  return (
    <section>
      <h1>Edit Listing</h1>
      <form className="edit-form" onSubmit={handleEditFormSubmit}>
        <div className="input-actions">
          <label className="input-actions__label">
            Address
            <input
              className="input-actions__input"
              type="text"
              value={address}
              onChange={handleAddressChange}
            />
          </label>
          <label className="input-actions__label">
            Postal Code
            <input
              className="input-actions__input"
              type="text"
              value={postalCode}
              onChange={handlePostalCodeChange}
            />
          </label>
          <label className="input-actions__label">
            Price
            <input
              className="input-actions__input"
              type="text"
              value={price}
              onChange={handlePriceChange}
            />
          </label>
          <label className="input-actions__label">
            Availability
            <label htmlFor="available" className="input-actions__label--radio">
              Available
              <input
                name="available"
                id="available"
                type="radio"
                checked={available === true}
                value="true"
                onChange={handleAvailableChange}
              />
            </label>
            <label
              htmlFor="unavailable"
              className="input-actions__label--radio"
            >
              Unavailable
              <input
                name="available"
                id="unavailable"
                type="radio"
                checked={available === false}
                value="false"
                onChange={handleAvailableChange}
              />
            </label>
          </label>
        </div>

        <div className="edit-actions">
          <button className="button">Save</button>
          <Link type="button" to="/">
            <button className="button">Cancel</button>
          </Link>
          {updatedConfirmation && (
            <p>The listing has been updated. Redirecting to home...</p>
          )}
        </div>
      </form>
    </section>
  );
};

export default ListingEdit;
