import { useState, useEffect } from "react";
import * as dataService from '../services/dataService';
import Card from './Card';

const AllCollections = () => {

  const [collections, setCollections] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dataService.getAll()
      .then(result => {
        setCollections(result);
      })
  }, [])

  return (
    <>
      {collections.length > 0
        ? (
          <section className="All-collections">
            <h2>All collections</h2>
            <article className="container">

              {collections
                .filter((val) => {
                  if (searchTerm === "") {
                    return val
                  } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                  } else {
                    return null
                  }
                })
                .map(x => <Card key={x._id} collection={x} />)}

            </article>
            <input type="text" className="search" placeholder="Search..." onChange={(e) => { setSearchTerm(e.target.value) }} />
          </section>
        )
        : <h2 style={{ color: "white" }}>No collections yet!</h2>
      }
    </>
  )
}

export default AllCollections;