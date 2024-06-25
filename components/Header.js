import Link from 'next/link';

const Header = () => (
  <header className="w-full bg-[#F0ECF9] p-4 shadow-lg">
    <nav className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-3">
        {/* Elliptical logo-like design */}
        <Link href="/">
          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-xl rounded-full w-40 h-24 flex items-center justify-center shadow-md cursor-pointer transform transition-transform duration-300">
            <span className="text-xl font-bold whitespace-nowrap">Krishi Database</span>
          </div>
        </Link>
      </div>
      <ul className="flex space-x-4">
        <li className="px-4 py-2 rounded transition-colors duration-300 hover:bg-[#d3f9d8]">
          <Link href="/">Home</Link>
        </li>
        <li className="px-4 py-2 rounded transition-colors duration-300 hover:bg-[#d3f9d8]">
          <Link href="/chat">Chat with Krishi Buddy</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
