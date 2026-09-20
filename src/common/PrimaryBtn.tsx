interface PrimaryBtnProps {
  children: React.ReactNode
}
export const PrimaryBtn = ({ children }: PrimaryBtnProps) => {
  return (
    <button
      className={`bg-[#23BE0A] text-[#FFFFFF]  px-4 py-2 cursor-pointer rounded-md text-base font-medium hover:bg-green-700 transition-all duration-300`}
    >
      {children}
    </button>
  )
}
