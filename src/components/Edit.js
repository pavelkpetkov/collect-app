import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as dataService from '../services/dataService';
import AuthContext from "../context/authContext";


const Edit = () => {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [collection, setCollection] = useState({});
  const [errors, setErrors] = useState({title: false, description: false});


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
        history.push(`/data`);
    })
  }

  const titleChangeHandler = (e) => {
    let currentTitle = e.target.value;
    if (currentTitle.length < 3) {
      setErrors(state => ({...state, title: 'Title has to be at least 3 characters long'}));
    } else {
      setErrors(state => ({...state, title: false}));
    }
  }

  const descriptionChangeHandler = (e) => {
    let currentDescription = e.target.value;
    if (currentDescription.length < 10) {
      setErrors(state => ({...state, description: 'Description has to be at least 3 characters long'}));
    } else {
      setErrors(state => ({...state, description: false}));
    }
  }

    return (
        <section className="Edit">
          <h1>Edit collection</h1>
          <article className="container">
          <form method="POST" onSubmit={editSubmitHandler}>
            <label>Title</label>
            <input type="text" style={{borderColor: errors.title ? 'red' : 'inherit'}} name="title" defaultValue={collection.title} onBlur={titleChangeHandler} />
            <span className="error" style={{borderColor: errors.title ? 'inline' : 'hidden'}}>{errors.title}</span>
            <label>Images of your collection</label>
            <input type="text" name="collectionImage" defaultValue={collection.collectionImage}/>
            <span></span>
            <label>Description</label> 
            <textarea name="description" style={{borderColor: errors.description ? 'red' : 'inherit'}} defaultValue={collection.description} onBlur={descriptionChangeHandler}></textarea>
            <span className="error" style={{borderColor: errors.description ? 'inline' : 'hidden'}}>{errors.description}</span>
            <button type="submit">Save</button>
          </form>
          </article>
        </section>
    )
}

export default Edit;