// prezentam tech stack-ul
// vb putin despre experienta noastra ca devi
// includem si niste skill-uri idk
import Image from "next/image";
const Technology = () => {
  return (
    <div className="flex md:flex-row md:items-center md:justify-between flex-col  md:gap-0 gap-8 md:min-h-screen">
      <div className="w-5/12 flex flex-col gap-4">
        <h1 className="text-4xl font-semibold slide-left">
          Specialitatea noastră, Tehnologia
        </h1>
        <p className="hidden md:block mt-8">
          Compania noastră se specializează în crearea de site-uri și aplicații
          personalizate folosind cele mai avansate tehnologii JavaScript. Cu o
          echipă de dezvoltatori experimentați, oferim soluții inovatoare și
          performante, adaptate nevoilor fiecărui client.
        </p>
        <p className="hidden md:block">
          Utilizăm framework-uri JavaScript de ultimă generație pentru a
          construi aplicații rapide, scalabile și ușor de întreținut. Investim
          constant în formarea echipei și explorarea celor mai noi tendințe din
          industrie, asigurând astfel rezultate care depășesc așteptările și
          oferă un avantaj competitiv clienților noștri.
        </p>
      </div>
      <div className=" slide-in grid md:w-5/12 mt-8   grid-cols-4 gap-4 md:grid-cols-4">
        <div className="bg-gray-300/10 p-4 flex flex-col items-center justify-center gap-2 h-20 w-20 md:w-24 md:h-24  rounded-md hover:rounded-lg hover:scale-110 transition-all cursor-pointer">
          <Image
            src="react-2.svg"
            alt="React.js Logo"
            width={400}
            height={400}
          />
        </div>
        <div className="bg-gray-300/10 flex flex-col items-center justify-center gap-2 h-20 w-20 md:w-24 md:h-24 p-4 rounded-md hover:rounded-lg hover:scale-110 transition-all cursor-pointer">
          <Image
            src="next-js.svg"
            alt="Next.js Logo"
            width={400}
            height={400}
          />
        </div>
        <div className="bg-gray-300/10 flex flex-col items-center justify-center gap-2 h-20 w-20 md:w-24 md:h-24 p-4 rounded-md hover:rounded-lg hover:scale-110 transition-all cursor-pointer">
          <Image src="vue-9.svg" alt="Vue.js Logo" width={400} height={400} />
        </div>
        <div className="bg-gray-300/10 flex flex-col items-center justify-center gap-2 h-20 w-20 md:w-24 md:h-24 p-4 rounded-md hover:rounded-lg hover:scale-110 transition-all cursor-pointer">
          <Image
            src="svelte-1.svg"
            alt="Svelte Logo"
            width={400}
            height={400}
          />
        </div>
        <div className="bg-gray-300/10 flex flex-col items-center justify-center gap-2 h-20 w-20 md:w-24 md:h-24 p-4 rounded-md hover:rounded-lg hover:scale-110 transition-all cursor-pointer">
          <Image
            src="Quasar.svg"
            alt="Quasar.js Logo"
            width={400}
            height={400}
          />
        </div>
        <div className="bg-gray-300/10 flex flex-col items-center justify-center gap-2 h-20 w-20 md:w-24 md:h-24 p-4 rounded-md hover:rounded-lg hover:scale-110 transition-all cursor-pointer">
          <Image
            src="laravel-1.svg"
            alt="Laravel Logo"
            width={400}
            height={400}
          />
        </div>
        <div className="bg-gray-300/10 flex flex-col items-center justify-center gap-2 h-20 w-20 md:w-24 md:h-24 p-4 rounded-md hover:rounded-lg hover:scale-110 transition-all cursor-pointer">
          <Image
            src="express-109.svg"
            alt="Express.js Logo"
            width={400}
            height={400}
          />
        </div>
        <div className="bg-gray-300/10 flex flex-col items-center justify-center gap-2 h-20 w-20 md:w-24 md:h-24 p-4 rounded-md hover:rounded-lg hover:scale-110 transition-all cursor-pointer">
          <Image src="expo-1.svg" alt="Expo Logo" width={400} height={400} />
        </div>
      </div>
      <div className="flex md:hidden flex-col gap-8">
        <p className=" mt-8">
          Compania noastră se specializează în crearea de site-uri și aplicații
          personalizate folosind cele mai avansate tehnologii JavaScript. Cu o
          echipă de dezvoltatori experimentați, oferim soluții inovatoare și
          performante, adaptate nevoilor fiecărui client.
        </p>
        <p>
          Utilizăm framework-uri JavaScript de ultimă generație pentru a
          construi aplicații rapide, scalabile și ușor de întreținut. Investim
          constant în formarea echipei și explorarea celor mai noi tendințe din
          industrie, asigurând astfel rezultate care depășesc așteptările și
          oferă un avantaj competitiv clienților noștri.
        </p>
      </div>
    </div>
  );
};

export default Technology;
