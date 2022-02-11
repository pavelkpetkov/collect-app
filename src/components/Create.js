
import { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import * as dataService from '../services/dataService';
import AuthContext from '../context/authContext';

const Create = () => {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const [errors, setErrors] = useState({ title: false, description: false });
  const [inputListImages, setInputListImages] = useState([{ image: "" }]);

  const createSubmitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let title = formData.get('title');
    let collectionImages = formData.getAll('collectionImages');
    let description = formData.get('description');

    dataService.create({
      title,
      collectionImages,
      description,
    }, user.accessToken)
      .then(result => {
        history.push('/data');
      })
  }

  const titleChangeHandler = (e) => {
    let currentTitle = e.target.value;
    if (currentTitle.length < 3) {
      setErrors(state => ({ ...state, title: 'Title has to be at least 3 characters long' }));
    } else {
      setErrors(state => ({ ...state, title: false }));
    }
  }

  const descriptionChangeHandler = (e) => {
    let currentDescription = e.target.value;
    if (currentDescription.length < 10) {
      setErrors(state => ({ ...state, description: 'Description has to be at least 10 characters long' }));
    } else {
      setErrors(state => ({ ...state, description: false }));
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
    <section className="Create">
      <h1>Create collection</h1>
      <article className="container">
        <form method="POST" onSubmit={createSubmitHandler}>
          <label>Title</label>
          <input type="text" style={{ borderColor: errors.title ? 'red' : 'inherit' }} name="title" placeholder="Title" onBlur={titleChangeHandler} />
          <span className="error" style={{ borderColor: errors.title ? 'inline' : 'hidden' }}>{errors.title}</span>
          <label>Images of your collection</label>
          {
            inputListImages.map((image, index) => (
              <div key={index}>
                <input type="text" id="collectionImages" placeholder="https://..." name="collectionImages" />
                {inputListImages.length > 1 && (<span>
                  <input type="button" value="-" id="removeInputImage" onClick={() => removeInputHandler(index)} />
                </span>)}
                {inputListImages.length < 4 && (<span>
                  <input type="button" value="+" id="addInputImage" onClick={addInputHandler} />
                </span>)}
              </div>
            ))
          }
          <span></span>
          <label>Description</label>
          <textarea style={{ borderColor: errors.description ? 'red' : 'inherit' }} placeholder="Information about your collection" name="description" onBlur={descriptionChangeHandler}></textarea>
          <span className="error" style={{ borderColor: errors.description ? 'inline' : 'hidden' }}>{errors.description}</span>
          <button type="submit">Submit</button>
        </form>
      </article>
    </section>
  )
}

export default Create;