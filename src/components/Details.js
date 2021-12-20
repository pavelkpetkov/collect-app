import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import AuthContext from "../context/authContext";
import * as dataService from '../services/dataService';

const Details = () => {
    const { user } = useContext(AuthContext);
    const [collection, setCollection] = useState({});
    const { id } = useParams();

    useEffect(() => {
        dataService.getOne(id)
        .then(result => {
            setCollection(result);
        })
    }, [id]);

    console.log(collection);

    const deleteClickHandler = () => {
    }
    const connectButtonClick = () => {
    }

    const ownerButtons = (
        <>
            <Link className="button" to={`/data/edit/${collection._id}`}>Edit</Link>
            <button className="button delete" onClick={deleteClickHandler}>Delete</button>
        </>
    );

    const userButtons = <button className="button" onClick={connectButtonClick}>Message to owner</button>;

    return (
        <section className="Details">
            <h3>Title: {collection.title}</h3>
            <article>
                <img alt="CollectionImage" src={collection.collectionImage}></img>
            </article>
            <p>Description {collection.description}</p>
            <p>Owner</p>
            {user._id && (user._id === collection._ownerId
                ? ownerButtons
                : userButtons
            )}
        </section>
    )
}

export default Details;