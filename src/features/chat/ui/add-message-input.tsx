import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { SendHorizontalIcon } from 'lucide-react'

import { useAddMessageForm } from '../model/use-add-message-form'

const AddMessageForm = () => {
  const { inputValue, handleInputChange, handleSubmit } = useAddMessageForm()

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Input
        name="message"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Напишіть повідомлення..."
        className="bg-background/60 h-10 placeholder:text-zinc-600/75 placeholder:italic focus-visible:ring-zinc-500"
        endIcon={
          <Button
            size="icon"
            type="submit"
            variant="secondary"
            className="h-8 w-10"
            disabled={!inputValue.trim()}
          >
            <SendHorizontalIcon className="h-5 w-5 text-indigo-500" />
          </Button>
        }
      />
    </form>
  )
}

export default AddMessageForm
