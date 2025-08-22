
export default function Header() {
    return (
       <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-4 z-50">
            <ul className="flex items-center mt-4">
                <li className="ml-6 cursor-pointer  transition duration-200 ease-in hover:text-[var(--color-primary-2)] ">Inicio</li>

                <li className="ml-6 cursor-pointer  transition duration-200 ease-in hover:text-[var(--color-primary-2)] ">Descubra o app</li>

                <li className="ml-6 cursor-pointer  transition duration-200 ease-in hover:text-[var(--color-primary-2)] ">Comentários</li>


                <li className=" px-4 py-2 bg-white rounded-full  ml-6 cursor-pointer  transition duration-200 ease-in hover:text-[var(--color-primary-2)] min-w-[115px]">Obter app</li>

                <li className="ml-6 cursor-pointer  transition duration-200 ease-in hover:text-[var(--color-primary-2)] ">Suporte</li>
            </ul>
        </div>
    )
}