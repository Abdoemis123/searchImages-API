import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageList.css'; // Import your custom CSS file
import ImageShow from './ImageShow'; // Import the ImageShow component

function ImageList({ images }) {
    return (
        <div className="image-list-container">
            {images.map((image) => (
                <ImageShow key={image.id} image={image} /> // Pass the 'image' prop to the ImageShow component
            ))}
        </div>
    );
}

export default ImageList;
