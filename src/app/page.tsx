"use client";
import { BaseChatLayout } from '@/components/base-chat-layout'
import { useSession, signIn } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      <BaseChatLayout />
    )
  } else {
    return (
      <div>
        <h1>Not signed in</h1>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    )
  }
}
