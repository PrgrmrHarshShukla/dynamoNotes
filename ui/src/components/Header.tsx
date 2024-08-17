import '@fortawesome/fontawesome-free/css/all.css'

function Header(){
    return(
        <div className="w-screen h-[8vh] border-b-2 border-black flex flex-row justify-around items-center">
            <span className="text-xl font-bold">
                Daily Notes
            </span>
            <div className="w-8 h-8 bg-green-300 flex justify-center items-center rounded-[6px]">
                <i className="fas fa-plus font-bold"></i>
            </div>
        </div>
    )
}

export default Header;