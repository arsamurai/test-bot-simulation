import { useEffect, useRef } from 'react'

import { useMessagesStore } from '../../model/use-messages-store'
import AssistantMessage from './assistant-message'
import { Role } from './messages.types'
import UserMessage from './user-message'

const Messages = () => {
  const { messages } = useMessagesStore()

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current === null) return
    ref.current.scrollTo(0, ref.current.scrollHeight)
  }, [messages])

  return (
    <div
      className="bg-background/60 mb-2 h-[500px] overflow-y-auto rounded-md border p-4"
      ref={ref}
    >
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === Role.USER && <UserMessage content={m.text} />}
          {m.role === Role.BOT && <AssistantMessage content={m.text} />}
        </div>
      ))}
    </div>
  )
}

export default Messages
