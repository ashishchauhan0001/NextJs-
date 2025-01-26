import Image from "next/image";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


export default function Home() {
  return (
    <div>
      <div>
      <nav className="bg-black text-white py-4 px-5 flex justify-between items-center">
                <h3 className="text-xl">Logo</h3>
                <ul className="flex items-center gap-10"> 
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li><RegisterLink>Register</RegisterLink></li>
                    <li><LoginLink>Login</LoginLink></li>
                </ul>
            </nav>
      </div>
      <h1 className="font-bold text-center mt-32 text-4xl">This is the  Kinde App Home Page</h1>
    </div>
  ); 
}
