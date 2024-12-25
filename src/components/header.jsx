import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="w-full flex justify-center flex-col">
                <div className="sm:absolute -z-10 left-4 top-5 w-auto justify-center sm:justify-normal sm:pt-0 pt-2 flex handjet-font text-2xl ">
                    <img width="30" height="30" src="https://img.icons8.com/fluency/48/google-books.png" alt="google-books" />
                    <span>ONLINE LIBRARY</span>
                </div>
                <nav className="w-full new-amsterdam-regular flex gap-3 text-xl items-center justify-center p-5 list-none"
                >

                    <Link to="/"><li className="border-2 bg-lime-300 border-black px-2 border-dashed hover:border-lime-500">Home</li></Link>
                    <Link to="/browsebooks"><li className="border-2 bg-lime-300 border-black px-2 border-dashed hover:border-lime-500">Browse Books</li></Link>
                    <Link to='/addbook'><li className="border-2 bg-lime-300 border-black px-2 border-dashed hover:border-lime-500">Add Book</li></Link>
                    {/* <h1 className="bg-black border-custom rounded-full p-3 font-bold title text-lg sm:text-2xl handjet-font">To-Do-List Application</h1> */}
                </nav>
            </header>
        </>
    )
}

export default Header;