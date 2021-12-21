import { useEffect, useState, useContext } from 'react';
import AuthContext from "../context/authContext";
import * as dataService from '../services/dataService';
import OwnersCard from './OwnersCard';

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [collections, setCollections] = useState([]);

  useEffect(() => {
    dataService.getAll()
      .then(result => {
        setCollections(result);
      })
  }, [])

    return (
        <section className="Profile">
          <article className="person">
            <h2>Name: {user.username}</h2>
            <p>e-mail: {user.email}</p>
          </article>
          <h2>My collections:</h2>
          <article className="my-collections">

          {collections.filter(x => x.author === user._id).map(x => <OwnersCard key={x._id} collection={x} />)}

          </article>
        </section>
    )
}

export default Profile;