import {Link} from 'react-router-dom';
import "./PageHeader.scss";

const PageHeader = () => {
  return (
    <header className="header">
      <a href="/">
        <h1 className="header__logo">LISTR</h1>
      </a>
      <Link to="/listings/add" className="button">
     + Add Listing
      </Link>
    </header>
  );
};

export default PageHeader;
