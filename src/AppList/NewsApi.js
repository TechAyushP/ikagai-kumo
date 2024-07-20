import React, { useState, useEffect } from "react";

function NewsApi() {
  const [articles, setArticles] = useState([]);
  const [time, setTime] = useState(new Date());
  const apiKey = "bc3dad143f9a45e1929620a6d5ee544f";
  const articlesUrl = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=${apiKey}`;
  const sourcesUrl = `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articlesResponse = await fetch(articlesUrl);
        const articlesData = await articlesResponse.json();
        const filteredArticles = articlesData.articles.filter(
          (article) => article.urlToImage
        );
        setArticles(filteredArticles);
      } catch (error) {
        console.error("Error fetching the news:", error);
      }
    };
    fetchData();
  }, [articlesUrl]);

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const dayName = date.toLocaleString("default", { weekday: "long" });
    return `${day} ${month} ${year} (${dayName})`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.clockContainer}>
        <div style={styles.time}>{formatTime(time)}</div>
        <div style={styles.date}>{formatDate(time)}</div>
      </div>

      <main style={styles.main}>
        {articles.map((article, index) => (
          <figure key={index} className="snip1347">
            <img src={article.urlToImage} alt={article.title} />
            <div className="source">{article.source.name}</div>
            <figcaption>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read More
              </a>
            </figcaption>
          </figure>
        ))}
      </main>
      <aside style={styles.sidebar}>
        <p>Sources: newsapi.org | info@mdzaid.us.kg</p>
      </aside>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#121212",
    padding: "20px",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#1e88e5",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    margin: 0,
  },
  clockContainer: {
    marginTop: "10px",
    backgroundColor: "#1e1e1e",
    color: "#39FF14",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
  },
  time: {
    fontSize: "4vh",
    fontFamily: "Orbitron, sans-serif",
  },
  date: {
    fontSize: "2vh",
    fontFamily: "Orbitron, sans-serif",
  },
  main: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    marginBottom: "20px",
  },
  sidebar: {
    backgroundColor: "#1e1e1e",
    padding: "20px",
    color: "white",
    display: "flex",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    marginTop: "20px",
  },
};

const snip1347Styles = `
  @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,600);
  .snip1347 {
    font-family: 'Roboto', Arial, sans-serif;
    position: relative;
    overflow: hidden;
    margin: 10px;
    min-width: 230px;
    max-width: 315px;
    width: 100%;
    color: #ffffff;
    text-align: left;
    background-color: #141414;
  }
  .snip1347 * {
    box-sizing: border-box;
    transition: all 0.25s ease;
  }
  .snip1347 img {
    max-width: 100%;
    vertical-align: top;
    opacity: 0.85;
    margin: 0 0 10px;
  }
  .snip1347 .source {
    position: absolute;
    background-color: #1e1e1e;
    top: 0;
    right: 0;
    width: 100%;
    padding: 10px 25px 0;
    text-align: right;
    font-size: 0.8em;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
  }
  .snip1347 figcaption {
    width: 100%;
    background-color: #141414;
    padding: 0 25px 25px;
    position: relative;
  }
  .snip1347 figcaption a {
    border: 1px solid #ffffff;
    color: #ffffff;
    font-size: 0.7em;
    text-transform: uppercase;
    text-decoration: none;
    margin: 10px 0;
    display: inline-block;
    opacity: 0.65;
    width: 47%;
    text-align: center;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .snip1347 figcaption a:hover {
    opacity: 1;
  }
  .snip1347 h2 {
    margin: 0 0 10px;
    font-weight: 300;
    font-size: 1.5em;
    line-height: 1.2em;
  }
  .snip1347 p {
    font-size: 0.8em;
    letter-spacing: 1px;
    opacity: 0.8;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = snip1347Styles;
document.head.appendChild(styleSheet);

export default NewsApi;
