// Reusable navigation button. Used once for every item in the menus array.
export default function NavButton({ name, url }) {
  return (
    <a className="nav__button" href={url}>
      {name}
    </a>
  );
}
