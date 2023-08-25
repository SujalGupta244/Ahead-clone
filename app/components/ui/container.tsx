
interface ContainerProps{
    children: React.ReactNode 
    className? :string
}

const Container : React.FC<ContainerProps> = ({children, className}) => {
  return (
    <div className={`mx-auto max-w-[80vw] ${className}`}>
        {children}
    </div>
  )
}

export default Container