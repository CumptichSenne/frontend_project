import { Mail, LinkedinIcon, Github } from "lucide-react"
import { Link } from "react-router-dom"
import ContactItem from "../components/ContactItem"

const Contact = () => {
    return (
        <section id="contact" className="flex flex-col pt-10 w-full">
        <div className="flex flex-col gap-8 items-center justify-center p-20">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Contact</h1>
          </div>
          <p className="text-xl font-bold text-center">If you would like to get in touch with me be sure to visit <br/> my LinkedIn or Github page or send me an email.</p>
          <div className=" w-2/3 flex flex-row justify-evenly">
            <Link to='#' onClick={() => window.location.href = 'mailto:cumptichsenne@gmail.com'}
              className="p-6 bg-white rounded-2xl text-teal-700 transition duration-300 ease-in-out hover:scale-125 shadow-xl">
              <Mail size={36} strokeWidth={3}/>
            </Link>
            <ContactItem icon={<LinkedinIcon size={36} strokeWidth={2.5}/>} link="https://www.linkedin.com/in/senne-cumptich-a7b592273/" />
            <ContactItem icon={<Github size={36} strokeWidth={3}/>} link="https://github.com/CumptichSenne"/>
          </div>
        </div>
      </section>
    )
}

export default Contact