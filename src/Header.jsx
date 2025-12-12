import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">

        <Link to="/" className="header-logo">
          ALEX MORENO MARTINEZ
        </Link>

        <nav className="header-nav">
          <Link to="/" className="header-link">
            PROJECTES
          </Link>

          <Link to="/sobremi" className="header-link">
            SOBRE MI
          </Link>

            <a href="mailto:alexmoma220501@gmail.com" className="button-mail">
                CONTACTE
            </a>
          
        </nav>
      </div>
    </header>
  );
}
