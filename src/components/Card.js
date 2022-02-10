import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as authService from '../services/authService';

const Card = ({
    collection
}) => {

    const [owner, setOwner] = useState({});
    useEffect(() => {
        authService.getOwner(collection.author)
            .then(result => {
                setOwner(result);
            })
    }, [collection.author])

    return (
        <div className="overview">
            <h3>{collection.title}</h3>
            <article>
                <img alt="CollectionImage" src={collection.collectionImages[0]}></img>
            </article>
            <p>{collection.description}</p>
            <p>Owner: {owner.username}</p>
            <Link to={`/data/details/${collection._id}`}>Details</Link>
        </div>
    )
}

export default Card;