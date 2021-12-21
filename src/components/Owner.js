import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import * as dataService from '../services/dataService';
import * as authService from '../services/authService';

import OwnersCard from './OwnersCard';

const Owner = () => {
  const { id } = useParams();
  const [collections, setCollections] = useState([]);
  const [owner, setOwner] = useState({});

  useEffect(() => {
    dataService.getAll()
      .then(result => {
        setCollections(result);
      })
  }, [])

  useEffect(() => {
    authService.getOwner(id)
      .then(result => {
        setOwner(result);
      })
  }, [id])

    return (
        <section className="Profile">
          <article className="person">
            <h2>Contact details:</h2>
            <p>Name: {owner.username} </p>
            <p>E-mail: {owner.email}</p>
          </article>
          <h2>{owner.username}'s collections:</h2>
          <article className="my-collections">

          {collections.filter(x => x.author === owner._id).map(x => <OwnersCard key={x._id} collection={x}/>)}

          </article>
        </section>
    )
}

export default Owner;