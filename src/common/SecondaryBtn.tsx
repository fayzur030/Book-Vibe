interface SecondaryBtnProps {
  children: React.ReactNode
}
export const SecondaryBtn = ({ children }: SecondaryBtnProps) => {
  return (
    <button
      className={`bg-[#59C6D2] text-[#FFFFFF] px-4 py-2 cursor-pointer rounded-md text-base font-medium`}
    >
      {children}
    </button>
  )
}
