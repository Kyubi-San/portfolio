import { useState } from "react"

function Header() {
    const [linkClicked, setLinkClicked] = useState(1)
    const handleLink = (index) => {
        setLinkClicked(index)
    }
    return(
        <>
        <nav className="nav">
            <ul className="nav__ul">
                <li className='nav__ul-item'><a href="#aboutMe" className={`nav__ul-item-link ${linkClicked === 1 ? 'nav__ul-item--clicked' : ''}`} id="about-me" onClick={() => handleLink(1)}>Acerca de mi</a></li>
                <li className='nav__ul-item'><a href="#projects" className={`nav__ul-item-link ${linkClicked === 2 ? 'nav__ul-item--clicked' : ''}`} onClick={() => handleLink(2)}>Proyectos</a></li>
                <li className='nav__ul-item'><a href="#skills" className={`nav__ul-item-link ${linkClicked === 3 ? 'nav__ul-item--clicked' : ''}`} onClick={() => handleLink(3)}>Habilidades</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Header