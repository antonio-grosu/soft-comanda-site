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
            <div>
                <Produs_Componenta
                    imagine="/website.svg"
                    imagine_alt="Website Development"
                    nume="Website Prezentare / CV Online"
                    descriere_1="Potrivit antreprenorilor, sălilor de fitness, frizeriilor, saloanelor de tatuaje, persoanelor dornice de afișare a unui CV sau Portofoliu."
                    descriere_2="Oferim imagine și prezență online, posibilitatea unui început de marketizare a unui serviciu / produs."
                />
                <Produs_Componenta
                    imagine="/website-rolls.svg"
                    imagine_alt="Website Configurator Comanda"
                    nume="Website tip Configurator"
                    descriere_1="Potrivit antreprenorului care își dorește să vândă un serviciu sau un produs la comandă."
                    descriere_2="Oferim imagine, prezentare și vânzare într-un mod exclusivist, însoțit de un manager de comenzi prin email."
                />
                <Produs_Componenta
                    imagine="/ecommerce.svg"
                    imagine_alt="Ecommerce WebApp"
                    nume="Ecommerce"
                    descriere="Descriere"
                    descriere_1="Potrivit antreprenorului care își dorește să vândă un produs cu livrare sau online."
                    descriere_2="Oferim dezvoltarea platformei propriu-zise, însoțită de o automatizare a serviciilor de Management, Gestiunea produselor și a contabilității."
                />
                <Produs_Componenta
                    imagine="/Marketing-bro.svg"
                    imagine_alt="Digital Marketing"
                    nume="Digital Marketing"
                    descriere_1="Potrivit tuturor antreprenorilor care își doresc să obțină clienți noi în mod eficient."
                    descriere_2="Oferim creare de conținut și marketing digital prin intermediul platformelor Google și Facebook."
                />
                <Produs_Componenta
                    imagine="/management.svg"
                    imagine_alt="Automatizare Management"
                    nume="Automatizarea serviciilor de Management & Gestiune"
                    descriere_1="Potrivit antreprenorilor cu angajați, clienți sau stoc."
                    descriere_2="Oferim posibilitatea de scalabilitate a companiei prin automatizarea administrării și a managementului."
                />
                <Produs_Componenta
                    imagine="/digitalizare.svg"
                    imagine_alt="Digitalizare Servicii"
                    nume="Automatizarea serviciilor oferite de către companie în mediul digital"
                    descriere_1="Potrivit domeniului de securitate, vânzare sau producție."
                    descriere_2="Oferim scalabilitate, reducerea timpului, a costurilor și a erorii umane. Nu eliminăm omul, ci îl eficientizăm și îl ajutăm."
                />
                <Produs_Componenta
                    imagine="/IT.svg"
                    imagine_alt="Servicii IT"
                    nume="Servicii IT"
                    descriere_1="Potrivit oricărui antreprenor."
                    descriere_2="Oferim suport tehnic însoțit de propriile produse dezvoltate la comandă pentru nevoile clientului."
                />
            </div>
        </div>
    );
};

const Produs_Componenta = (props) => {
    const { nume, descriere_1, descriere_2, imagine, imagine_alt } = props;
    return (
        <>
            <div className=" pt-1 mb-4 md:mb-12 bg-teal-500/40 rounded-full w-3/12 md:w-1/12"></div>
            <div className="md:mb-24 mb-16 flex md:flex-row items-center  w-full flex-col gap-8">
                <div className="w-1/2">
                    {imagine && (
                        <div className="w-7/12 md:flex p-2 hidden  rounded-md items-center justify-center">
                            <Image
                                alt={imagine_alt}
                                src={imagine}
                                width={500}
                                height={500}
                            ></Image>
                        </div>
                    )}
                </div>
                <div className="md:w-1/2">
                    <h3 className="md:mb-4 mb-12  md:text-left text-center font-semibold text-2xl">
                        {nume}
                    </h3>
                    {imagine && (
                        <div className="w-full mb-12 md:mb-0 md:hidden  rounded-xl flex p-2 items-center justify-center">
                            <Image
                                alt={imagine_alt}
                                src={imagine}
                                className="mb-4"
                                width={500}
                                height={500}
                            ></Image>
                        </div>
                    )}
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
