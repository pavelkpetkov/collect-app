
const Card = ({
    collection
}) => {

    return (
        <div className="overview">
            <h3>{collection.title}</h3>
            <article>
                <img alt="CollectionImage" src={collection.collectionImage}></img>
            </article>
            <p>{collection.description}</p>
            <p>Owner</p>
            <button href="/data/details/:id">Details</button>
        </div>
    )
}

export default Card;