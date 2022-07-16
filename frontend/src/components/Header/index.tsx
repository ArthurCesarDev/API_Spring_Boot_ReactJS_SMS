import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return(
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="Gestão" />
            <h1>Gestão</h1>
            <p>
              Desenvolvido por
              <a href="https://www.linkedin.com/in/arthur-cesar-842587164/"> Arthur Cesar</a>
            </p>
        </div>
    </header>
    
        )

    }
    
    export default  Header
    
