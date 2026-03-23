export function PhotoGallery({ invitation }) {
  return (
    <section className="px-3 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-center sm:mb-6">
          <p className="text-[10px] tracking-[0.24em] text-[var(--accent)] uppercase sm:text-xs sm:tracking-[0.32em]">
            {invitation.galleryTagline}
          </p>
          <h3 className="mt-2 font-[var(--font-display)] text-3xl text-[var(--ink-deep)] sm:mt-3 sm:text-4xl">
            {invitation.galleryHeading}
          </h3>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
          {invitation.galleryImages?.map((src, index) => (
            <div
              key={src}
              className={`overflow-hidden rounded-[1.4rem] border border-[var(--line)] bg-white p-2.5 shadow-[0_18px_40px_rgba(27,55,114,0.08)] sm:rounded-[1.75rem] sm:p-3 ${
                index === 0 || index === 4 ? 'xl:translate-y-8' : ''
              }`}
            >
              <img
                src={src}
                alt={`Wedding gallery ${index + 1}`}
                className="h-56 w-full rounded-[1.1rem] object-cover transition duration-500 hover:scale-[1.03] sm:h-72 sm:rounded-[1.35rem]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
