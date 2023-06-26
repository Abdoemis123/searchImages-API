import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./components/SearchBar";
import searchImages from "./api"
import ImageList from "./components/ImageList";
import {useState} from "react";

function App() {

    const [images,setImages] = useState([]);

    const handleSubmit = async  (term) => {
        const result = await searchImages(term);
        setImages(result);
        console.log(result)


    };



    return <div className="container">
        <div className="row">
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images}/>
        </div>

    </div>

}

export default App;
