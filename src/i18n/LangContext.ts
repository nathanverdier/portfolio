import { createContext, useContext } from 'react'
import type { Content, Lang } from './types'

export interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Content
}

export const LangContext = createContext<LangContextValue | null>(null)

export function useLang(): LangContextValue {
  const value = useContext(LangContext)
  if (!value) throw new Error('useLang doit être utilisé dans <LangProvider>')
  return value
}
