// import { SignedOut, UserButton } from '@clerk/nextjs'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { Button } from '../ui/button'

// const Header = () => {
//   return (
//     <header className='w-full border-b'>
//     <div className="wrapper flex items-center justify-between">
//           <Link href="/" className="w-36">
//           <Image 
//             src="/assets/images/logo.svg" width={128} height={38}
//             alt="Evently logo" 
//           />
//           </Link>
        
//         <div className="flex w-32 justify-end gap-3">
//             <SignedOut>
//                 <UserButton afterSignOutUrl="/"/>
//             </SignedOut>
//         <SignedOut>
//             <Button asChild className='rounded-full' size='lg'></Button>
//             <Link href="/sign-in">
//             Login
//             </Link>
//         </SignedOut>
//         </div>
//     </div>
//     </header>
//   )
// }

// export default Header


import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="w-36">
          <Image src="/assets/images/myEve.svg" width={128} height={38} alt="myEvents logo" />
  


        </Link>

        <SignedIn>
            <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems/>  
            </nav>
        </SignedIn>

        {/* Authentication Buttons */}
        <div className="flex w-32 justify-end gap-3">
          {/* Show User Button when signed in */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav/>
          </SignedIn>

          {/* Show Login Button when signed out */}
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
