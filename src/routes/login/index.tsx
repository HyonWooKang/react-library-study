import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login/')({
  component: () => <div>Hello /login/!</div>,
})
