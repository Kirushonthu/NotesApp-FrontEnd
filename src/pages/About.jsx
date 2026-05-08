const About = () => {
  const stack = [
    { icon: "ti-brand-react", name: "React", desc: "Frontend UI with React Router for navigation", color: "#378ADD" },
    { icon: "ti-server", name: "Node.js & Express", desc: "REST API backend with JWT authentication", color: "#3B6D11" },
    { icon: "ti-database", name: "MongoDB Atlas", desc: "Cloud database with Mongoose ODM", color: "#1D9E75" },
    { icon: "ti-brand-vercel", name: "Vercel", desc: "Frontend hosting with auto-deploy from GitHub", color: "#000" },
    { icon: "ti-cloud", name: "Render", desc: "Backend hosting with Node.js runtime", color: "#534AB7" },
    { icon: "ti-palette", name: "Tailwind CSS", desc: "Utility-first styling for responsive UI", color: "#D85A30" },
  ];

  const features = [
    "User signup & login with JWT authentication",
    "Create, read, update, and delete notes",
    "Protected routes — only your notes are visible",
    "Fully responsive design for all screen sizes",
    "Cloud-hosted frontend, backend, and database",
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">

      <div className="mb-8">
        <p className="text-sm text-gray-400 mb-1">Full stack web application</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-3">NotesApp</h1>
        <p className="text-gray-500 leading-relaxed">
          A full stack notes application where users can securely register, log in,
          and manage their personal notes — create, update, and delete — all stored in the cloud.
        </p>
      </div>

      <div className="border-t pt-6 mb-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Tech Stack</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {stack.map((item) => (
            <div key={item.name} className="border rounded-xl p-4 bg-white">
              <i className={`ti ${item.icon} text-2xl`} style={{ color: item.color }} />
              <p className="font-semibold text-gray-800 mt-2 mb-1">{item.name}</p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-6 mb-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Features</p>
        <ul className="space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-green-500">✓</span> {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t pt-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">K</div>
          <div>
            <p className="font-semibold text-gray-800">Kishore</p>
            <p className="text-xs text-gray-500">Full Stack Developer</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;