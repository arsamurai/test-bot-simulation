import type { FC } from 'react'

const UserMessage: FC<{ content: string }> = ({ content }) => {
  return (
    <div className="mb-6 flex gap-3">
      <div className="mt-1.5 flex-1 text-right">
        <p className="font-semibold">You</p>
        <div className="ms-auto mt-1.5 w-fit rounded-md border border-solid border-indigo-600 bg-indigo-800 p-2 text-sm text-zinc-300">
          {content}
        </div>
      </div>
      <div className="flex size-10 items-center justify-center rounded-full bg-indigo-600 text-sm text-zinc-300">
        U
      </div>
    </div>
  )
}

export default UserMessage
