import Link from 'next/link';
import { TbBrandMeta, TbBrandTwitterFilled, TbBrandInstagram, TbBrandDiscordFilled } from "react-icons/tb";


export default function Footer(){
    return(
        <footer className="p-[15px] text-white bg-slate-600">
            <div className="text-2xl mb-4">Legal Bay</div>
            <p className="mb-4 underline underline-offset-8">Get in touch</p>
            <i className="">This would be the address,</i>
            <br/>
            <i className="my-4">Street name</i>
            <br />
            <i className="my-4">Postal code</i>
            <br />
            <i className="my-4">City</i>
            <br />
            <h4 className="text-xl mt-2 mb-4 underline underline-offset-8">Useful links</h4>
            <ul className="list-none italic">
                <li className="my-2"><Link href="/">Career</Link></li>
                <li className="my-2"><Link href="/">Contact Us</Link></li>
                <li className="my-2"><Link href="/">Newsletter</Link></li>
            </ul>
            <div className="socialShare text-xl mb-4 underline underline-offset-8">Social Share</div>
            <div className="socialIcons flex mb-4">
                <TbBrandMeta className="h-[35px] w-[35px] mr-1"/>
                <TbBrandTwitterFilled className="h-[35px] w-[35px] mx-2"/>
                <TbBrandInstagram className="h-[35px] w-[35px] mx-2"/>
                <TbBrandDiscordFilled className="h-[35px] w-[35px] mx-2"/>
            </div>
            <div className="text-center text-[8px]">copyright 2023</div>
        </footer>
    );
}