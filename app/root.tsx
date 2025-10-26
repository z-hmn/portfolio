import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import { useLocation, useMatches, Outlet as RemixOutlet } from "@remix-run/react";
import { useEffect } from "react";
import Modal from "./components/Modal";
import { projects } from "./data/projects";
import { ProjectDetailBody } from "./components/ProjectDetailBody";
import HomePage from "./routes/_index";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}

export default function App() {
  return <RoutesWithModal />;
}

function RoutesWithModal() {
  const location = useLocation();
  const state = (location.state as { modal?: boolean; background?: any } | undefined) ?? undefined;
  const backgroundLocation = state?.modal && state.background ? state.background : undefined;
  const matches = useMatches();
  const slugMatch = matches.find((m) => m.id?.includes("routes/projects.$slug"));
  const projectSlug = slugMatch?.params?.slug as string | undefined;
  const project = projectSlug ? projects.find((p) => p.slug === projectSlug) : undefined;

  useEffect(() => {
    if (state?.modal) {
      // Ensure the background shows the Projects section
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
      }
    }
  }, [state?.modal]);

  if (state?.modal && project) {
    return (
      <>
        <HomePage />
        <Modal isOpen={true} onClose={() => history.back()} ariaLabel={project.title}>
          <ProjectDetailBody project={project} />
        </Modal>
      </>
    );
  }

  return <RemixOutlet />;
}
