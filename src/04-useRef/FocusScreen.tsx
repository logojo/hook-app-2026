import { useRef } from "react"


export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.select()
  }
  return (
    <div className="bg-gradient flex-col gap-4">
        <h1 className="text-2xl font-thin">Focus Screen</h1>
        <input type="text" 
               ref={inputRef}
               className="bg-white text-black px-4 py-2 rounded-md"
               autoFocus
        />
        <button
            className="bg-blue-500 px-4 py-2 rounded-md cursor-pointer transition active:scale-75"
            onClick={handleClick}
        >
            Set focus
        </button>
    </div>
  )
}
