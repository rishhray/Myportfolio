import { ExternalLink, FileText, Github } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Project } from "@/content/site";

export function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-popover sm:max-w-2xl">
        {project && (
          <>
            <DialogHeader>
              <p className="eyebrow">Project {project.number} · {project.status}</p>
              <DialogTitle className="text-2xl">{project.title}</DialogTitle>
              <DialogDescription>{project.description}</DialogDescription>
            </DialogHeader>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{t}</span>
              ))}
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {([
                ["Objectives", project.objectives],
                ["My role", project.role],
                ["Approach", project.approach],
                ["Tools used", project.tools],
                ["Key learnings", project.learnings],
              ] as const).map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border bg-surface p-4">
                  <dt className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">{k}</dt>
                  <dd className="text-sm text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
              {project.screenshots.length ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.screenshots.map((s) => <img key={s} src={s} alt="" loading="lazy" className="rounded-lg" />)}
                </div>
              ) : (
                "Screenshots coming soon."
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              {([
                ["Demo", project.links.demo, ExternalLink],
                ["GitHub", project.links.github, Github],
                ["Document", project.links.document, FileText],
              ] as const).map(([label, href, Icon]) =>
                href ? (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm hover:border-primary">
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                ) : (
                  <span key={label} className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground opacity-60">
                    <Icon className="h-4 w-4" /> {label} — link coming soon
                  </span>
                ),
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
