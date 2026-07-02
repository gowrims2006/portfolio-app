export default function Contact() {
    return (
        <main className="min-h-screen bg-gray-900 text-white p-8 md:p-24">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-5xl font-bold mb-8 text-blue-400">Contact Me</h1>
                <p className="text-xl text-gray-300 mb-12">
                    Have a project in mind? Let's work together! Drop me a message.
                </p>

                <form className="space-y-6">
                    <div>
                        <label className="block text-lg mb-2">Name</label>
                        <input
                            type="text"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-400 outline-none"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label className="block text-lg mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-400 outline-none"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-lg mb-2">Message</label>
                        <textarea
                            rows="5"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-400 outline-none"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    <button
                        type="button"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition"
                    >
                        Send Message
                    </button>
                </form>

                <div className="mt-12 text-center">
                    <p className="text-gray-400 mb-4">Or reach me directly at:</p>
                    <div className="flex justify-center gap-6">
                        <a href="mailto:gowri@example.com" className="text-blue-400 hover:text-blue-300">
                            Email
                        </a>
                        <a href="https://github.com/gowri" className="text-blue-400 hover:text-blue-300">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/gowri" className="text-blue-400 hover:text-blue-300">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}