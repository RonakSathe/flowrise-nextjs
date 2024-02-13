// import type { Metadata } from "next";
import { Nunito,Nunito_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { createClient } from "@/prismicio";
import { Metadata,ResolvingMetadata } from "next";

const nunito = Nunito({
  subsets:['latin'],
  variable:'--font-nunito',
  display:'swap'
})

const nunitoSans = Nunito_Sans({
  subsets:['latin'],
  variable:'--font-nunito-sans',
  display:'swap'
})



export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle("settings");

  return {
    title: page.data.site_title || "Flowrise Fallback",
    description: page.data.meta_description || "FLowrise is relaing app for u",
    openGraph: {
      images:[page.data.og_image.url || ""],
    },
    
  }
} 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(nunito.variable,nunitoSans.variable)}>
      <body >
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
