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
    slug: "creative-design",
    title: "Creative Design Project",
    summary: "A showcase of modern design principles across layout, color, and motion.",
    tech: ["Figma", "Illustrator", "After Effects"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
    screenshot: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&h=800&fit=crop",
    repoUrl: "https://github.com/example/creative-design"
  },
  {
    id: 2,
    slug: "digital-art-collection",
    title: "Digital Art Collection",
    summary: "Exploring digital mediums and techniques in a cohesive series.",
    tech: ["Procreate", "Photoshop"],
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
    screenshot: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1400&h=800&fit=crop",
    repoUrl: "https://github.com/example/digital-art"
  },
  {
    id: 3,
    slug: "interactive-experience",
    title: "Interactive Experience",
    summary: "User-centered interaction prototype with playful animations.",
    tech: ["React", "Framer Motion", "TypeScript"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    screenshot: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=800&fit=crop",
    repoUrl: "https://github.com/example/interactive-experience",
    liveUrl: "https://example.com/interactive-experience"
  },
  {
    id: 4,
    slug: "visual-storytelling",
    title: "Visual Storytelling",
    summary: "Narrative through visual elements; a study in composition and mood.",
    tech: ["Lightroom", "Premiere Pro"],
    image: "https://images.unsplash.com/photo-1551018432-2f5a1f6a6e04?w=400&h=400&fit=crop",
    screenshot: "https://images.unsplash.com/photo-1551018432-2f5a1f6a6e04?w=1400&h=800&fit=crop",
    repoUrl: "https://github.com/example/visual-storytelling"
  }
];

