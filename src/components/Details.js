import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

import AuthContext from "../context/authContext";
import * as dataService from '../services/dataService';

const Details = () => {
    const history = useHistory();
    const { user } = useContext(AuthContext);
    const [collection, setCollection] = useState({});
    const { id } = useParams();

    useEffect(() => {
        dataService.getOne(id)
            .then(result => {
                setCollection(result);
            })
    }, [id]);

    const deleteClickHandler = () => {
        dataService.remove(id, user.accessToken)
            .then(() => {
                history.push('/data');
            })
    }
    const viewOwnerButtonClick = () => {
        let authorId = collection._ownerId;
        history.push(`/auth/profile/${authorId}`);
    }

    const ownerButtons = (
        <>
            <Link className="button" to={`/data/edit/${collection._id}`}>Edit</Link>
            <button className="button delete" onClick={deleteClickHandler}>Delete</button>
        </>
    );

    const userButton = <Link className="button" to="#" onClick={viewOwnerButtonClick}>View owner's profile</Link>;

    return (
        <section className="Details">
            <h3>Title: {collection.title}</h3>
            <article>
                { 
                    collection.collectionImages ?  collection.collectionImages.map(x => <img alt="CollectionImage" src={x}></img>) : null
                }
            </article>
            <p>Description: {collection.description}</p>

            {user._id && (user._id === collection._ownerId
                ? ownerButtons
                : userButton
            )}
        </section>
    )
}

export default Details;