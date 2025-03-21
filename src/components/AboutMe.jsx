function AboutMe() {
    return(
        <>
            <section className="about-me" id="aboutMe">
                <img src="https://i.pinimg.com/736x/27/87/aa/2787aa7d87076d07a131245b6fea0b9d.jpg" alt="" className="about-me__background" />
                <div className="about-me__presentation">
                    <h2>Hola soy Javier</h2>
                    <h3>Desarrollador FullStack</h3>
                    <p>Soy un programador junior apasionado por los videojuegos y el desarrollo de software. Me encanta resolver problemas y aprender nuevas herramientas para mejorar la calidad de los proyectos en los que participo.</p>
                </div>
                <div className="about-me__social">
                    Mis redes sociales
                    <i className="fa-brands fa-github"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
                <div className="scroll-arrow">
                    <i class="fa-solid fa-computer-mouse"></i>
                </div>
            </section>
        </>
    )
}

export default AboutMe