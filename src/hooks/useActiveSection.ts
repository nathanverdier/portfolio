import { useEffect, useState } from 'react'

/**
 * Renvoie l'identifiant de la section qui traverse une bande située vers le tiers haut de l'écran.
 * Contrairement à un seuil de visibilité, cela fonctionne aussi pour des sections plus hautes que l'écran.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0 || !('IntersectionObserver' in window)) return

    const inBand = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inBand.add(entry.target.id)
          else inBand.delete(entry.target.id)
        }
        const current = elements.find((el) => inBand.has(el.id))
        if (current) setActive(current.id)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    elements.forEach((el) => observer.observe(el))

    // En bas de page, la dernière section est souvent trop courte pour atteindre la bande.
    const last = ids[ids.length - 1]
    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom && last) setActive(last)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids])

  return active
}
