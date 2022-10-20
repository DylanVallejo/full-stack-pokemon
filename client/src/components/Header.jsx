import styles from './Header.module.css'
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    
    
    
    return(
        <header id="headerSection" className={styles.headerContainer}>
        <h1 className='headerDevName'>
            <HashLink to=""><img  alt='Logo'  src={require('../img/eva-l.png')  } className={styles.imgLogo } /></HashLink>                
        </h1>
        <nav className={styles.referencesList}>
            <ul>
                <li><HashLink to="">About</HashLink></li>
                <li><HashLink smooth to="">Proyects</HashLink></li>
                <li><HashLink smooth to="">Contact</HashLink></li>
            </ul>
        </nav>
    </header>  
    )
} 

export default Header;