import Link from 'next/link';
import '../../globals.css';


export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Welcome to My Website</h1>
      <nav className="nav">
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
      </nav>
      <p className="description">This is the homepage of our Next.js multi-page website.</p>
    </div>
  );
}