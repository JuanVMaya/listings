import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./ListingAdd.scss";

const API_URL = "http://localhost:8080/listings/";

const ListingAdd = () => {
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [price, setPrice] = useState("");
  const [addedConfirmation, setAddedConfirmation] = useState(false);

  const history = useHistory();

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

  const handleAddFormSubmit = async (event) => {
    event.preventDefault();
    const submittedData = {
      address: address,
      //There should be validation making sure this is a valid number in the handlePriceChange function
      price: Number(price),
      postalCode: postalCode,
    };
    const res = await axios.post(API_URL, submittedData);
    console.log(res.data);
    setAddedConfirmation(true);
    setTimeout(() => {
      history.push("/listings");
    }, 3000);
  };

  return (
    <section>
      <h1>Add Listing</h1>
      <form className="add-form" onSubmit={handleAddFormSubmit}>
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
        </div>

        <div className="add-actions">
          <button
            className="button"
            disabled={!address || !price || !postalCode}
          >
            Add
          </button>
          <Link type="button" to="/">
            <button className="button">Cancel</button>
          </Link>
          {addedConfirmation && (
            <p>The listing has been added. Redirecting to home...</p>
          )}
        </div>
      </form>
    </section>
  );
};

export default ListingAdd;
