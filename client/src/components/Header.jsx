import styles from './Header.module.css'
import { HashLink } from 'react-router-hash-link';

export default () => {
    
    
    
    return(
        <header id="headerSection" className={styles.headerContainer}>
        <h1 className='headerDevName'>
            <HashLink to="#nameSection"><img  alt='Logo'  src={require('../img/eva-l.png')  } className={styles.imgLogo } /></HashLink>                
        </h1>
        <nav className={styles.referencesList}>
            <ul>
                <li><HashLink to="#aboutSection">About</HashLink></li>
                <li><HashLink smooth to="#proyectSection">Proyects</HashLink></li>
                <li><HashLink smooth to="#contactSection">Contact</HashLink></li>
            </ul>
        </nav>
    </header>  
    )
}