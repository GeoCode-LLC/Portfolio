import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectDetail } from "@/components/ProjectDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="relative">
      <Header />
      <ProjectDetail project={project} />
      <Footer />
    </main>
  );
}
