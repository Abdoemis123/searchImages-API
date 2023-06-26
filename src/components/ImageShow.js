import 'bootstrap/dist/css/bootstrap.min.css';

function ImageShow({ image }) {
    return (
        <div className="col-sm-4">
            <div className="card">
                <img
                    src={image.urls.small}
                    alt={image.alt_description}
                    className="card-img-top"
                    style={{ objectFit: 'cover', height: '100%', width: '300px' , borderRadius: '10px' }}
                />
               
            </div>
        </div>
    );
}

export default ImageShow;
