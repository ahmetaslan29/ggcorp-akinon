import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="   w-full bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <nav className="mb-4">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link href="/" className='hover:text-gray-400'>
                Anasayfa
              </Link>
            </li>
            <li>
              <Link href="/rules" className='hover:text-gray-400'>
                Kurallar
              </Link>
            </li>
            <li>
              <Link href="/basvuru" className='hover:text-gray-400'>
                Başvur
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-gray-400">&copy; 2024 League of Legends Turnuvası. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};