import { Link } from "react-router-dom";
import styles from './header.module.css';

function Header() {

  const estiloTitulo = {
    backgroundColor: 'blue'
  }

  return (
    <header>
      <h1 className={styles.titulo}>Meu site</h1>
      <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="">Serviços</Link></li>
            <li><Link to="">Contato</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
