function getResponsiveBaseName(path) {
  const cleanPath = path?.replace(/^\//, '')

  if (!cleanPath) {
    return null
  }

  const parts = cleanPath.split('/')
  const fileName = parts[parts.length - 1]
  const extensionIndex = fileName.lastIndexOf('.')

  return extensionIndex === -1 ? fileName : fileName.slice(0, extensionIndex)
}

const RESPONSIVE_WIDTHS = [480, 768, 1200, 1600, 2400]

export function buildResponsiveImage(path) {
  const baseName = getResponsiveBaseName(path)

  if (!baseName) {
    return {
      src: path,
    }
  }

  return {
    src: `/responsive/${baseName}-768.jpg`,
    srcSet: RESPONSIVE_WIDTHS.map(
      (width) => `/responsive/${baseName}-${width}.jpg ${width}w`,
    ).join(', '),
  }
}
