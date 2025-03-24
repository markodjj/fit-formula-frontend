import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../components/User/LoginButton";
import { LogOutButton } from "../components/User/LogOutButton";

import "./Home.scss";
import FetchedImage from "../components/FetchedImage";

const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="home-page">
      {/* Home
      {isAuthenticated ? (
        <>
          {}
          <p>Welcome {user.email}</p>

          <LogOutButton />
        </>
      ) : (
        <>
          <LoginButton />
        </>
      )} */}
      <div className="container">
        <div className="article-info">
          <div className="text-container">
            <h1>Tvoje Zdravlje, Tvoj Izbor</h1>
            <h2>Pravilna Ishrana Na Jednom Mestu!</h2>
            <p>
              Dobrodošli na Fit Formulu, mesto gde zdrava ishrana postaje
              jednostavna i prilagođena baš vama! Bez obzira na to da li želite
              da smršate, izgradite mišiće ili jednostavno vodite računa o unosu
              kalorija i makronutrijenata, ovde ćete pronaći sve što vam je
              potrebno za donošenje pametnih odluka o ishrani.
            </p>
            <h2> Alati koji vam pomažu da ostvarite svoje ciljeve</h2>
            <p>
              Kalkulatori za precizno određivanje vaših potreba Izračunajte
              koliko kalorija vašem telu zaista treba pomoću BMR i TDEE
              kalkulatora. Na osnovu vašeg pola, starosti, visine, težine i
              nivoa fizičke aktivnosti dobićete personalizovane podatke koji će
              vam pomoći da postignete željene rezultate – bilo da želite
              gubitak kilograma, održavanje trenutne težine ili povećanje
              mišićne mase.
            </p>
            <div>
              <p>
                Detaljne nutritivne tabele Zanima vas koliko kalorija ima u
                omiljenim namirnicama? Ili želite da znate koliko proteina
                unosite kroz obroke? Naša baza sadrži nutritivne informacije za
                preko 50 namirnica, uključujući:
              </p>
              <ul>
                <li>Kalorije (kCal)</li>
                <li>Proteine</li>
                <li>Ugljene hidrate</li>
                <li>Masti</li>
                <li>Vrstu namirnice i makronutrijente </li>
              </ul>
              Sve informacije su prikazane jasno i pregledno kako biste lako
              mogli da planirate obroke i unos nutrijenata.
            </div>
            <p>
              Upoređivanje nutritivnih vrednosti Ne možete da se odlučite između
              različitih namirnica? Dodajte ih u našu tabelu za upoređivanje i
              saznajte koja opcija je bolja za vašu ishranu. Bilo da birate
              između različitih vrsta mesa, mlečnih proizvoda, povrća ili voća –
              sa našim uporednim prikazom, odluka će biti lakša nego ikad!{" "}
            </p>
            <h2> Prijavite se i dobijte personalizovanu podršku </h2>
            <div>
              <p>
                Ne morate biti sami na svom putu ka zdravijem načinu života!
                Registracijom na sajtu dobijate pristup chatu sa nutricionistom
                ili trenerom, gde možete postavljati pitanja, dobijati savete i
                prilagođene preporuke na osnovu vaših ciljeva i potreba.{" "}
              </p>
              <ul>
                <li>
                  Želite da smršate, ali ne znate kako da prilagodite ishranu?
                </li>
                <li>
                  Pokušavate da izgradite mišiće, ali niste sigurni koliko
                  proteina vam je potrebno?
                </li>
                <li>
                  Treba vam plan ishrane koji odgovara vašem životnom stilu?
                </li>
              </ul>
              Naši stručnjaci su tu da pomognu!
            </div>
            <h2>Počnite odmah! </h2>
            <div>
              <p>
                Zdrav način života počinje sa pravim informacijama i alatima
                koji vam olakšavaju put do cilja. Na Fit Formuli imate sve što
                vam je potrebno za praćenje ishrane, planiranje obroka i
                donošenje boljih odluka o svom zdravlju.
              </p>
              <ul>
                <li>Registrujte se danas i otkrijte moć pravilne ishrane!</li>
                <li>
                  Iskoristite naše alate i resurse i preuzmite kontrolu nad
                  svojim zdravljem!
                </li>
              </ul>
              Pridružite nam se i napravite prvi korak ka boljem životu!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
