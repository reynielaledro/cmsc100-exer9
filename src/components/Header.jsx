import NavBar from "./NavBar.jsx";

// Header with the store name and the navigation panel.
export default function Header({ storeName, menus }) {
  return (
    <header className="header">
      <h1 className="header__name">{storeName}</h1>
      <NavBar menus={menus} />
    </header>
  );
}
