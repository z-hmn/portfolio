import type { LoaderFunctionArgs, MetaFunction } from "@vercel/remix";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { projects } from "~/data/projects";
import { ProjectDetailBody } from "~/components/ProjectDetailBody";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ project });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: "Project | Zoe Homan" }];
  return [
    { title: `${data.project.title} | Zoe Homan` },
    { name: "description", content: data.project.summary },
  ];
};

export default function ProjectPage() {
  const { project } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen gradient-hero py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white/90 rounded-xl shadow-xl overflow-hidden">
        <ProjectDetailBody project={project} />
        <div className="px-6 pb-8">
          <Link to="/" className="inline-block mt-2 px-4 py-2 bg-cream text-gray-900 rounded-md hover:bg-[#f7f0c9]">
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}


