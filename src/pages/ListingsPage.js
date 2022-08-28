import { useState, useEffect } from "react";
import ListingRow from "../components/ListingRow";
import axios from "axios";
import "./ListingsPage.scss";

const API_URL = "http://localhost:8080/listings/";

const ListingsPage = () => {
  const [listingsData, setListingsData] = useState([]);
  const [sortParameter, setSortParameter] = useState("0-z");

  const getListings = async (sortQuery) => {
    const res = await axios.get(`${API_URL}?sort=${sortQuery}`);
    const { data } = res;
    setListingsData(data);
  };

  useEffect(() => {
    getListings(sortParameter);
  }, [sortParameter]);

  const handleDeleteListing = async (id) => {
    try {
      await axios.delete(API_URL + id);
      getListings();
    } catch (error) {
      console.log("There was an error deleting the listing: " + error);
    }
  };

  const handleSortParameterChange = (event) => {
    setSortParameter(event.target.value);
  };

  return (
    <article>
      <h1>All Listings</h1>
      <select onChange={handleSortParameterChange} value={sortParameter}>
        <option value="price_max_to_min">Price: High to Low</option>
        <option value="price_min_to_max">Price: Low to High</option>
        <option value="0-z">Alphanumeric: 0-Z</option>
        <option value="z-9">Alphanumeric: Z-0</option>
      </select>
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
