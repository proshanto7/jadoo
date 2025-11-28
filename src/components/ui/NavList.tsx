import type { ListItem } from "../types/listItem"

function NavList({item , className }:{item:ListItem , className?: string} ) {
  return (
    <li key={item.id} className={className}> {item.name}</li>
  )
}

export default NavList