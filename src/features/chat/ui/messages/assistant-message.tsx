import type { FC } from 'react'

const AssistantMessage: FC<{ content: string }> = ({ content }) => {
  return (
    <div className="mb-6 flex gap-3">
      <div className="flex size-10 items-center justify-center rounded-full bg-slate-600 text-sm text-zinc-300">
        AI
      </div>
      <div className="mt-1.5 flex-1">
        <p className="font-semibold">Bot</p>
        <div className="mt-1.5 w-fit rounded-md border border-solid border-slate-600 bg-slate-800 p-2 text-sm text-zinc-300">
          {content}
        </div>
      </div>
    </div>
  )
}

export default AssistantMessage
