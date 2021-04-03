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

  let { query } = router;
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
    </div>
  );
};

export default dashboard;
