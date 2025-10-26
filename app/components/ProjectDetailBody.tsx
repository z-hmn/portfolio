import type { Project } from "~/data/projects";

export function ProjectDetailBody({ project }: { project: Project }) {
  return (
    <div className="p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        {project.title}
      </h2>
      <img
        src={project.screenshot}
        alt={`${project.title} screenshot`}
        className="w-full aspect-video object-cover rounded-lg mb-6"
      />
      <p className="text-gray-700 leading-relaxed mb-6">{project.summary}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
        >
          View Code
        </a>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500"
          >
            Live Demo
          </a>
        ) : null}
      </div>
    </div>
  );
}


