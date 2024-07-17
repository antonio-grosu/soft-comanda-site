// prezinta compania noastra si modul de lucru
import Image from "next/image";

const Work = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:gap-16 gap-8 justify-center">
      <h1 className="text-4xl  md:mb-0 md:text-center font-semibold slide-in">
        Munca Noastră: Entuziasm, Profesionalism și Inovație
      </h1>
      <div className="md:w-7/12 grid md:grid-cols-4 grid-cols-2 gap-8 mx-auto">
        <div className="rounded-md p-1  w-36 h-36 md:w-auto md:h-44 slide-left bg-gray-300/20"></div>
        <div className="rounded-md p-1  w-36 h-36 md:w-auto md:h-44 slide-left bg-gray-300/20"></div>

        <div className="rounded-md p-1  w-36 h-36 md:w-auto md:h-44 slide-right bg-gray-300/20"></div>
        <div className="rounded-md p-1  w-36 h-36 md:w-auto md:h-44 slide-right bg-gray-300/20"></div>
      </div>
      <p className="slide-in md:text-center">
        Misiunea noastră este să sprijinim clienții în realizarea visurilor lor,
        oferindu-le soluții software care nu doar să răspundă nevoilor imediate,
        ci și să le permită să își scaleze afacerea pe termen lung. Ne implicăm
        activ în înțelegerea provocărilor și obiectivelor fiecărui client,
        creând soluții personalizate care facilitează creșterea și inovarea.
      </p>
      <div className="flex items-center justify-center">
        <svg
          className="w-12 h-12 text-gray-950/80  animate-pulse"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m8 7 4 4 4-4m-8 6 4 4 4-4"
          />
        </svg>
      </div>
    </div>
  );
};

export default Work;
