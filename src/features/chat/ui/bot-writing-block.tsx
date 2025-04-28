import { useBotWritingStore } from '../model/use-bot-writing-store'

const BotWritingBlock = () => {
  const { isWriting } = useBotWritingStore()

  if (!isWriting) {
    return null
  }

  return (
    <div className="text-bold absolute -top-8 left-1/2 flex -translate-x-1/2 gap-1 rounded-md border bg-slate-700 px-2 text-center text-white">
      <span>Bot пише</span>
      <div className="flex">
        <span className="animate-caret-blink delay-0">.</span>
        <span className="animate-caret-blink delay-200">.</span>
        <span className="animate-caret-blink delay-400">.</span>
      </div>
    </div>
  )
}

export default BotWritingBlock
