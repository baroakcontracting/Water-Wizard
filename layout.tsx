import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Water Wizard',description:'Farm irrigation recording and management',manifest:'/manifest.webmanifest'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en-AU"><body>{children}</body></html>}
