import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { MessageEntity } from '../ui/messages'

interface MessageState {
  messages: MessageEntity[]
  addMessage: (value: MessageEntity) => void
}

export const useMessagesStore = create<MessageState>()(
  persist(
    set => ({
      messages: [],
      addMessage: message => {
        set(state => ({
          messages: [...state.messages, message],
        }))
      },
    }),
    {
      name: 'messages',
    },
  ),
)
