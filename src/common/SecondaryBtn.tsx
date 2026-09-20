interface SecondaryBtnProps {
  children: React.ReactNode
}
export const SecondaryBtn = ({ children }: SecondaryBtnProps) => {
  return (
    <button
      className={`bg-[#59C6D2] text-[#FFFFFF] px-4 py-2 w-full cursor-pointer w-full rounded-md text-base font-medium hover:bg-blue-700 transition-all duration-300`}
    >
      {children}
    </button>
  )
}
