import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Bookdetails() {
    const paramdata = useParams();
    const bookdata = useSelector(item => item.book.items)
    const bookdetails = bookdata.filter(x => x.id == paramdata.bookid);
    return (
        <>
            <div className=" p-4 md:px-10 lg:px-28 items-center bg-violet-100  h-auto md:h-screen flex ">
                <div className="flex flex-col md:flex-row w-full md:items-center h-auto md:h-5/6 bg-white px-5 py-5 rounded-xl">
                    <img src={bookdetails[0].cover_image} className="w-52 m-auto md:m-0 md:min-w-64 lg:min-w-72 h-3/4 rounded-md" alt="" />

                    <div className="md:pr-4 md:pl-8 lg:px-8 inter-tight-f">
                        <span className="text-xl text-red-600">{bookdetails[0].genre}</span>
                        <h1 className="text-3xl lg:text-4xl"><b>{bookdetails[0].title}</b></h1>
                        <span className="text-xl text-gray-600">By {bookdetails[0].author}</span>
                        <br />
                        <span className="bg-lime-400 px-1 rounded-lg ">{bookdetails[0].rating} 🟊</span>
                        <h2 className="mb-1">{bookdetails[0].language}</h2>
                        <h3 className="text-2xl"><b>${bookdetails[0].price}</b></h3>
                        <p className="text-base lg:text-lg">{bookdetails[0].description}</p>
                        <br />
                        <Link to="/browsebooks"><button className="border-2 bg-lime-300 border-black px-2 border-dashed hover:border-lime-500">Back to Browse</button></Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Bookdetails