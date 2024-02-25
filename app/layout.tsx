import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image
          src="/logo/dark.svg"
          width={140}
          height={140}
          className="mx-auto"
          alt={"logo"}
        />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold">
            Bruno's personal technology blog
          </h1>
        </Link>
        <p className="text-slate-300">🤟 Welcome to my tech blog. 💻</p>
      </div>
    </header>
  );

  const footer = (
    <footer className="bg-black w-full">
      <div className="border-t border-slate-400 mt-12 py-8 text-center text-slate-400">
        <h3>Contact with me</h3>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://wa.me/553598372826"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/logo/whats.svg" width={24} height={24} alt="github" />
          </a>
          <a
            href="https://github.com/brunoalksouza"
            target="_blank"
            rel="whatsapp"
          >
            <Image
              src="\logo\github.svg"
              width={24}
              height={24}
              alt="linkedin"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/brunoalksouza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/logo/linkedin.svg" width={24} height={24} alt="ssss" />
          </a>
        </div>
      </div>
    </footer>
  );

  return (
    <html className="bg-background-color">
      <Head />
      <body>
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
        </div>
        {footer}
      </body>
    </html>
  );
}
