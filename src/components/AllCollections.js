import { useState, useEffect } from "react";
import * as dataService from '../services/dataService';
import Card from './Card';

const AllCollections = () => {

  const [collections, setCollections] = useState([]);

  useEffect(() => {
    dataService.getAll()
      .then(result => {
        console.log(result);
        setCollections(result);
      })
  }, [])

  return (
    <section className="All-collections">
      <h2>All collections</h2>
      <article className="container">

        {collections.map(x => <Card key={x._id} collection={x} />)}

      </article>
    </section>
  )
}

export default AllCollections;