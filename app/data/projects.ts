export interface Project {
  id: number;
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  image: string; // square thumbnail for carousel
  screenshot: string; // large hero image
  repoUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "color-correct",
    title: "Color-Correct",
    summary: "An interactive platform teaching photo-editing and visual literacy through real-time tutorials and a built-in image editor.",
    tech: ["Python","HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
    screenshot: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&h=800&fit=crop",
    repoUrl: "https://github.com/z-hmn/Color-Correct"
  },
  {
    id: 2,
    slug: "water-sort-puzzle",
    title: "Water Sort Puzzle Solver",
    summary: "Programmatic solution for Water Sort Puzzle mobile phone game",
    tech: ["Java"],
    image: "/water-sort.png",
    screenshot: "/water-sort.png",
    repoUrl: "https://github.com/z-hmn/WaterSortPuzzle"
  },
  {
    id: 3,
    slug: "life-saver",
    title: "LifeSaver",
    summary: "?",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    screenshot: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=800&fit=crop",
    repoUrl: "https://github.com/z-hmn/LifeSaver"
  },
  {
    id: 4,
    slug: "portfolio",
    title: "Personal Portfolio",
    summary: "Personal portfolio website built with Remix and Tailwind CSS",
    tech: ["Remix", "React", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551018432-2f5a1f6a6e04?w=400&h=400&fit=crop",
    screenshot: "https://images.unsplash.com/photo-1551018432-2f5a1f6a6e04?w=1400&h=800&fit=crop",
    repoUrl: "https://github.com/z-hmn/portfolio",
    liveUrl: "https://zoehoman.com"
  }
];

