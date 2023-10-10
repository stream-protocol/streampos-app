import { pos } from "node:path/win32"

export default function ShopLayout({
  pos,
  params,
}: {
  pos: React.ReactNode
  params: {
    tag: string
    item: string
  }
}) {
  // URL -> /shop/pos/streampos-system-1
  // `params` -> { tag: 'system', item: 'streampos-system-1' }
  return <section>{pos}</section>
}