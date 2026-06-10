import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/devaos40.png.asset.json";
import "@/styles/devaos40.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dev aos 40 — Programar é para todas as idades" },
      {
        name: "description",
        content:
          "Dev aos 40 é o projeto pessoal sobre começar (ou recomeçar) na programação na maturidade. Artigos, tutoriais e desabafos de quem virou dev depois dos 40.",
      },
      { property: "og:title", content: "Dev aos 40" },
      {
        property: "og:description",
        content:
          "Programar é para todas as idades. Acompanhe a jornada de virar dev depois dos 40.",
      },
      { property: "og:image", content: logo.url },
    ],
  }),
  component: Index,
});

const NAV = ["Início", "Artigos", "Tutoriais", "Sobre", "Contato"];

function Index() {
  const [active, setActive] = useState("Início");

  return (
    <div className="d40-page">
      <div className="d40-shell">
        <header className="d40-header">
          <div className="d40-header__strip" aria-hidden="true">
            <span /><span /><span /><span /><span className="flex" />
          </div>
          <div className="d40-header__row">
            <div className="d40-header__brand">
              <img
                src={logo.url}
                alt="Logo do projeto Dev aos 40"
                className="d40-header__logo"
              />
              <h1 className="d40-header__title">Dev aos 40</h1>
            </div>
            <p className="d40-header__tagline">
              Programar é para
              <br />
              todas as idades
            </p>
          </div>
        </header>

        <nav className="d40-nav" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={active === item ? "is-active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActive(item);
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        <main className="d40-main">
          <section className="d40-col">
            <h2>Começando aos quarenta</h2>
            <p>
              Este é o diário de bordo de quem decidiu mudar de carreira e
              encarar a programação na maturidade. Aqui registro o que
              aprendo, o que erro e o que me motiva a continuar — sem mágica,
              sem fórmula pronta, só{" "}
              <a href="#consistencia" className="inline">consistência</a> e{" "}
              <a href="#curiosidade" className="inline">curiosidade</a>.
            </p>
            <p>
              A ideia é construir uma trilha real, com prazos reais e dúvidas
              reais. Tudo o que eu queria ter encontrado quando comecei.
            </p>

            <dl className="d40-deflist">
              <dt>Por quê</dt>
              <dd>
                Porque trocar de área aos 40 é assustador, mas também é o
                projeto mais honesto que já encarei.
              </dd>
              <dt>Como</dt>
              <dd>
                Estudando todos os dias, publicando o que aprendo e
                conversando com quem está na mesma estrada.
              </dd>
            </dl>

            <div className="d40-footnote">
              <div className="d40-footnote__icon" aria-hidden="true">⏱</div>
              <div>
                <h3>Últimas atualizações</h3>
                <ul>
                  <li><a href="#post-1">Meu primeiro deploy em produção</a></li>
                  <li><a href="#post-2">Aprendendo TypeScript do zero</a></li>
                  <li><a href="#post-3">Como organizo meus estudos diários</a></li>
                </ul>
              </div>
            </div>
          </section>

          <div className="d40-divider" aria-hidden="true" />

          <section className="d40-col">
            <article className="d40-card">
              <h3 className="d40-card__title">Em destaque</h3>
              <h4 style={{ margin: "0 0 8px" }}>De analista a desenvolvedor</h4>
              <div className="d40-card__media">
                <div className="d40-card__thumb">FOTO</div>
                <div className="d40-card__body">
                  <p>
                    A história de uma transição de carreira que começou com
                    uma planilha de Excel e terminou no primeiro pull request
                    aceito. Spoiler: deu certo, mas demorou.
                  </p>
                </div>
              </div>
              <a className="d40-card__more" href="#leia-mais">Ler mais »</a>
            </article>

            <article className="d40-card">
              <h3 className="d40-card__title">Bastidores</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--d40-text-soft)" }}>
                Como é montar uma rotina de estudos quando você tem filhos,
                trabalho integral e cansaço acumulado. Spoiler 2: não envolve
                acordar às 5 da manhã.
              </p>
            </article>

            <div className="d40-callout">
              <div className="d40-callout__msg">
                Receba os próximos posts direto no seu e-mail, sem spam e sem
                conversa fiada.
              </div>
              <button
                type="button"
                className="d40-callout__btn"
                onClick={() => alert("Em breve: inscrição na newsletter!")}
              >
                Assinar »
              </button>
            </div>

            <article className="d40-card">
              <h3 className="d40-card__title">No estúdio</h3>
              <div className="d40-card__media">
                <div className="d40-card__thumb">SETUP</div>
                <div className="d40-card__body">
                  <p>
                    Um tour pela mesa, pelos cadernos rabiscados e pelas
                    ferramentas que mais uso no dia a dia de quem está
                    aprendendo a programar.
                  </p>
                </div>
              </div>
              <a className="d40-card__more" href="#tour">Ler mais »</a>
            </article>
          </section>
        </main>

        <div className="d40-subfoot" aria-hidden="true" />
        <footer className="d40-footer">
          <nav aria-label="Rodapé">
            {NAV.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>
          <span className="d40-footer__copy">
            © {new Date().getFullYear()} Dev aos 40 — projeto pessoal
          </span>
        </footer>
      </div>
    </div>
  );
}
