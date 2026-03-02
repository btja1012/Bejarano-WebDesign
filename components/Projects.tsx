import type { ProjectsT } from "@/lib/translations";

const GITHUB_USERNAME = "btja1012";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
}

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    return repos.filter((r) => !r.fork);
  } catch {
    return [];
  }
}

interface Props {
  t: ProjectsT;
}

export default async function Projects({ t }: Props) {
  const repos = await getRepos();

  return (
    <section id="projects" className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-white/20 text-xs tracking-[0.4em] uppercase mb-4">{t.eyebrow}</p>
        <h2 className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight">
          {t.heading}
        </h2>
        <p className="text-white/30 font-light mb-20 max-w-xl">
          {t.subheading}
        </p>

        {repos.length === 0 ? (
          <p className="text-white/20 font-light">{t.noRepos}</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black p-8 hover:bg-white/[0.03] transition-colors flex flex-col gap-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-white/70 group-hover:text-white font-light transition-colors leading-snug">
                    {repo.name}
                  </h3>
                  <svg
                    className="w-3.5 h-3.5 text-white/10 group-hover:text-white/40 flex-shrink-0 mt-1 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                <p className="text-white/30 text-sm font-light leading-relaxed flex-1 line-clamp-3">
                  {repo.description || "No description."}
                </p>

                <div className="flex items-center gap-5 text-white/20 text-xs">
                  {repo.language && <span>{repo.language}</span>}
                  <span>★ {repo.stargazers_count}</span>
                  <span>{repo.forks_count} {t.forks}</span>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="mt-12">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white text-xs tracking-widest uppercase transition-colors border-b border-white/10 hover:border-white/40 pb-0.5"
          >
            {t.allRepos}
          </a>
        </div>
      </div>
    </section>
  );
}
