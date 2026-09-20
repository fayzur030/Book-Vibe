interface OutlineBtnProps {
  children: React.ReactNode
  onClick?: () => void
}
export const OutlineBtn = ({ children, onClick }: OutlineBtnProps) => {
  return (
    <button
      className={`bg-transparent outline outline-neutral-200 text-[#131313] px-5 py-2 cursor-pointer transition hover:bg-gray-100 rounded-md text-lg font-semibold`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
