// un design foarte catchy
// un heading despre software
// un paragraph care striga alege-ne
// 2 CTA
// primul catre produse
// celalalt catre portofoliu

import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between min-h-screen">
      {/* div cu heading si cta */}
      <div className="flex flex-col gap-16 md:w-1/2">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl mb-12 md:mb-0 font-semibold">
            Soluții pe Măsura Nevoilor Tale
          </h1>
          <p className="text-sm md:block hidden">
            Lasă-ne pe noi să ne ocupăm de tehnologie, ca tu să te concentrezi
            pe creșterea afacerii tale!
          </p>
          <div className="md:block hidden">
            <Link
              href="/products"
              className="px-4 py-2 border-2  border-teal-300 hover:border-teal-400    hover:rounded-2xl bg-teal-500/10 hover:bg-teal-500/30 rounded-md transition-all"
            >
              Produsele Noastre
            </Link>
            <Link
              href="/portfolio"
              className="px-4 py-2 border-2 ml-4 text-white  border-black hover:border-black    hover:rounded-2xl bg-black/80  rounded-md transition-all"
            >
              Portofoliu
            </Link>
          </div>
        </div>
        <div className="md:block hidden">
          <div className="pt-1 w-5/12 bg-gray-600/10 rounded-full"></div>
          <h5 className=" text-sm mt-4 font-semibold">Cele mai populare </h5>
          <div className="w-full flex mt-4 text-black/50 items-center justify-start gap-2">
            <p className="text-xs">Business Websites</p>
            <p className="text-xs">WebApp Development</p>
            <p className="text-xs">Business Mangament Software</p>
            <p className="text-xs">Content Mangament Software</p>
          </div>
        </div>
      </div>

      {/* div-ul cu asset-uri */}
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/hero-illustration.svg"
          width={300}
          height={300}
          className="w-full slide-in"
        />
        <div className="flex items-top justify-between gap-2 w-full ">
          <div className="flex items-center w-full h-36 md:w-36 md:h-36 p-4 bg-stone-900 rounded-md slide-left">
            <p className="text-white text-xs font-semibold">
              Mai mult timp pentru afacere
              <Image
                src="time_icon.svg"
                className=" slide-in mt-2"
                width={480}
                height={220}
              />
            </p>
          </div>
          <div className="w-full h-36 md:w-36 md:h-36 p-4 bg-teal-500 rounded-md slide-right">
            <p className="text-white  flex items-center text-xs font-semibold">
              Nicio grijă legată de aspectele tehnice
            </p>
            <Image
              width={80}
              height={50}
              src="tech_icon.svg"
              className="mt-2 slide-in w-auto mx-auto"
            />
          </div>
        </div>
        <div className="md:hidden mt-4">
          <div className="mt-4 flex flex-col slide-in">
            <Link
              href="/products"
              className="px-4 py-2 border-2 text-center border-teal-300 hover:border-teal-400    hover:rounded-2xl bg-teal-500/10 hover:bg-teal-500/30 rounded-md transition-all"
            >
              Produsele Noastre
            </Link>
            <Link
              href="/portfolio"
              className="px-4 py-2 border-2 mt-2  text-center text-white  border-black hover:border-black    hover:rounded-2xl bg-black/80  rounded-md transition-all"
            >
              Portofoliu
            </Link>
            <p className="text-sm mt-8">
              Lasă-ne pe noi să ne ocupăm de tehnologie, ca tu să te concentrezi
              pe creșterea afacerii tale!
            </p>
          </div>
          <div className="mt-8">
            <div className="pt-1 w-5/12 bg-gray-600/10 rounded-full"></div>
            <h5 className="mt-4 text-sm font-semibold">Cele mai populare </h5>
            <div className="w-full flex mt-4 text-black/50 items-center justify-start gap-2">
              <p className="text-xs">Business Websites</p>
              <p className="text-xs">WebApp Development</p>
              <p className="text-xs">Business Mangament Software</p>
              <p className="text-xs">Content Mangament Software</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
