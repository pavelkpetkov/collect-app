const Create = () => {

    return (
        <section className="Create">
          <h1>Create collection</h1>
          <form action="" method="POST">
            <label for="startPoint">Starting Point </label>
            <label for="endPoint">End Point</label>
            <input type="text" id="startPoint" name="startPoint"
              value="" />
            <input type="text" id="endPoint" name="endPoint" value="" />
            <label for="date"> Date</label>
            <label for="time">Time</label>
            <input type="date" id="date" name="date" value="" />
            <input type="time" id="time" name="time" value="" />
            <label for="carImage">Car Image</label>
            <label for="carBrand">Car Brand</label>
            <input type="text" id="carImage" placeholder="https://..." name="carImage" value="" />
            <input type="text" id="carBrand" placeholder="Audi" name="carBrand" value="" />
            <label for="seats">Available Seats</label>
            <label for="price">Price</label>
            <input type="text" id="seats" placeholder="4" name="seats" value="" />
            <input type="text" id="price" placeholder="25" name="price" value="" />
            <label for="description">Description</label>
            <textarea id="description" placeholder="Information about the collection"
              name="description"></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
    )
}

export default Create;