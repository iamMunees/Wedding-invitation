import { buildResponsiveImage } from '../utils/responsiveImage'

export function InvitationHero({ invitation }) {
  const coupleNames = [invitation.groom, invitation.bride].filter(Boolean)
  const heroImage = buildResponsiveImage(invitation.imageFrame)

  return (
    <section className="relative isolate overflow-hidden px-3 py-4 max-[380px]:px-2.5 max-[380px]:py-3 sm:px-6 sm:py-8 lg:px-10">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,#74b4ff_0%,#2560b8_48%,#17356d_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-50 [background-image:radial-gradient(rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="mx-auto grid max-w-6xl items-start gap-4 max-[380px]:gap-3 sm:gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div className="order-2 rounded-[1.5rem] border border-white/20 bg-white/10 p-4 shadow-[0_24px_80px_rgba(7,21,56,0.35)] backdrop-blur-md max-[380px]:rounded-[1.25rem] max-[380px]:p-3 sm:order-1 sm:rounded-[2rem] sm:p-8">
          <p className="text-[10px] tracking-[0.28em] text-[var(--gold-soft)] uppercase max-[380px]:tracking-[0.22em] sm:text-xs sm:tracking-[0.35em]">
            {invitation.overline}
          </p>
          <h1 className="mt-3 break-words font-[var(--font-display)] text-3xl leading-tight text-white max-[380px]:text-[1.7rem] sm:mt-4 sm:text-5xl lg:text-6xl">
            {invitation.titleTamil}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/88 max-[380px]:text-[0.95rem] max-[380px]:leading-6 sm:mt-6 sm:text-xl sm:leading-8">
            {invitation.note}
          </p>

          <div className="mt-5 grid gap-3 rounded-[1.35rem] bg-white/92 p-4 text-center text-[var(--ink-deep)] max-[380px]:mt-4 max-[380px]:gap-2.5 max-[380px]:rounded-[1.1rem] max-[380px]:p-3 sm:mt-8 sm:gap-4 sm:rounded-[1.75rem] sm:p-5 sm:grid-cols-2">
            {coupleNames.map((name, index) => (
              <div key={name}>
                <p className="text-[10px] tracking-[0.24em] text-[var(--accent)] uppercase max-[380px]:tracking-[0.18em] sm:text-xs sm:tracking-[0.28em]">
                  {index === 0 ? 'Groom' : 'Bride'}
                </p>
                <h2 className="mt-2 break-words font-[var(--font-display)] text-2xl leading-tight max-[380px]:text-xl sm:text-3xl">
                  {name}
                </h2>
              </div>
            ))}
            {!coupleNames.length && (
              <p className="text-xs tracking-[0.28em] text-[var(--accent)] uppercase">Groom</p>
            )}
          </div>

          <div className="mt-4 grid gap-2 text-sm text-white/90 min-[430px]:grid-cols-2 sm:mt-6 sm:flex sm:flex-wrap sm:gap-3">
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-2 text-center text-xs leading-5 max-[380px]:px-2.5 max-[380px]:py-1.5 max-[380px]:text-[11px] max-[380px]:leading-4 sm:px-4 sm:text-sm">
              {invitation.day}, {invitation.date}
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-2 text-center text-xs leading-5 max-[380px]:px-2.5 max-[380px]:py-1.5 max-[380px]:text-[11px] max-[380px]:leading-4 sm:px-4 sm:text-sm">
              {invitation.time}
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-2 text-center text-xs leading-5 min-[430px]:col-span-2 sm:col-auto max-[380px]:px-2.5 max-[380px]:py-1.5 max-[380px]:text-[11px] max-[380px]:leading-4 sm:px-4 sm:text-sm">
              {invitation.location}
            </span>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[22rem] max-[380px]:max-w-[18rem] sm:order-2 sm:max-w-md">
          <div className="absolute -inset-2 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,223,154,.34),rgba(255,255,255,.1),rgba(94,201,255,.24))] blur-xl max-[380px]:-inset-1.5 max-[380px]:rounded-[1.5rem] sm:-inset-4 sm:rounded-[2.5rem]" />
          <div className="relative overflow-hidden rounded-[2rem] border-3 border-white/60 bg-white/20 p-2 shadow-[0_24px_80px_rgba(7,21,56,0.4)] max-[380px]:rounded-[1.5rem] max-[380px]:p-1.5 sm:rounded-[2.5rem] sm:border-4 sm:p-3">
            <img
              src={heroImage.src}
              srcSet={heroImage.srcSet}
              sizes="(max-width: 380px) 288px, (max-width: 640px) 352px, (max-width: 1024px) 448px, 512px"
              alt="Wedding portrait"
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top max-[480px]:aspect-[5/6] max-[380px]:rounded-[1.2rem] sm:h-[32rem] sm:aspect-auto sm:rounded-[2rem] sm:object-center"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
