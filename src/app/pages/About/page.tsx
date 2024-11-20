import Link from 'next/link';
import '../../globals.css';

export default function About() {
  return (
    <div className="container">
      <h1 className="title">About Us</h1>
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/Contact">Contact</Link>
      </nav>
      <p className="description">We are a team of web developers building awesome websites.</p>
    </div>
  );
}