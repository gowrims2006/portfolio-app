export default function About() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-12 text-center">
                    About <span className="text-blue-400">Me</span>
                </h1>

                {/* Personal Summary */}
                <section className="mb-12 bg-gray-800/50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-4 text-blue-400">Personal Summary</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I'm Gowri M S, a passionate Full Stack Developer with expertise in React, Next.js, and Node.js.
                        I love building scalable web applications and solving real-world problems through code.
                    </p>
                </section>

                {/* Education Details - MD Requirement */}
                <section className="mb-12 bg-gray-800/50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-6 text-blue-400">Education</h2>
                    <div className="space-y-6">
                        <div className="border-l-4 border-blue-400 pl-6">
                            <h3 className="text-2xl font-semibold">B.Tech - Computer Science</h3>
                            <p className="text-blue-300 text-lg">College of Engineering Kidangoor</p>
                            <p className="text-gray-400">2024 - 2028 | CGPA: 8.5/10</p>
                        </div>
                    </div>
                </section>

                {/* Technical Skills */}
                <section className="mb-12 bg-gray-800/50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-6 text-blue-400">Technical Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {['React.js', 'Next.js', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Git'].map((skill) => (
                            <div key={skill} className="bg-blue-500/20 text-blue-300 py-3 px-4 rounded-lg text-center font-semibold">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Career Objective - MD Requirement */}
                <section className="bg-gray-800/50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-4 text-blue-400">Career Objective</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        To secure a challenging position as a Full Stack Developer where I can utilize my skills in
                        modern web technologies to build innovative solutions and grow professionally.
                    </p>
                </section>
            </div>
        </main>
    )
}