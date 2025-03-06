import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import "./globals.css";


const poppins = Poppins({subsets:['latin'],
  weight:['400','500','600','700'],
  variable:'--font-poppins'
})
export const metadata: Metadata = {
  title: "myEvents",
  description: "myEvent is a platform for event management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    // <html lang="en">
    //   <body
    //     className={poppins.variable}
    //   >
    //     {children}
    //   </body>
    // </html>
    // </ClerkProvider>

<ClerkProvider>
<html lang="en">
  <body className={poppins.variable}>
    
    {children}
  </body>
</html>
</ClerkProvider>
  );
}
