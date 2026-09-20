interface OutlineBtnProps {
  children: React.ReactNode
}
export const OutlineBtn = ({ children }: OutlineBtnProps) => {
  return (
    <button
      className={`bg-transparent outline outline-neutral-200 text-[#131313] px-3 py-2 cursor-pointer rounded-md text-lg font-semibold w-full`}
    >
      {children}
    </button>
  )
}
