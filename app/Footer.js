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
                <h3 className="font-semibold">Pentru colaborări</h3>
                <Link
                    href="mailto:contact@blooming-solutions.ro?subject=Colaborare&body=Buna%20ziua%20"
                    className="text-sm hover:text-teal-500 transition-all "
                >
                    contact@blooming-solutions.ro
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
