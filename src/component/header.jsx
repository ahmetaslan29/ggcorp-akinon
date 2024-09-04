import Link from 'next/link';
import logo from '/public/akinon-logo.svg';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className=" w-full bg-[#111111]  text-white  shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center flex-row py-2">
        <div className="text-2xl font-bold">
        <Image
        src={logo} 
        width={100}
        objectFit='contain'
        alt='Akinon Logo'

        ></Image>
        </div>

        {/* Navbar */}
        
        <div className='flex gap-5 h-[50px]'>
          <Link href="/" className='hover:text-[#ffc52e] py-3  hover:border-b-[#ffc52e] hover:border-b-2'>
              Anasayfa  
          </Link>
          <Link href="/rules" className='hover:text-[#ffc52e] py-3 hover:border-b-[#ffc52e] hover:border-b-2 '>
            Kurallar
          </Link>
          <Link href="/application" className='hover:text-[#ffc52e] py-3  hover:border-b-[#ffc52e] hover:border-b-2'>
            Başvur
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;