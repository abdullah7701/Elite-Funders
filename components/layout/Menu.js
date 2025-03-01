import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="main-menu__list">
        <li className="dropdown">
          <Link href="/">Services</Link>
          <ul>
            <li>
              <Link href="/services/revenue-based-financing">Revenue Based Financing</Link>
            </li>
            <li>
              <Link href="/term-loans">Term Loans</Link>
            </li>
            <li>
              <Link href="/sba-loans">SBA Loans</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/">Resources</Link>
          <ul>
            <li>
              <Link href="/resources/about">About Elite Funder</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/partner">Partner With Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="tel:8883431156">(888) 343-1156</Link>
        </li>
      </ul>
    </>
  );
}