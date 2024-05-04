import { ReactNode } from "react"
import { Link } from "react-router-dom"

const ContactItem = ({ icon, link}: {icon: ReactNode, link: string}) => {
    return (
        <Link to={link} target="/blank" className="lg:p-6 p-3 bg-white rounded-2xl text-teal-700  transition duration-300 ease-in-out hover:scale-125 shadow-xl">
            {icon}
        </Link>
    )
}

export default ContactItem