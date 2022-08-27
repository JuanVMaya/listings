import { Link } from "react-router-dom";
import "./ListingRow.scss";

const ListingRow = ({ listing, deleteListing }) => {
  const handleDeleteListing = () => {
    deleteListing(listing.id);
  };
  
  return (
    <tr>
      <td><Link to={`/listings/${listing.id}`} className="listing-link">{listing.address}</Link></td>
      <td>$ {listing.price.toLocaleString()}</td>
      <td>{listing.available ? "Yes" : "No"}</td>
      <td className="actions">
        <Link to={`/listings/${listing.id}/edit`} className="button button-action">
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
