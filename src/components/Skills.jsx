function Skills() {
    return(
        <>
        <div className="skills">
            <h2>Habilidades</h2>
            <div className="skills-container">
                <div className="skill">
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="skill">
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                    </ul>
                </div>
                <div className="skill">
                    <h3>Bases de datos</h3>
                    <ul>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
            </div>
            <div className="skills-container">
                <div className="soft-skill">
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Trabajo en equipo</li>
                        <li>Comunicación</li>
                        <li>Resolución de problemas</li>
                        <li>Adaptabilidad</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills