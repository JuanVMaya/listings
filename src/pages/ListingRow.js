import { Link } from "react-router-dom";

const ListingRow = ({ listing, deleteListing }) => {
  const handleDeleteListing = () => {
    deleteListing(listing.id);
  };
  
  return (
    <tr>
      <td>{listing.address}</td>
      <td>$ {listing.price.toLocaleString()}</td>
      <td>{listing.available ? "Yes" : "No"}</td>
      <td className="actions">
        <Link to={`/listings${listing.id}`} className="button button-action">
          Edit
        </Link>
        <button className="button button-action" onClick={handleDeleteListing}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListingRow;
