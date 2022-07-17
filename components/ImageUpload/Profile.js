import React from "react";

const Profile =({
    onSubmit,
    src,
    name,
    status,
  })=> { 
    return (
    <div className="card">
      <form onSubmit={onSubmit}>
        <h1>Profile Card</h1>
        <label className="custom-file-upload fas">
          <div className="img-wrap" >
            <img for="photo-upload" src={src}/>
          </div>
        </label>
        <div className="name">{name}</div>
        <div className="status">{status}</div>
        <button type="submit" className="edit">Edit Profile </button>
      </form>
    </div>
    )
}

export default Profile;
    