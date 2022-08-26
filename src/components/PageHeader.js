import "./PageHeader.scss";

const PageHeader = () => {
  return (
    <header className="header">
      <h1 className="header__logo">LISTR</h1>
      <button className="button">+ Add Listing</button>
    </header>
  );
};

export default PageHeader;
