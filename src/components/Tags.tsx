interface TagsProps {
  items: string[]
  label?: string
}

/** Liste de pastilles (technologies, compétences). */
export function Tags({ items, label }: TagsProps) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((item) => (
        <li className="tag" key={item}>
          {item}
        </li>
      ))}
    </ul>
  )
}
