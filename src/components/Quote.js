import { useState, useEffect } from 'react';

function Quote() {
  const [quoteData, setQuoteData] = useState({ quote: '', author: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes/?category=computers', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'H0Sk0BUbQ0sB7q2awRFmmi4ZHm0VKjrkCLxe7zVK',
          },
          contentType: 'application/json',
        });

        const data = await response.json();

        setQuoteData({ quote: data[0].quote, author: data[0].author });
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div>{quoteData.quote}</div>
      <br />
      <div>{quoteData.author}</div>
    </div>
  );
}

export default Quote;
