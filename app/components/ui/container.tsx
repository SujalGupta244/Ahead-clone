import { motion } from "framer-motion";
import {textVariant} from '../../utils/motion'

interface ContainerProps{
    children: React.ReactNode 
    className? :string
}

const Container : React.FC<ContainerProps> = ({children, className}) => {
  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}} 
    variants={textVariant(0.5)}
    className={`mx-auto max-w-[80vw] ${className}`}>
        {children}
    </motion.div>
  )
}

export default Container