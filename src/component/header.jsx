import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-800 text-white py-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center flex-row">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className='hover:text-gray-400'>
            LoL Turnuvası
          </Link>
        </div>

        {/* Navbar */}
        
        <div className='flex flex-row gap-5'>
          <Link href="/" className='hover:text-gray-400 py-3'>
             <span> Anasayfa </span> 
          </Link>
          <Link href="/rules" className='hover:text-gray-400 py-3'>
            <span>Kurallar</span>
          </Link>
          <Link href="/application" className='hover:text-gray-400 py-3'>
            <span>Başvur</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;