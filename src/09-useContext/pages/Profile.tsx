import { useContext } from "react";

import { Button } from "@/components/ui/button"
import { 
  ArrowLeftCircleIcon, 
  BadgeCheck, 
  Briefcase, 
  MapPin,
   Mail,
  Phone,
  Globe,
  CalendarDays,
  LogOutIcon,
  } from "lucide-react"
import { Link } from "react-router"
import { UserContext } from "../context/UserContext";


function StatItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center gap-0.5 px-4 py-1">
      <span className="font-serif text-2xl font-semibold text-foreground">
        {value.toLocaleString()}
      </span>
      <span className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

function ContactRow({
  icon: Icon,
  children,
}: {
  icon: React.ElementType
  children: React.ReactNode
}) {
  return (
    <li className="flex items-center gap-3 text-sm">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span className="truncate text-foreground">{children}</span>
    </li>
  )
}

export const Profile = () => {
 const { user, logout } = useContext( UserContext );

 return (
    <article className="w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      {/* Header banner */}
      <div className="h-28 bg-primary/15 sm:h-32" aria-hidden="true" />

      <div className="px-6 pb-6 sm:px-8 sm:pb-8">
        {/* Avatar + identity */}
        <div className="-mt-14 flex flex-col gap-4 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <img
              src="https://cdn.pixabay.com/animation/2023/06/13/15/13/15-13-11-358_512.gif"
              alt={`Portrait of ${user?.name}`}
              width={128}
              height={128}
              className="size-28 rounded-full border-4 border-card object-cover sm:size-32"
            />
            <div className="pb-1">
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-2xl font-semibold text-foreground">
                  {user?.name}
                </h1>
                <BadgeCheck
                  className="size-5 text-primary"
                  aria-label="Verified"
                />
              </div>
              <p className="text-muted-foreground">{user?.title}</p>
            </div>
          </div>
          <div className="flex gap-2 pb-1">
            <Button size="sm">Connect</Button>
            <Link to='/'>
              <Button size="sm" variant="outline" className='text-black'>
                <ArrowLeftCircleIcon />
                Back
              </Button>
            </Link>
            <Button size="sm" 
                    variant="destructive" 
                    onClick={logout}
            >
              <LogOutIcon />
              Salir
            </Button>
          </div>
        </div>

        {/* Tags */}
        <ul className="mt-5 flex flex-wrap gap-2">
          {user?.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Stats */}
        <div className="mt-6 flex items-center justify-around rounded-2xl border border-border bg-muted/30 py-3">
          <StatItem label="Projects" value={user?.stats?.projects ?? 0} />
          <div className="h-8 w-px bg-border" aria-hidden="true" />
          <StatItem label="Connections" value={user?.stats?.connections ?? 0} />
          <div className="h-8 w-px bg-border" aria-hidden="true" />
          <StatItem label="Reviews" value={user?.stats?.reviews ?? 0} />
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-5">
          {/* Left column: about + experience */}
          <div className="md:col-span-3 md:order-1 order-2 flex flex-col gap-8">
            <section>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                About
              </h2>
              <p className="text-sm leading-relaxed text-foreground">
                {user?.about}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Experience
              </h2>
              <ol className="relative flex flex-col gap-6 border-l border-border pl-6">
                {user?.experience.map((exp, i) => (
                  <li key={`${exp.company}-${i}`} className="relative">
                    <span
                      className="absolute -left-6.75 top-1 flex size-4 items-center justify-center rounded-full border-2 border-card bg-primary"
                      aria-hidden="true"
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                      <h3 className="font-medium text-foreground">
                        {exp.role}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="flex items-center gap-1.5 text-sm text-primary">
                      <Briefcase className="size-3.5" aria-hidden="true" />
                      {exp.company}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* Right column: contact + skills */}
          <div className="md:col-span-2 md:order-2 order-1 flex flex-col gap-8">
            <section>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Contact
              </h2>
              <ul className="flex flex-col gap-3">
                <ContactRow icon={Mail}>
                  <a
                    href={`mailto:${user?.contact.email}`}
                    className="hover:text-primary hover:underline"
                  >
                    {user?.contact.email}
                  </a>
                </ContactRow>
                <ContactRow icon={Phone}>{user?.contact.phone}</ContactRow>
                <ContactRow icon={MapPin}>{user?.contact.location}</ContactRow>
                <ContactRow icon={Globe}>
                  <a
                    href={`https://${user?.contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline"
                  >
                    {user?.contact.website}
                  </a>
                </ContactRow>
                <ContactRow icon={CalendarDays}>
                  Joined {user?.contact.joined}
                </ContactRow>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Skills
              </h2>
              <ul className="flex flex-wrap gap-2">
                {user?.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </article>
  )
}