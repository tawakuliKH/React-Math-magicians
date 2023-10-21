import { useEffect, useState } from 'react';

const Quote = () => {
  const URL = 'https://api.api-ninjas.com/v1/quotes';
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    let stop = false;
    const fetchData = async () => {
      try {
        const response = await fetch(URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'sDlyOsEBt6VwPMD/47kijw==K4FYO3w7R6cNwtPh',
          },
        });

        const json = await response.json();
        if (!stop) {
          setData(json);
          setIsLoading(false);
        }
      } catch (err) {
        setError(true);
        throw new Error(`Error trying to fetch the URL: ${err}`);
      }
    };
    fetchData();
    return () => {
      stop = true;
    };
  }, []);
  if (error) {
    return (
      <div>
        <h3>Random Quote</h3>
        <p className="error">* Sorry, we have an error loading the quote, please reload the page to try again *</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="container-quote">
        <h2> Quote</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container-quote">
      <h2>Quote</h2>
      <p className="quote">
        &quot;
        {data[0].quote}
        &quot;
      </p>
      <p>
        <big>Author: </big>
        {data[0].author}
      </p>
    </div>
  );
};

export default Quote;
