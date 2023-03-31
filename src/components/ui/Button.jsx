

export const Button = ({children,className}) => {
  return (
    <button  className={`rounded-xl py-3 px-4 ${className} hover:scale-105 ease-in duration-300`}>{children}</button>
  )
}
