import { useState, useEffect } from "react";
import axios from "axios";
import "./ListingsPage.scss";
import ListingRow from "./ListingRow";

const API_URL = "http://localhost:8080/listings/";

const ListingsPage = () => {
  const [listingsData, setListingsData] = useState([]);

  const getListings = async () => {
    const res = await axios.get(API_URL);
    const { data } = res;
    setListingsData(data);
  };

  const handleDeleteListing = async (id) => {
    try {
      await axios.delete(API_URL + id);
      getListings();
    } catch (error) {
      console.log("There was an error deleting the listing: " + error);
    }
  };

  useEffect(() => {
    getListings();
  }, []);

  return (
    <article>
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
      <div></div>
    </article>
  );
};

export default ListingsPage;
