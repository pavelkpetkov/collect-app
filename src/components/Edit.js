const Edit = () => {

    return (
        <section className="Edit">
          <h1>Edit collection</h1>
          <article className="container">
          <form action="" method="POST">
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

export default Edit;