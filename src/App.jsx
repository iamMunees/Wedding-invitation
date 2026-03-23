import { useEffect } from 'react'
import invitationDataSource from './data/invitationData'
import { FamilyBlessing } from './components/FamilyBlessing'
import { InvitationHero } from './components/InvitationHero'
import { PhotoGallery } from './components/PhotoGallery'
import { WeddingHighlights } from './components/WeddingHighlights'

function normalizeInvitationData(source) {
  return {
    ...source,
    coupleImages: Array.isArray(source?.coupleImages) ? source.coupleImages : [],
    galleryImages: Array.isArray(source?.galleryImages) ? source.galleryImages : [],
  }
}

function App() {
  const invitation = normalizeInvitationData(invitationDataSource)

  useEffect(() => {
    if (!import.meta.hot) {
      return undefined
    }

    import.meta.hot.accept('./data/invitationData.js', () => {
      window.location.reload()
    })

    return undefined
  }, [])

  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-[var(--ink)]">
      <InvitationHero invitation={invitation} />
      <WeddingHighlights invitation={invitation} />
      <PhotoGallery invitation={invitation} />
      <FamilyBlessing invitation={invitation} />
    </main>
  )
}

export default App
