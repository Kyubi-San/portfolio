import { useState } from "react"

function Projects() {
    const [projectClicked, setProjectClicked] = useState(0)
    const [mensaje, setMensaje] = useState()
    const [descripcion, setDescripcion] = useState()
    const [repository, setRepository] = useState()
    const handleProject = (index) => {
        setProjectClicked(index)
        switch (index) {
            case 1:
                setDescripcion('Red social')
                setMensaje('Uno de los primeros proyectos que realicé en PHP, lo adapté para que fuese compatible con React y así sea más fácil y rápido el desarrollo del proyecto')
                break;
            case 2:
                setDescripcion('Sistema gestion de bienes y solicitudes')
                setRepository('https://github.com/Kyubi-San/Proyecto-gestion-peticion-bienes')
                setMensaje('Mi proyecto de la universidad realizado en PHP para la contraloria de mi ciudad para el manejo de los bienes en cada dependencia dentro de la compañia con funciones para retirar y hacer solicitudes para la incorporacion de nuevos bienes')
                break;
            case 3:
                setDescripcion('Red social')
                setMensaje('')
                break;
        
            default:
                break;
        }
    }
    return(
        <>
            <section className="projects" id="projects">
                <div className="projects__gallery">
                    <div className={`projects__gallery-item ${projectClicked === 1 ? 'projects__gallery-item--clicked' : ''}`}>
                        <img src="https://i.pinimg.com/736x/b0/34/5f/b0345f2c99f866264a25502b98a5f4f8.jpg" alt="" className="projects__gallery-item-img" onClick={() => handleProject(1)}/>
                    </div>
                    <div className={`projects__gallery-item ${projectClicked === 2 ? 'projects__gallery-item--clicked' : ''}`}>
                        <span className={`projects__gallery-name ${projectClicked === 1 && 'visible'}`}>GameTaTe React</span>
                        <span className={`projects__gallery-name ${projectClicked === 3 && 'visible'}`}>GameTaTe PHP</span>
                        <img src="https://github.com/Kyubi-San/portfolio/blob/main/public/images/logo-sistema.png?raw=true" alt="" className="projects__gallery-item-img" onClick={() => handleProject(2)}/>
                    </div>
                    <div className={`projects__gallery-item ${projectClicked === 3 ? 'projects__gallery-item--clicked' : ''}`}>
                        <span className={`projects__gallery-name ${projectClicked === 2 && 'visible'}`}>Sistema gestion - solicitud de bienes</span>
                        <img src="https://i.pinimg.com/736x/ee/15/28/ee15285faa7b7e95aec44193795450d1.jpg" alt="" className="projects__gallery-item-img" onClick={() => handleProject(3)}/>
                    </div>
                </div>
                { projectClicked !== 0 && 
                <div className="projects__info">
                    <div className="projects__preview">
                        <div className="projects__preview-info">
                            <h3>{descripcion}</h3>
                            <a href={repository} className="projects__preview-source"
                            target="_blank"><i class="fa-brands fa-square-github"></i></a>    
                        </div>                 
                        <div className="projects__technologies">
                            <h2>Tecnologias utilizadas:</h2>
                            <div className="projects__technologies-languages">
                                <span><i className="fa-brands fa-react"></i> React</span>
                                <span>
                                    <i className="fa-brands fa-js"></i> JavasScript
                                </span>
                                <span><i className="fa-brands fa-css3-alt"></i> CSS</span>
                            </div>
                            <p>{mensaje}</p>
                        </div>
                        <picture className="projects__preview-gallery">
                            <img src="/public/images/sibcmg_1.png" alt="" />

                            <img src="public/images/sibcmg_2.png" alt="" />

                            <img src="public/images/sibcmg_3.png" alt="" />

                            <img src="public/images/sibcmg_4.png" alt="" />
                        </picture>
                        <div className="projects__preview-div">
                            <a href="" className="projects__preview-button">Iniciar</a>
                        </div>
                    </div>
                </div> }
            </section>
        </>
    )
}

export default Projects