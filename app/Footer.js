import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 px-8 py-12 flex md:flex-row flex-col items-top justify-between">
      <div className="flex flex-col md:w-3/12">
        <h3 className="font-semibold ">software company</h3>
        <p className="text-sm mt-4 text-black/50">
          Get your custom software from a wise and experienced team of
          developers
        </p>
      </div>
      <div className="flex flex-col mt-8 md:items-center gap-2">
        <h3 className="font-semibold">Find Us Online</h3>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          Linkedin
        </Link>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          Twitter
        </Link>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          Instagram
        </Link>
      </div>
      <div className="flex flex-col mt-8 md:items-center  gap-2">
        <h3 className="font-semibold">Our Work</h3>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          Web Design Projects
        </Link>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          Successful Web Applications
        </Link>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          Distinguished Mobile Apps
        </Link>
      </div>
      <div className="flex flex-col mt-8 md:items-center gap-2">
        <h3 className="font-semibold">For Collaborations</h3>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          contact@softwarecompany.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
