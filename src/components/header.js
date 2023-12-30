import Link from 'next/link';

export default function Header(){
    return(
        <nav className="flex justify-between bg-slate-600 p-4 w-full z-[1] sticky top-0">
            <div className="text-white md:text-3xl text-xl">
                <Link href="/">LegalBay</Link>
            </div>
            <div className="flex justifly-between md:gap-5 gap-3 items-center">
                <Link href="/contactus" className='text-white md:text-md text-xs'>Contact Us</Link>
                <Link href="/login" className='text-white md:text-md text-xs'>Login</Link>
                <Link href="/signup" className='text-white md:text-md text-xs'>Sign Up</Link>
            </div>
        </nav>
    )
}