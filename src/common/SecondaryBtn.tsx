interface SecondaryBtnProps {
  children: React.ReactNode
  onCLick?: () => void
}
export const SecondaryBtn = ({ children, onCLick }: SecondaryBtnProps) => {
  return (
    <button
      className={`bg-[#59C6D2] text-[#FFFFFF] px-4 py-2 cursor-pointer  rounded-md text-base font-medium hover:bg-blue-700 transition-all duration-300`}
      onClick={onCLick}
    >
      {children}
    </button>
  )
}
