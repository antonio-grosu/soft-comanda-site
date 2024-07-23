// fiecare produs
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <div className="py-24">
      <h1 className="text-4xl md:text-4xl mb-12 font-semibold slide-in">
        Soluțiile Noastre{" "}
      </h1>

      {/* lista produse  */}
      <div className="flex flex-col md:gap-24 gap-16">
        <Produs_Componenta
          nume="Website Prezentare / CV Online"
          descriere_1="Potrivit antreprenorilor, sălilor de fitness, frizeriilor, saloanelor de tatuaje, persoanelor dornice de afișare a unui CV sau Portofoliu."
          descriere_2="Oferim imagine și prezență online, posibilitatea unui început de marketizare a unui serviciu / produs."
        />
        <Produs_Componenta
          nume="Website tip Configurator"
          descriere_1="Potrivit antreprenorului care își dorește să vândă un serviciu sau un produs la comandă."
          descriere_2="Oferim imagine, prezentare și vânzare într-un mod exclusivist, însoțit de un manager de comenzi prin email."
        />
        <Produs_Componenta
          nume="Ecommerce"
          descriere="Descriere"
          descriere_1="Potrivit antreprenorului care își dorește să vândă un produs cu livrare sau online."
          descriere_2="Oferim dezvoltarea platformei propriu-zise, însoțită de o automatizare a serviciilor de Management, Gestiunea produselor și a contabilității."
        />
        <Produs_Componenta
          nume="Digital Marketing"
          descriere_1="Potrivit tuturor antreprenorilor care își doresc să obțină clienți noi în mod eficient."
          descriere_2="Oferim creare de conținut și marketing digital prin intermediul platformelor Google și Facebook."
        />
        <Produs_Componenta
          nume="Automatizarea serviciilor de Management & Gestiune"
          descriere_1="Potrivit antreprenorilor cu angajați, clienți sau stoc."
          descriere_2="Oferim posibilitatea de scalabilitate a companiei prin automatizarea administrării și a managementului."
        />
        <Produs_Componenta
          nume="Automatizarea serviciilor oferite de către companie în mediul digital"
          descriere_1="Potrivit domeniului de securitate, vânzare sau producție."
          descriere_2="Oferim scalabilitate, reducerea timpului, a costurilor și a erorii umane. Nu eliminăm omul, ci îl eficientizăm și îl ajutăm."
        />
        <Produs_Componenta
          nume="Servicii IT"
          descriere_1="Potrivit oricărui antreprenor."
          descriere_2="Oferim suport tehnic însoțit de propriile produse dezvoltate la comandă pentru nevoile clientului."
        />
      </div>
    </div>
  );
};

const Produs_Componenta = (props) => {
  const { nume, descriere_1, descriere_2, imagine } = props;
  return (
    <>
      <div className="hidden md:block pt-1 bg-teal-500/40 rounded-full w-1/12"></div>
      <div className="flex md:flex-row  w-full flex-col gap-8">
        <div className="w-0">
          {/* {imagine ? (
            <Image src={imagine} width={400} height={400}></Image>
          ) : (
            <div className="w-56 h-56 rounded-md hidden md:block bg-black/10"></div>
          )} */}
        </div>
        <div className="w-full">
          <h3 className="md:mb-4 mb-12  md:text-left text-center font-semibold text-2xl">
            {nume}
          </h3>
          {/* {imagine ? (
            <Image
              src={imagine}
              className="md:hidden mb-4"
              width={400}
              height={400}
            ></Image>
          ) : (
            <div className=" md:hidden w-44 h-44 p-1 mb-12 md:mb-4  mx-auto bg-black/10 rounded-md"></div>
          )} */}
          <p className="text-center md:text-left">{descriere_1}</p>
          <p className="text-center md:text-left mt-4 mb-4">{descriere_2}</p>
          {/* <Link
            href="/"
            className=" border-2 px-4 transition-all hover:rounded-2xl bg-teal-500/10 border-teal-500/50 py-1 rounded-md font-bold "
          >
            Exemplu Live
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Products;
