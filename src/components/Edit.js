import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as dataService from '../services/dataService';
import AuthContext from "../context/authContext";


const Edit = () => {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [collection, setCollection] = useState({});

  useEffect(() => {
      dataService.getOne(id)
          .then(result => {
              setCollection(result);
          })
  }, [id]);

  const editSubmitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let title = formData.get('title');
    let collectionImage = formData.get('collectionImage');
    let description = formData.get('description');
  
    let data = {
      title,
      collectionImage,
      description,
    }

    dataService.update(id, data, user.accessToken)
    .then(() => {
        history.push(`/data/details/${id}`);
    })
  }

    return (
        <section className="Edit">
          <h1>Edit collection</h1>
          <article className="container">
          <form method="POST" onSubmit={editSubmitHandler}>
            <label>Title</label>
            <input type="text" id="startPoint" name="title" defaultValue={collection.title} />
            <label>Images of your collection</label>
            <input type="text" id="collectionImage" name="collectionImage" defaultValue={collection.collectionImage}/>
            <label>Description</label> 
            <textarea id="description" name="description" defaultValue={collection.description}></textarea>
            <button type="submit">Save</button>
          </form>
          </article>
        </section>
    )
}

export default Edit;