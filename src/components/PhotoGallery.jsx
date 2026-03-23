import { buildResponsiveImage } from '../utils/responsiveImage'

export function PhotoGallery({ invitation }) {
  return (
    <section className="px-3 py-4 max-[380px]:px-2.5 max-[380px]:py-3 sm:px-6 sm:py-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-center max-[380px]:mb-3 sm:mb-6">
          <p className="text-[10px] tracking-[0.24em] text-[var(--accent)] uppercase max-[380px]:tracking-[0.18em] sm:text-xs sm:tracking-[0.32em]">
            {invitation.galleryTagline}
          </p>
          <h3 className="mt-2 break-words font-[var(--font-display)] text-3xl text-[var(--ink-deep)] max-[380px]:text-[1.7rem] sm:mt-3 sm:text-4xl">
            {invitation.galleryHeading}
          </h3>
        </div>

        <div className="grid gap-3 min-[480px]:grid-cols-2 sm:gap-4 xl:grid-cols-3">
          {invitation.galleryImages?.map((src, index) => (
            <div
              key={src}
              className={`overflow-hidden rounded-[1.4rem] border border-[var(--line)] bg-white p-2.5 shadow-[0_18px_40px_rgba(27,55,114,0.08)] max-[380px]:rounded-[1.15rem] max-[380px]:p-2 sm:rounded-[1.75rem] sm:p-3 ${
                index === 0 || index === 4 ? 'xl:translate-y-8' : ''
              }`}
            >
              {(() => {
                const responsiveImage = buildResponsiveImage(src)

                return (
                  <img
                    src={responsiveImage.src}
                    srcSet={responsiveImage.srcSet}
                    sizes="(max-width: 479px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    alt={`Wedding gallery ${index + 1}`}
                    className="aspect-[4/5] w-full rounded-[1.1rem] object-cover object-top transition duration-500 hover:scale-[1.03] max-[380px]:rounded-[0.95rem] sm:h-72 sm:aspect-auto sm:rounded-[1.35rem] sm:object-center"
                    loading="lazy"
                    decoding="async"
                  />
                )
              })()}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
