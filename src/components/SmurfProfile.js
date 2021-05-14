import React from 'react';

const SmurfProfile = (props)=> {
    const { smurf } = props;

    return (
      <main>
        <div className="listContainer">
          <div data-testid="smurf" className="card-profile">
            <div className="card-body">
            <h3 className="card-title">{smurf.name}</h3>
                <hr/>
                <p className="card-text"><b>Position:</b> {smurf.position}</p>
                <p className="card-text"><b>Nickname:</b> {smurf.nickname}</p>
                <p className="card-text"><b>Description:</b> {smurf.description}</p>
            </div>
          </div>
        </div>
      </main>
    );
}

export default SmurfProfile;