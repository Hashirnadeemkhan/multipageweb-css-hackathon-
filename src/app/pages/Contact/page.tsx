import Link from 'next/link';
import '../../globals.css';

export default function Contact() {
  return (
    <div className="container">
      <h1 className="title">Contact Us</h1>
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link> {/* Add link to the Contact page */}
      </nav>
      <p className="description">Feel free to reach out to us at contact@example.com.</p>
    </div>
  );
}
