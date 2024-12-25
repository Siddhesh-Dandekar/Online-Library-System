import { useDispatch } from "react-redux";
import { addItem } from "../utils/bookslice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function Addbook(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const booklength = useSelector(item => item.book.items).length
    function submitdata(e){
        event.preventDefault();
        const formdata = new FormData(e)
        console.log(formdata.get('title'))
        dispatch(addItem({
            id: booklength + 1,
            title: formdata.get('title'),
            author: formdata.get('author'),
            description: formdata.get('description'),
            genre: formdata.get('category'),
            price: formdata.get('price'),
            cover_image: formdata.get('image_url'),
            rating: formdata.get('rating'),
            language: formdata.get('language')
        }));
       navigate("/browsebooks")
    }
    return(
        <>
        <div className="bg-violet-100 h-auto flex justify-center items-center">
            
            <form onSubmit={(e)=> submitdata(e.target)} method="post" className="flex my-4 mx-3 flex-col w-96 inter-tight-f rounded-md shadow bg-white px-5 md:px-7 py-5 text-lg" >
                <span className="text-2xl mb-2"><b>Add Book</b></span>
                <label htmlFor="title">Title</label>
                <input maxLength="35" required className="border-2 border-gray-400 rounded-sm mb-2" type="text" name="title" id="title" placeholder=" eg. Harry Potter" />
                <label htmlFor="author">Author</label>
                <input maxLength="20" required className="border-2 border-gray-400 rounded-sm mb-2" type="text" name="author" id="author" pattern="[A-Za-z\s]+" placeholder=" eg. JK. Rowling" />
                <label htmlFor="category">Category</label>
                <select required name="category" id="category" className="border-2 border-gray-400 rounded-sm mb-2">
                    <option value="Fiction">Fiction</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Trading">Trading</option>
                    <option value="Biographies">Biographies</option>
                </select>
                <label htmlFor="">Price</label>
                <input required className="border-2 border-gray-400 rounded-sm mb-2" type="number" name="price" id="price" step="0.01" placeholder=" $" />
                <label htmlFor="rating" >Rating</label>
                <input required className="border-2 border-gray-400 rounded-sm mb-2" min="0" max="5" type="number" name="rating" id="rating" step="0.1" placeholder=" eg. 4.5" />
                <label htmlFor="Language">Language</label>
                <input maxLength="20" required className="border-2 border-gray-400 rounded-sm mb-2" type="text" name="language" id="language" placeholder=" eg. English" />
                <label htmlFor="img_url">Image URL</label>
                <input required className="border-2 border-gray-400 rounded-sm mb-2" type="url" name="image_url" id="image_url" placeholder=" Paste Image URL" />
                <label htmlFor="description">Description</label>
                <textarea maxLength="350" rows="6" required className="border-2 border-gray-400 rounded-sm mb-2" name="description" id="description" ></textarea>
                <input type="submit" className="border-2 bg-lime-300 border-black px-2  hover:border-lime-500" />
            </form>
        </div>
        </>
    )
}

export default Addbook;