import { create } from 'zustand'

interface BotWritingState {
  isWriting: boolean
  setIsWriting: (value: boolean) => void
}

export const useBotWritingStore = create<BotWritingState>()(set => ({
  isWriting: false,
  setIsWriting: newValue => set({ isWriting: newValue }),
}))
