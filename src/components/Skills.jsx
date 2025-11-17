import './Skills.css';

export default function Skills() {
    const skills = [
        {name: "HTML", level: 90},
        {name: "CSS", level: 85},
        {name: "JavaScript", level: 80},
        {name: "ReactJS", level: 75},
        {name: "Git & GitHub", level: 70},
    ];

    return (
        <section className='skills' id='skills' data-aos='fade-right'>
            <h2>Kỹ năng của mình</h2>
            <div className='skills-content'>
                {skills.map((skill, index) => (
                    <div className='skill' key={index}>
                        <div className='skill-header'>
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>
                        <div className='progress-bar'>
                            <div className='progress' style={{width: `${skill.level}%`}}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}