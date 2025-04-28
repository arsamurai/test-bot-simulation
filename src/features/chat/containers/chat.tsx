import AddMessageForm from '../ui/add-message-input'
import BotWritingBlock from '../ui/bot-writing-block'
import { Messages } from '../ui/messages'

const Chat = () => {
  return (
    <div className="relative mx-auto w-full max-w-4xl flex-1 space-y-3">
      <BotWritingBlock />
      <Messages />
      <AddMessageForm />
    </div>
  )
}
export default Chat
