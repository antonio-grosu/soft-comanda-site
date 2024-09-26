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
    <div className="flex md:flex-row w-full flex-col items-center gap-24 md:justify-between min-h-screen">
      {/* div cu heading si cta */}
      <div className="flex flex-col gap-16 md:w-1/2">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl  font-semibold">
            Soluții pe Măsura Nevoilor Tale
          </h1>
          <p className="md:block hidden">
            Lasă-ne pe noi să ne ocupăm de tehnologie, ca tu să te concentrezi
            pe creșterea afacerii tale!
          </p>
          {/* TrustBox widget - Review Collector > */}

          {/* <!-- End TrustBox widget --> */}
          <div className=" hidden md:flex items-center gap-2">
            <Link
              href="/products"
              className="px-12 py-2 border-2  border-teal-300 hover:border-teal-400    hover:rounded-2xl bg-teal-500/10 hover:bg-teal-500/30 rounded-md transition-all"
            >
              Produsele Noastre
            </Link>
          </div>
        </div>

        <div className="md:block hidden">
          <div className="pt-1 w-5/12 bg-gray-600/10 rounded-full"></div>
          <h5 className=" text-sm mt-4 font-semibold">Cele mai populare </h5>
          <div className="w-full mb-12 md:flex mt-4 text-black/50 items-center justify-start gap-2">
            <p className="text-xs">Business Website</p>
            <p className="text-xs">WebApp Development</p>
            <p className="text-xs">Business Mangament Software</p>
            <p className="text-xs">Content Mangament Software</p>
          </div>

          <Link
            href="https://www.trustpilot.com/review/blooming-solutions.ro"
            target="_blank"
            rel="noopener"
            className="px-12 pb-2 hover:bg-green-600/10 hover:pt-2 border-b-2   border-green-600 hover:border-green-700    hover:rounded-2xl   transition-all"
          >
            Review-uri Trustpilot{" "}
            <Image
              src="/trustpilot.svg"
              priority
              className="inline-block mb-1"
              width={30}
              height={30}
            ></Image>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Image
          alt="Ilustratie Cod"
          src="/hero-illustration.svg"
          width={300}
          height={300}
          className="hidden md:block w-full slide-in"
        />
        {/* div-ul cu asset-uri */}
        <div className="hidden md:flex items-top justify-between gap-2 w-full ">
          <div className="flex items-center w-full h-36 md:w-36 md:h-36 p-4 bg-stone-900 rounded-md slide-left">
            <p className="text-white text-xs font-semibold">
              Mai mult timp pentru afacere
              <Image
                alt="Ilustratie Timp"
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
              alt="Ilustratie Aspecte Tehnice"
              width={80}
              height={50}
              src="tech_icon.svg"
              className="mt-2 slide-in w-auto mx-auto"
            />
          </div>
        </div>
        {/* end div-ul cu asset-uri */}

        {/* mobile view components */}
        <div className="md:hidden w-full flex  justify-between gap-4">
          <Image
            alt="Ilustratie Cod"
            src="/hero-illustration.svg"
            width={300}
            height={300}
            className="block w-full slide-in"
          />
          <div className="flex flex-col  justify-between gap-2  ">
            <div className="flex items-center w-full flex-col  p-2 bg-stone-900 rounded-md slide-left">
              <p className="text-white text-center text-xs font-semibold">
                Mai mult timp pentru afacere
              </p>
              <Image
                alt="Ilustratie Timp"
                src="time_icon.svg"
                className="w-10/12 mx-auto *: slide-in mt-2"
                width={480}
                height={220}
              />
            </div>
            <div className="w-full  p-2 bg-teal-500  rounded-md slide-right">
              <p className="text-white text-center w-full  text-xs font-semibold">
                Nicio grijă Tehnică
              </p>
              <Image
                alt="Ilustratie Aspecte Tehnice"
                width={80}
                height={50}
                src="tech_icon.svg"
                className="w-11/12 mx-auto mt-2 slide-in"
              />
            </div>
          </div>
        </div>
        <div className="md:hidden mt-16">
          <div className="mt-4 flex flex-col slide-in">
            <Link
              href="/products"
              className="px-4 py-2 border-2 text-center border-teal-300 hover:border-teal-400    hover:rounded-2xl bg-teal-500/10 hover:bg-teal-500/30 rounded-md transition-all"
            >
              Produsele Noastre
            </Link>
            {/* <Link
              href="/portfolio"
              className="px-4 py-2 border-2 mt-2  text-center text-white  border-black hover:border-black    hover:rounded-2xl bg-black/80  rounded-md transition-all"
            >
              Portofoliu
            </Link> */}
            <Link
              href="https://www.trustpilot.com/review/blooming-solutions.ro"
              target="_blank"
              rel="noopener"
              className="px-12 text-center mt-4 pb-2 hover:bg-green-600/10 hover:pt-2 border-b-2   border-green-600 hover:border-green-700    hover:rounded-2xl   transition-all"
            >
              Review-uri Trustpilot{" "}
              <Image
                src="/trustpilot.svg"
                priority
                className="inline-block mb-1"
                width={30}
                height={30}
              ></Image>
            </Link>
            <p className="text-sm mt-8">
              Lasă-ne pe noi să ne ocupăm de tehnologie, ca tu să te concentrezi
              pe creșterea afacerii tale!
            </p>
          </div>
          <div className="mt-8">
            <div className="pt-1 w-5/12 bg-gray-600/10 rounded-full"></div>
            <h5 className="mt-4 text-sm font-semibold">Cele mai populare </h5>
            <div className="w-full grid grid-cols-2  mt-4 text-black/50 items-center justify-start gap-4">
              <p className="text-xs">Business Website</p>
              <p className="text-xs">WebApp Development</p>
              <p className="text-xs">Business Mangament Software</p>
              <p className="text-xs">Content Mangament Software</p>
            </div>
          </div>
        </div>
        {/* end mobile view components */}
      </div>
    </div>
  );
};

export default Hero;
