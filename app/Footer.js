import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 px-8 py-12 flex md:flex-row flex-col items-top justify-between">
      <div className="flex flex-col md:w-3/12">
        <h3 className="font-semibold ">Blooming Solutions</h3>
        <p className="text-sm mt-4 text-black/50">
          Software personalizat creat de o echipă experimentată.
        </p>
      </div>
      <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold">Rețele Sociale</h3>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          Linkedin
        </Link>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          Twitter
        </Link>
      </div>
      {/* <div className="flex flex-col md:mt-0 mt-8 md:items-center  gap-2">
        <h3 className="font-semibold">Proiectele noastre</h3>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          Web Design
        </Link>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          Aplicații Web de succces
        </Link>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          Aplicații de Management eficiente
        </Link>
      </div> */}
      <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold">Pentru colaborări</h3>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          contact@softwarecompany.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
