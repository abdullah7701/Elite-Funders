import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="main-menu__list">
        <li className="dropdown current">
          <Link href="/">Home </Link>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
        <li className="dropdown">
          <Link href="#">Pages</Link>
        </li>

        <li className="dropdown">
          <Link href="/blog">Blog</Link>
        </li>

        <li>
          <Link href="contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
