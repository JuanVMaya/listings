import { useState, useEffect } from "react";
import ListingRow from "../components/ListingRow";
import axios from "axios";
import "./ListingsPage.scss";

const API_URL = "http://localhost:8080/listings/";

const ListingsPage = () => {
  const [listingsData, setListingsData] = useState([]);

  const getListings = async () => {
    const res = await axios.get(API_URL);
    const { data } = res;
    setListingsData(data);
  };

  useEffect(() => {
    getListings();
  }, []);

  const handleDeleteListing = async (id) => {
    try {
      await axios.delete(API_URL + id);
      getListings();
    } catch (error) {
      console.log("There was an error deleting the listing: " + error);
    }
  };

  return (
    <article>
      <h1>All Listings</h1>
      <table>
        <thead>
          <tr>
            <th>Address</th>
            <th>Price</th>
            <th>Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listingsData.map((listing) => {
            return (
              <ListingRow
                key={listing.id}
                listing={listing}
                deleteListing={handleDeleteListing}
              />
            );
          })}
        </tbody>
      </table>
    </article>
  );
};

export default ListingsPage;
