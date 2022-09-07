import { useEffect, useState } from "react";
import "./App.css";

const URL = "https://type.fit/api/quotes";
function App() {
  const [data, setData] = useState([]);
  const [oneItem, setOneItem] = useState([]);
  const [index, setIndex] = useState(1640);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (data.length) {
      setOneItem([data[index]]);
    }
  }, [data.length, index]);

  const next = () => {
    if (index < data.length - 1) {
      return setIndex((index) => index + 1);
    } else if (index === data.length - 1) {
      return setIndex(0);
    }
  };

  return (
    <div className="App" id="quote-box">
      {oneItem?.map((item, index) => (
        <div className="quote" key={index}>
          <p className="text" id="text">
            {item.text}
          </p>
          <p className="author" id="author=">
            {item.author}
          </p>
        </div>
      ))}
      <div className="buttons">
        <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">
          tweet
        </a>
        <button onClick={next} className="btn" id="new-quote">
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;
