import { type ChangeEvent, useState } from 'react'

import { type MessageEntity, Role } from '../ui/messages/messages.types'
import { getBotAnswer } from '../utils/get-bot-answer'
import { useBotWritingStore } from './use-bot-writing-store'
import { useMessagesStore } from './use-messages-store'

export const useAddMessageForm = () => {
  const { addMessage } = useMessagesStore()
  const { isWriting, setIsWriting } = useBotWritingStore()
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedMessage = inputValue.trim()
    if (!trimmedMessage) return

    const newMessage: MessageEntity = {
      id: Date.now(),
      role: Role.USER,
      text: trimmedMessage,
    }
    const answer = getBotAnswer()

    addMessage(newMessage)
    setInputValue('')

    if (isWriting) return

    setIsWriting(true)

    setTimeout(() => {
      const botMessage: MessageEntity = {
        id: Date.now() + 1,
        role: Role.BOT,
        text: answer,
      }
      addMessage(botMessage)
      setIsWriting(false)
    }, 3000)
  }

  return {
    inputValue,
    handleInputChange,
    handleSubmit,
  }
}
