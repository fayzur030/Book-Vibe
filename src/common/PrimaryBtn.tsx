interface PrimaryBtnProps {
  children: React.ReactNode
  onClick?: () => void
}
export const PrimaryBtn = ({ children, onClick }: PrimaryBtnProps) => {
  return (
    <button
      className={`bg-[#23BE0A] text-[#FFFFFF]  px-4 py-2 cursor-pointer rounded-md text-base font-medium hover:bg-green-700 transition-all duration-300`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
