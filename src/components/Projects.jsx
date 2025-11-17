import './Projects.css';

export default function Projects() {
    const projects = [
        {
            title: "Weather App",
            description: "Ứng dụng dự báo thời tiết dùng API OpenWeather, có dark mode và responsive.",
            image: "/public/projects/weather-app.png",
            link: "https://weather-app-mth.vercel.app/",
        },
        {
            title: "Notes App",
            description: "Ứng dụng tạo các ghi chú.",
            image: "/public/projects/notes-app.png",
            link: "https://mthung39.github.io/notes-app/",
        },
        {
            title: "To-do App",
            description: "Ứng dụng cho phép lưu trữ lại các công việc cần thực hiện.",
            image: "/public/projects/todo-app.png",
            link: "https://mthung39.github.io/todo-app/",
        },
        {
            title: "CV-Online",
            description: "Website CV Online cá nhân với dark mode, form liên hệ và tối ưu SEO.",
            image: "/public/projects/cv-online.png",
            link: "#",
        },
    ];

    return (
        <section className='projects' id='projects' data-aos='zoom-in'>
            <h2>Dự án của mình</h2>
            <div className='projects-container'>
                {projects.map((project, index) => (
                    <div className='project-card' key={index}>
                        <img src={project.image} alt={project.title} />
                        <div className='project-info'>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} className='btn' target='_blank'>Xem demo</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}