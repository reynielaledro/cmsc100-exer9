import NavButton from "./NavButton.jsx";

// Navigation panel: renders one reusable NavButton per menu item.
export default function NavBar({ menus }) {
  return (
    <nav className="nav">
      {menus.map((menu) => (
        <NavButton key={menu.id} name={menu.name} url={menu.url} />
      ))}
    </nav>
  );
}
