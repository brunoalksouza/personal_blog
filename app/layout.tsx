import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

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
          width={200}
          height={200}
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
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Contact with me</h3>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="dsfsdf">
            <Image src="/github.png" width={24} height={24} alt="github" />
          </a>
          <a href="dsfsdf">
            <Image src="/linkedin.png" width={24} height={24} alt="linkedin" />
          </a>
          <a href="wa.me//5535998372826">
            <Image src="/linkedin.png" width={24} height={24} alt="ssss" />
          </a>
        </div>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
