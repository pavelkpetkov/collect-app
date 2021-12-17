

const Create = () => {

  const createSubmitHandler = (e) => {
    e.preventDefault();

    //Todo
  }

    return (
        <section className="Create">
          <h1>Create collection</h1>
          <article className="container">
          <form method="POST" onSubmit={createSubmitHandler}>
            <label>Title</label>
            <input type="text" id="startPoint" name="title" placeholder="Title" />
            <label>Images of your collection</label>
            <input type="text" id="collectionImage" placeholder="https://..." name="collectionImage"/>
            <label>Description</label> 
            <textarea id="description" placeholder="Information about your collection" name="description"></textarea>
            <button type="submit">Submit</button>
          </form>
          </article>
        </section>
    )
}

export default Create;