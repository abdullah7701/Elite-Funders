import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="main-menu__list">
        <li className="dropdown">
          <Link href="/services">Services</Link>
          <ul>
            <li>
              <Link href="/services/revenue-based-financing">Revenue Based Financing</Link>
            </li>
            <li>
              <Link href="/services/term-loans">Term Loans</Link>
            </li>
            <li>
              <Link href="/services/sba-loans">SBA Loans</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/resources">Resources</Link>
          <ul>
            <li>
              <Link href="/resources/about">About Elite Funder</Link>
            </li>
            <li>
              <Link href="/resources/faq">FAQ</Link>
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