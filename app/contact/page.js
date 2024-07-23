import Link from "next/link";

const Contact = () => {
  return (
    <main className="bg-white">
      <div className="min-h-screen gap-16 flex flex-col w-3/4 mx-auto justify-center">
        <h1 className="text-center  text-3xl md:text-4xl  slide-in font-semibold">
          Suntem Partenerul de care aveți nevoie pentru <br /> Succesul Afacerii
        </h1>
        <p className="text-center slide-in md:w-9/12 mx-auto">
          Fie că visați la o aplicație inovatoare sau aveți nevoie de un sistem
          integrat care să optimizeze orice afacere, suntem aici pentru a vă
          susține la fiecare pas.
        </p>
        <div className="md:w-3/12 w-full mx-auto md:flex-row flex-col flex items-center justify-center gap-2 md:gap-8">
          <Link
            href="tel:40747738250"
            className="w-full slide-left px-6 py-2 bg-teal-500 text-white  flex items-center justify-center md:justify-start  hover:rounded-2xl   rounded-md transition-all"
          >
            {" "}
            <svg
              className="w-5 h-5 text-white mr-2 md:mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
            </svg>
            Sună
          </Link>
          <Link
            href="mailto:contact@blooming-solutions.ro?subject=Colaborare&body=Buna%20ziua%20"
            className="slide-right px-6 py-2 w-full bg-black/80 text-white  flex items-center justify-center md:justify-start  hover:rounded-2xl   rounded-md transition-all"
          >
            <svg
              className="w-6 h-6 text-white mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z" />
            </svg>
            Email
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Contact;
