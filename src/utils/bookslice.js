import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name : 'book',
    initialState:{
        items:[
          {
            id: 1,
            title: "Dune",
            author: "Frank Herbert",
            description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness.",
            genre: "Sci-Fi",
            price: "10.99",
            cover_image: "https://m.media-amazon.com/images/I/81nq+ewtkcL.jpg",
            rating: 4.5,
            language: "English"
          },
          {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            description: "To Kill a Mockingbird is a 1961 novel by Harper Lee. Set in small-town Alabama, the novel is a bildungsroman, or coming-of-age story, and chronicles the childhood of Scout and Jem Finch as their father Atticus defends a Black man falsely accused of rape. Scout and Jem are mocked by classmates for this.",
            genre: "Fiction",
            price: "8.99",
            cover_image: "https://m.media-amazon.com/images/I/817SDvX90JL._AC_UF1000,1000_QL80_.jpg",
            rating: 4.8,
            language: "English"
          },
          {
            id: 3,
            title: "A Random Walk Down Wall Street",
            author: "Burton G. Malkiel",
            description: "A Random Walk Down Wall Street (1973) looks at the unpredictability of stock market prices, linking their movements to a “random walk.” It dispels the generally accepted belief in discernible market patterns, suggesting that consistent gains are not a product of easily-chartered trends.",
            genre: "Trading",
            price: "15.99",
            cover_image: "https://m.media-amazon.com/images/I/81z+0nf8vVL._UF1000,1000_QL80_.jpg",
            rating: 4.3,
            language: "English"
          },
          {
            id: 4,
            title: "Steve Jobs",
            author: "Walter Isaacson",
            description: "Steve Jobs by Walter Isaacson is an amazing insight into the life of Steve Jobs. It reveals all, his strengths, his flaws and his idiosyncrasies. As well as providing the much needed context to understand how Jobs was ousted from Apple and then reinstated.",
            genre: "Biographies",
            price: "12.99",
            cover_image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Steve_Jobs_by_Walter_Isaacson.jpg/220px-Steve_Jobs_by_Walter_Isaacson.jpg",
            rating: 4.6,
            language: "English"
          },
          {
            id: 5,
            title: "1984",
            author: "George Orwell",
            description: "George Orwell wrote 1984 to teach people a lesson about the negative things that could happen if they allowed their government to exercise total control. The totalitarian regime of Oceania is able to manipulate their citizens into believing anything, which allows them as much power as they could possibly want.",
            genre: "Fiction",
            price: "9.99",
            cover_image: "https://m.media-amazon.com/images/I/51BIA4rraeL._AC_UF1000,1000_QL80_.jpg",
            rating: 4.7,
            language: "English"
          }
        ]
               
          
    },
    reducers:{
        addItem : (state, action) => {
            state.items.push(action.payload);
        }
    }
})

export default bookSlice.reducer;

export const { addItem } = bookSlice.actions;