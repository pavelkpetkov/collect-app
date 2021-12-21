import { Link } from 'react-router-dom';

const OwnersCard = ({
    collection
}) => {

    return (
        <div className="overview">
            <h3>{collection.title}</h3>
            <article>
                <img alt="CollectionImage" src={collection.collectionImage}></img>
            </article>
            <p>{collection.description}</p>
            <Link to={`/data/details/${collection._id}`}>Details</Link>
        </div>
    )
}

export default OwnersCard;