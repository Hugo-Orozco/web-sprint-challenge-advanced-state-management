import React from 'react';
import { useHistory } from 'react-router-dom';

const Smurf = (props)=> {
    const { smurf } = props;

    const history = useHistory();

    const handleClick = () => {
        history.push(`/smurfs/${smurf.id}`);
    };

    return(<div data-testid="smurf" className="card" onClick={handleClick}>
        <div className="card-body">
        <h3 className="card-title">{smurf.name}</h3>
            <hr/>
            <p className="card-text"><b>Position:</b> {smurf.position}</p>
            <p className="card-text"><b>Nickname:</b> {smurf.nickname}</p>
            <p className="card-text"><b>Description:</b> {smurf.description}</p>
        </div>
    </div>);
}

export default Smurf;