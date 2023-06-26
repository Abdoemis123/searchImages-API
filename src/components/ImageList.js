import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageList.css'; // Import your custom CSS file

function ImageList({ images }) {
    return (
        <div className="image-list-container">
            {images.map((image) => (
                <div key={image.id} className="image-card">
                    <img src={image.urls.small} alt={image.alt_description} className="image" />
                </div>
            ))}
        </div>
    );
}

export default ImageList;
