import React, { useState, useEffect } from "react";

function NewsApi() {
  const [articles, setArticles] = useState([]);
  const [sources, setSources] = useState([]);
  const [time, setTime] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const apiKey = "pub_490408933c9efa72f983d97d9371812346021";
  const articlesUrl = `https://newsdata.io/api/1/latest?apikey=${apiKey}&country=us,in&language=en`;
  const sourcesUrl = `https://newsdata.io/api/1/sources?apikey=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articlesResponse = await fetch(articlesUrl);
        const articlesData = await articlesResponse.json();
        const filteredArticles = articlesData.results.filter(
          (article) => article.image_url && article.language.includes("english")
        );
        setArticles(filteredArticles);

        const sourcesResponse = await fetch(sourcesUrl);
        const sourcesData = await sourcesResponse.json();
        const filteredSources = sourcesData.results.filter(
          (source) =>
            source.language.includes("english") &&
            source.country.includes("india")
        );
        setSources(filteredSources);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the news:", error);
      }
    };
    fetchData();
  }, [articlesUrl, sourcesUrl]);

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
    <div
      style={{
        ...styles.container,
        overflow: loading ? "hidden" : "auto",
        filter: loading ? "blur(5px)" : "none",
      }}
    >
      {loading ? (
        <div style={styles.loaderContainer}>
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div style={styles.clockContainer}>
            <div style={styles.time}>{formatTime(time)}</div>
            <div style={styles.date}>{formatDate(time)}</div>
          </div>
          <main style={styles.main}>
            {articles.map((article, index) => (
              <figure key={index} className="snip1347">
                <img src={article.image_url} alt={article.title} />
                <figcaption>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                  >
                    Read More
                  </a>
                  <div className="source">{article.source_id}</div>
                </figcaption>
              </figure>
            ))}
          </main>
          <aside style={styles.sidebar}>Contact- Info@mdzaid.us.kg</aside>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#121212",
    padding: "20px",
    minHeight: "100vh",
    color: "white",
    position: "relative",
  },
  clockContainer: {
    marginBottom: "20px",
    backgroundColor: "#1e1e1e",
    color: "#39FF14",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
    fontfamily: "Orbitron",
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
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
  },
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#121212",
    zIndex: 1000,
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
  .snip1347 .source {
    font-size: 0.8em;
    letter-spacing: 1px;
    opacity: 0.8;
    margin-top: 10px;
  }
  .loader {
    width: 50px;
    aspect-ratio: 1;
    display: grid;
    border-radius: 50%;
    background:
      linear-gradient(0deg ,rgb(0 0 0/50%) 30%,#0000 0 70%,rgb(0 0 0/100%) 0) 50%/8% 100%,
      linear-gradient(90deg,rgb(0 0 0/25%) 30%,#0000 0 70%,rgb(0 0 0/75% ) 0) 50%/100% 8%;
    background-repeat: no-repeat;
    animation: l23 1s infinite steps(12);
  }
  .loader::before,
  .loader::after {
    content: "";
    grid-area: 1/1;
    border-radius: 50%;
    background: inherit;
    opacity: 0.915;
    transform: rotate(30deg);
  }
  .loader::after {
    opacity: 0.83;
    transform: rotate(60deg);
  }
  @keyframes l23 {
    100% {transform: rotate(1turn)}
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = snip1347Styles;
document.head.appendChild(styleSheet);

export default NewsApi;
