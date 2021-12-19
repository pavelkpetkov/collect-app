
import { useContext } from 'react';
import { useHistory } from "react-router-dom";
import * as dataService from '../services/dataService';
import AuthContext from '../context/authContext';

const Create = () => {
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const createSubmitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let title = formData.get('title');
    let collectionImage = formData.get('collectionImage');
    let description = formData.get('description');

    dataService.create({
      title,
      collectionImage,
      description,
    }, user.accessToken)
      .then(result => {
        history.push('/data');
      })
  }

  return (
    <section className="Create">
      <h1>Create collection</h1>
      <article className="container">
        <form method="POST" onSubmit={createSubmitHandler}>
          <label>Title</label>
          <input type="text" id="startPoint" name="title" placeholder="Title" />
          <label>Images of your collection</label>
          <input type="text" id="collectionImage" placeholder="https://..." name="collectionImage" />
          <label>Description</label>
          <textarea id="description" placeholder="Information about your collection" name="description"></textarea>
          <button type="submit">Submit</button>
        </form>
      </article>
    </section>
  )
}

export default Create;