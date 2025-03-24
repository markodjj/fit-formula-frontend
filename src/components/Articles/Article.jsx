import React, { useRef } from "react";

import articles from "../../data/articles.json";
import TextComponenet from "./TextComponent";
import QuoutesComponent from "./QuoutesComponent";

import "./Article.scss";
import PlanOffer from "../../components/Ad/PlanOffer";

const Article = ({ name }) => {
  const decodedArticleName = decodeURIComponent(name);
  const articleData = articles[decodedArticleName];

  const kalorijeRef = useRef();
  const proteiniRef = useRef();
  const hidratiRef = useRef();
  const mastiRef = useRef();
  const vlaknaRef = useRef();
  const zdravljeRef = useRef();
  const kilazaRef = useRef();

  const sections = [
    {
      name: "Koliko ima kalorija?",
      ref: kalorijeRef,
      submenu: [
        { name: "Koliko ima proteina?", ref: proteiniRef },
        { name: "Koliko ima ugljenih hidrata", ref: hidratiRef },
        { name: "Koliko ima masti", ref: mastiRef },
        { name: "Koliko ima vlakana", ref: vlaknaRef },
      ],
    },
    { name: "Uticaj na zdravlje", ref: zdravljeRef },
    { name: "Uticaj na kilazu", ref: kilazaRef },
  ];

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="article">
      <h1>
        {decodedArticleName}: nutritivna vrednost, uticaj na zdravlje i kilazu
      </h1>
      <div className="article-container">
        <div className="article-content">
          <img
            src="../src/assets/junetina.png"
            alt="junetina"
            className="main-photo"
          />
          {/* <p>{articleData.text1}</p> */}
          <h3>Februar 11, 2025</h3>
          <hr />
          <section>
            <TextComponenet text={articleData.text1} />
          </section>
          <hr />
          <div className="content-table">
            <h1>Tabela sadrzaja</h1>
            <ul>
              {sections.map((section, index) => (
                <li key={index}>
                  <button onClick={() => scrollToSection(section.ref)}>
                    {section.name}
                  </button>

                  {section.submenu && (
                    <ul>
                      {section.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <button onClick={() => scrollToSection(subItem.ref)}>
                            {subItem.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <hr />
          <section ref={kalorijeRef}>
            <h2>Koliko kalorija ima {decodedArticleName}?</h2>
            <p>{articleData.kalorije.p1}</p>
            <QuoutesComponent text={articleData.kalorije.k} />
            {/* <p>{articleData.kalorije.k}</p> */}
            <p>{articleData.kalorije.p2}</p>
          </section>
          <hr />
          <section ref={proteiniRef}>
            <h2>Koliko {decodedArticleName} ima proteina?</h2>
            {/* <p>{articleData.proteini}</p> */}
            <TextComponenet text={articleData.proteini} />
          </section>
          <hr />
          <section ref={hidratiRef}>
            <h2>Koliko {decodedArticleName} ima ugljenih hidrata?</h2>
            {/* <p>{articleData.hidrati}</p> */}
            <TextComponenet text={articleData.hidrati} />
          </section>
          <hr />
          <section ref={mastiRef}>
            <h2>Koliko {decodedArticleName} ima masti?</h2>
            {/* <p>{articleData.masti}</p> */}
            <TextComponenet text={articleData.masti} />
          </section>
          <hr />
          <section ref={vlaknaRef}>
            <h2>Koliko {decodedArticleName} ima vlakana?</h2>
            {/* <p>{articleData.vlakna}</p> */}
            <TextComponenet text={articleData.vlakna} />
          </section>
          <hr />
          <section ref={zdravljeRef}>
            <h2>Uticaj {decodedArticleName} na zdravlje</h2>
            <p>{articleData.zdravlje.t1}</p>
            <p>{articleData.zdravlje.k}</p>
          </section>
        </div>
        <PlanOffer planName={"Plan-ad_owvq7l"} />
      </div>
    </div>
  );
};

export default Article;
