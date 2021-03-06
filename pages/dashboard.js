import { useRouter } from 'next/router';
import { useState } from 'react';
const dashboard = () => {
  const router = useRouter();

  const [message, setMessage] = useState(null);
  const formSubmissionHandler = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const age = e.target.age.value;
    await postAndFetch({ name, age });
  };

  const postAndFetch = async (data) => {
    const response = await fetch('/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then((res) => res.json());
    console.log(response);
    setMessage(response.message);
  };

  const val = async () => {
    const response = await fetch('/api/spotify', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then((res) => res.json());
    console.log(response);
    setMessage(response.message);
  };

  // app.get('/login', function(req, res) {
  //   var scopes = 'user-read-private user-read-email';
  //   res.redirect('https://accounts.spotify.com/authorize' +
  //     '?response_type=code' +
  //     '&client_id=' + my_client_id +
  //     (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  //     '&redirect_uri=' + encodeURIComponent(redirect_uri));
  //   });

  let { query } = router;
  const openGoogle = () => {
    console.log("Fuck this shit")
  }
  const openFacebook = () => {
    console.log("Fuck Facebook")
  }
  return (
    <div>
      {!message ? (
        <form onSubmit={formSubmissionHandler}>
          <input minLength='2' type='text' name='name' placeholder='Name' />
          <input type='number' name='age' placeholder='Age' />
          <button type='submit'>FetchMessage</button>
        </form>
      ) : (
        <h1>{message}</h1>
      )}
      <div onClick = {openGoogle()}>
        Ekwoh jahan
          <button onClick={openFacebook()}>Imtehaan</button>
        beintehaan
        </div>
    </div>
  );
};

export default dashboard;
