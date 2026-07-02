export default function Projects() {
    const projects = [
        {
            title: "Portfolio Website",
            desc: "My personal portfolio built with Next.js 16 and Tailwind CSS",
            tech: ["Next.js", "React", "Tailwind"],
            link: "#"
        },
        {
            title: "E-Commerce App",
            desc: "Full stack shopping app with cart and payment integration",
            tech: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            title: "Task Manager",
            desc: "Simple and clean todo app with drag-drop features",
            tech: ["React", "JavaScript", "CSS"],
            link: "#"
        }
    ]

    return (
        <main className="min-h-screen bg-gray-900 text-white p-8 md:p-24">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold mb-12 text-blue-400">My Projects</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition duration-300">
                            <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                            <p className="text-gray-300 mb-4">{project.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="bg-blue-500 text-xs px-3 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} className="text-blue-400 hover:text-blue-300 font-semibold">
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}