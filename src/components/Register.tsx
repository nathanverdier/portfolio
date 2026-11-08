import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LangContext'
import type { RegisterItem } from '../i18n/types'

interface RegisterProps {
  items: RegisterItem[]
  /** Où placer le lien quand une ligne en a un : sur le terme (entraînement) ou sur le détail (contact). */
  linkOn?: 'term' | 'detail'
}

function ItemLink({ href, children }: { href: string; children: string }) {
  const external = /^https?:\/\//.test(href)
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(href.endsWith('.pdf') ? { download: '' } : {})}
    >
      {children}
    </a>
  )
}

/** Copie une valeur dans le presse-papiers et le confirme pendant deux secondes. */
function CopyButton({ value }: { value: string }) {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copied])

  if (typeof navigator === 'undefined' || !navigator.clipboard) return null

  return (
    <button
      type="button"
      className="copy"
      aria-live="polite"
      onClick={() => {
        navigator.clipboard.writeText(value).then(
          () => setCopied(true),
          () => undefined,
        )
      }}
    >
      {copied ? t.contact.copied : t.contact.copy}
    </button>
  )
}

/** Liste « terme, détail » : une ligne par entrée, sans cartes. */
export function Register({ items, linkOn = 'detail' }: RegisterProps) {
  return (
    <dl className="register">
      {items.map((item) => (
        <div className="register__row" key={item.term}>
          <dt className="register__term">
            {item.href && linkOn === 'term' ? <ItemLink href={item.href}>{item.term}</ItemLink> : item.term}
          </dt>
          <dd className="register__detail">
            {item.href && linkOn === 'detail' ? <ItemLink href={item.href}>{item.detail}</ItemLink> : item.detail}
            {item.copy && <CopyButton value={item.detail} />}
          </dd>
        </div>
      ))}
    </dl>
  )
}
