import { useState, useEffect } from "react";
import * as dataService from '../services/dataService';
import Card from './Card';

const AllCollections = () => {

  const [collections, setCollections] = useState([]);

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

              {collections.map(x => <Card key={x._id} collection={x} />)}

            </article>
          </section>
        )
        : <h2 style={{color: "white"}}>No collections yet!</h2>
      }
    </>
  )
}

export default AllCollections;