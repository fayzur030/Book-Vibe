interface OutlineBtnProps {
  children: React.ReactNode
}
export const OutlineBtn = ({ children }: OutlineBtnProps) => {
  return (
    <button
      className={`bg-transparent outline outline-neutral-200 text-[#131313] px-5 py-2 cursor-pointer transition hover:bg-gray-100 rounded-md text-lg font-semibold`}
    >
      {children}
    </button>
  )
}
