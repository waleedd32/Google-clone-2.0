import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex   w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p>About</p>
          <p>Store</p>
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p>Gmail</p>
          <p>Images</p>
          {/* Icon */}

          {/* Avatar */}
        </div>
      </header>

      {/* Body */}
      {/* Footer */}
    </div>
  );
}
