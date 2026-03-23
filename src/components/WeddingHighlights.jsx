function DetailCard({ label, value }) {
  return (
    <article className="rounded-[1.25rem] border border-[var(--line)] bg-white/85 p-4 shadow-[0_18px_40px_rgba(27,55,114,0.08)] sm:rounded-[1.75rem] sm:p-5">
      <p className="text-[10px] tracking-[0.22em] text-[var(--accent)] uppercase sm:text-xs sm:tracking-[0.3em]">
        {label}
      </p>
      <p className="mt-2 break-words font-[var(--font-display)] text-xl leading-tight text-[var(--ink-deep)] sm:mt-3 sm:text-2xl">
        {value}
      </p>
    </article>
  )
}

export function WeddingHighlights({ invitation }) {
  return (
    <section className="px-3 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[.95fr_1.05fr]">
          <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,#f6fbff_0%,#e8f3ff_100%)] p-4 sm:rounded-[2rem] sm:p-8">
            <p className="text-[10px] tracking-[0.24em] text-[var(--accent)] uppercase sm:text-xs sm:tracking-[0.3em]">
              {invitation.detailsTagline}
            </p>
            <h3 className="mt-3 font-[var(--font-display)] text-3xl leading-tight text-[var(--ink-deep)] sm:text-4xl">
              {invitation.detailsHeading}
            </h3>
            <p className="mt-3 max-w-xl text-base leading-7 text-[var(--ink-muted)] sm:mt-4 sm:text-lg sm:leading-8">
              {invitation.parents}
            </p>

            <div className="mt-5 grid gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-2">
              <DetailCard label="Date" value={`${invitation.day}, ${invitation.date}`} />
              <DetailCard label="Time" value={invitation.time} />
              <DetailCard label="Venue" value={invitation.venue} />
              <DetailCard label="Place" value={invitation.location} />
            </div>
          </div>

          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
            {invitation.coupleImages?.map((image) => (
              <article
                key={image.src}
                className="overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-white p-2.5 shadow-[0_18px_40px_rgba(27,55,114,0.08)] sm:rounded-[2rem] sm:p-3"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-64 w-full rounded-[1.2rem] object-cover sm:h-80 sm:rounded-[1.5rem]"
                />
                <p className="px-2 pb-1 pt-3 text-center text-[11px] tracking-[0.18em] text-[var(--accent)] uppercase sm:pb-2 sm:pt-4 sm:text-sm sm:tracking-[0.25em]">
                  {image.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
