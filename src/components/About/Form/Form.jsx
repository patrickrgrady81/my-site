import React, {useState} from 'react';

import './Form.css';

function Form() {

  let [name, setName] = useState();

  const clicker = (e) => {
    e.preventDefault();
    console.log("clicked");
    // setName("Name");
    // window.location.href = "mailto:mail@example.org";
  }

  const handleName = (e) => {
    console.log(e, name);
    setName(e.target.value);
  }

    return (
      <div className="my-form">
        <p className="more-info">Want to leave a comment</p>
        <p className="more-info">or know more about me?</p>
        <input className="in" type="text" placeholder="Name" onChange={handleName}/>
        <input className="in" type="text" placeholder="Email"/>
        <textarea placeholder="Comment" cols="5" rows="10" />
        <button onClick={clicker}>Send</button>
      </div>
    )
}

export default Form
