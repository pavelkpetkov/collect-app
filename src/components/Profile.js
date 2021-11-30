const Profile = () => {

    return (
        <section className="Profile">
          <article className="person">
            <h2>Name</h2>
            <p>e-mail</p>
            <article>
              <img alt="profile" src="" />
            </article>
            <p>interests</p>
          </article>
          <article className="my-collections">
            <div className="overview">
              <h3>Title</h3>
              <article>
                <img alt="Collection" src=""></img>
              </article>
              <p>Description</p>
              <button>Details</button>
            </div>
            <div className="overview">
              <h3>Title</h3>
              <article>
                <img alt="Collection" src=""></img>
              </article>
              <p>Description</p>
              <button>Details</button>
            </div>
            <div className="overview">
              <h3>Title</h3>
              <article>
                <img alt="Collection" src=""></img>
              </article>
              <p>Description</p>
              <button>Details</button>
            </div>
          </article>
        </section>
    )
}

export default Profile;