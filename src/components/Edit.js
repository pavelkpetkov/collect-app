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
  const [inputListImages, setInputListImages] = useState([{ image: "" }]);

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
    let collectionImages = formData.getAll('collectionImages');
    let description = formData.get('description');
  
    let data = {
      title,
      collectionImages,
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
      setErrors(state => ({...state, description: 'Description has to be at least 10 characters long'}));
    } else {
      setErrors(state => ({...state, description: false}));
    }
  }

  const addInputHandler = () => {
    setInputListImages([...inputListImages, { image: "" }]);
  }

  const removeInputHandler = (index) => {
    const list = [...inputListImages];
    list.splice(index, 1);
    setInputListImages(list);
  }

    return (
        <section className="Edit">
          <h1>Edit collection</h1>
          <article className="container">
          <form method="POST" onSubmit={editSubmitHandler}>
            <label>Title</label>
            <input type="text" style={{borderColor: errors.title ? 'red' : 'inherit'}} name="title" defaultValue={collection.title} onBlur={titleChangeHandler} />
            <p className="error" style={{borderColor: errors.title ? 'inline' : 'hidden', backgroundColor: errors.title ? 'lightgoldenrodyellow': 'inherit'}}>{errors.title}</p>
            <label>Images of your collection</label>
            { collection.collectionImages ?
              (collection.collectionImages.map((image, index) => (
                <div key={index}>
                  <input type="text" id="collectionImages" defaultValue={collection.collectionImages[index]} name="collectionImages" />
                  {inputListImages.length > 1 && (<span>
                    <input type="button" value="-" id="removeInputImage" onClick={() => removeInputHandler(index)} />
                  </span>)}
                  {inputListImages.length < 4 && (<span>
                    <input type="button" value="+" id="addInputImage" onClick={addInputHandler} />
                  </span>)}
                </div>
              ))) : null
            }
            <span></span>
            <label>Description</label> 
            <textarea name="description" style={{borderColor: errors.description ? 'red' : 'inherit'}} defaultValue={collection.description} onBlur={descriptionChangeHandler}></textarea>
            <p className="error" style={{borderColor: errors.description ? 'inline' : 'hidden', backgroundColor: errors.description ? 'lightgoldenrodyellow': 'inherit'}}>{errors.description}</p>
            <button type="submit">Save</button>
          </form>
          </article>
        </section>
    )
}

export default Edit;