// fiecare proiect intr-iun snap

import Link from "next/link";

// w-9/12 bg glass
// flex : poza , {nume, link, mica descrirere}
// produs oferit , review
const Projects = () => {
  return (
    <div className="py-12 md:py-24">
      <h1 className="text-4xl  w-full  font-semibold slide-left">
        Proiectele Noastre de Excepție{" "}
      </h1>
      <div className="snap-mandatory snap-y">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

const Project = (props) => {
  const { icon, link, title, description, service_provided, review } = props;
  return (
    <div className="snap-always mt-24 snap-end  flex items-center justify-center p-2 md:p-24">
      <div className="md:p-12 p-8  flex flex-col h-full w-full bg-gray-300/20  rounded-md">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-56 h-56 mb-8 md:mb-0 rounded-2xl p-2 bg-white"></div>
          {/* prima sectiune */}
          <div className="flex flex-col md:w-7/12">
            <h3 className="text-2xl font-semibold flex items-center justify-start gap-4">
              Title{" "}
              <Link href={""}>
                <svg
                  className="w-8 h-8 text-gray-950 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                  />
                </svg>
              </Link>
            </h3>

            <p className="mt-4">Descriere</p>
          </div>
          {/* a doua sectiune */}
        </div>
        <div className="w-full mt-12 mx-auto flex-col gap-4 md:gap-0 flex md:flex-row">
          <p className="text-center md:text-left md:w-5/12">
            Produs oferit descriere
          </p>
          <p className="text-center md:text-left md:w-5/12">Review</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
