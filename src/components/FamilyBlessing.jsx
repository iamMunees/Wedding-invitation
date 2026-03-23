export function FamilyBlessing({ invitation }) {
  const coupleLine = [invitation.groom, invitation.bride].filter(Boolean).join(' & ')

  return (
    <footer className="px-3 py-8 max-[380px]:px-2.5 max-[380px]:py-6 sm:px-6 sm:py-12 lg:px-10">
      <div className="mx-auto max-w-5xl rounded-[1.6rem] bg-[linear-gradient(135deg,#14346f_0%,#2158b3_52%,#56a7ff_100%)] px-4 py-7 text-center text-white shadow-[0_24px_80px_rgba(7,21,56,0.35)] max-[380px]:rounded-[1.25rem] max-[380px]:px-3 max-[380px]:py-6 sm:rounded-[2.25rem] sm:px-10 sm:py-10">
        <p className="text-[10px] tracking-[0.26em] text-[var(--gold-soft)] uppercase max-[380px]:tracking-[0.18em] sm:text-xs sm:tracking-[0.34em]">
          {invitation.footerTagline}
        </p>
        <h3 className="mt-3 break-words font-[var(--font-display)] text-3xl leading-tight max-[380px]:text-[1.7rem] sm:mt-4 sm:text-5xl">
          {coupleLine}
        </h3>
        <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-white/88 max-[380px]:text-[0.95rem] max-[380px]:leading-6 sm:mt-4 sm:text-lg sm:leading-8">
          {invitation.note}
        </p>
        <p className="mt-5 text-[11px] tracking-[0.2em] text-white/80 uppercase max-[380px]:mt-4 max-[380px]:tracking-[0.14em] sm:mt-6 sm:text-sm sm:tracking-[0.28em]">
          {invitation.day}, {invitation.date}
        </p>
      </div>
    </footer>
  )
}
