import React, { useState, useEffect, useRef } from "react";

const Widget = () => {
  const [currentStation, setCurrentStation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(new Audio());

  const stations = [
    {
      name: "93.5 Red FM",
      url: "https://live.cmr24.net/CMR/Desi_Music-MQ/icecast.audio",
    },
    {
      name: "Fever 104 Fm",
      url: "https://nl4.mystreaming.net/uber/bollywoodlove/icecast.audio",
    },
    { name: "102.8 Radio City", url: "https://prclive1.listenon.in/Hindi" },
    { name: "92.7 Big Fm", url: "http://sc-bb.1.fm:8017/" },
    { name: "Radio Mirchi", url: "http://peridot.streamguys.com:7150/Mirchi" },
    {
      name: "Radio Nasha",
      url: "https://rb.gy/cuyktu",
    },
    {
      name: "104.8 Ishq",
      url: "https://nl4.mystreaming.net/uber/lrbollywood/icecast.audio",
    },
    { name: "Dance Wave", url: "https://dancewave.online/dance.mp3" },
    { name: "Smooth Jazz", url: "http://jking.cdnstream1.com/b22139_128mp3" },
    {
      name: "Kishore Kumar Hits",
      url: "https://rb.gy/cac586",
    },

    {
      name: "Mohammed Rafi Radio",
      url: "https://rb.gy/d9n6as",
    },
    {
      name: "Radio Lata Mangeshkar",
      url: "https://rb.gy/oph5pq",
    },

    {
      name: "Bollywood Gaane Purane",
      url: "https://rb.gy/10omw3",
    },

    { name: "Old Hindi", url: "http://104.167.2.55:8099/stream" },
    {
      name: "Goldy Evergreen",
      url: "https://rb.gy/cuyktu",
    },
  ];

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio.pause();
    };
  }, []);

  const playStation = async (station) => {
    const audio = audioRef.current;

    if (currentStation === station.name) {
      audio.pause();
      setCurrentStation(null);
      setIsLoading(false);
    } else {
      try {
        setIsLoading(true);
        if (audio.src !== station.url) {
          audio.src = station.url;
        }
        await audio.play();
        setCurrentStation(station.name);
        setIsLoading(false);
      } catch (error) {
        console.error("Error playing audio:", error);
        setIsLoading(false);
      }
    }
  };

  const getRandomColor = () => {
    const colors = [
      "rgb(255, 99, 132)",
      "rgb(54, 162, 235)",
      "rgb(255, 206, 86)",
      "rgb(75, 192, 192)",
      "rgb(153, 102, 255)",
      "rgb(255, 159, 64)",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const RadioStation = ({ station, isPlaying, onClick }) => (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.75rem 0",
        borderBottom: "1px solid #1f2937",
        cursor: "pointer",
        color: isPlaying ? "#10b981" : "#d1d5db",
      }}
      onClick={onClick}
    >
      <span style={{ fontSize: "1.125rem" }}>{station.name}</span>
      <button style={{ color: "#6b7280", transition: "color 0.3s" }}>
        {isPlaying ? " 🎀" : " ❤️️"}
      </button>
    </li>
  );

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "24rem", margin: "0 auto" }}>
        <h1
          style={{
            background: "194, 122, 118",
            color: " #53a8b6",
            fontSize: "1.875rem",
            fontWeight: "bold",
            marginBottom: "0.75rem",
            textAlign: "center",
          }}
        >
          Radio MDZ
        </h1>

        <p
          style={{
            color: "#6b7280",
            marginBottom: "0.75rem",
            textAlign: "center",
          }}
        >
          {currentStation ? "Now Playing" : "To Turn on the Radio."}
        </p>

        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
            color: " #bbe4e9",
            textAlign: "center",
          }}
        >
          {currentStation || "Select a station"}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "4rem",
            marginBottom: "1.5rem",
          }}
        >
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            [
              0, 0.5, 0.2, 0.75, 1.0, 1.5, 1.2, 1.75, 2.0, 2.5, 2.2, 2.75, 3.0,
              3.5, 3.2, 3.75, 4.0, 4.5, 4.2, 4.75, 5.0, 5.5, 5.2, 5.75, 6.0,
            ].map((delay, index) => (
              <div
                key={index}
                style={{
                  animation: currentStation
                    ? `play 1s ease-out infinite`
                    : "none",
                  animationDelay: currentStation ? `${delay}s` : "0s",
                  backgroundColor: currentStation
                    ? getRandomColor()
                    : "transparent",
                  height: currentStation ? "100%" : "0",
                  width: "0.5rem",
                  margin: "0 0.1rem",
                  transition: "height 0.3s, background-color 0.3s",
                }}
              />
            ))
          )}
        </div>

        <h2
          style={{
            fontSize: "1.25rem",
            textAlign: "center",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#f4eec0",
          }}
        >
          Stations
        </h2>

        <ul
          style={{
            marginBottom: "1.5rem",
            borderRadius: "0.5rem",
            overflowY: "auto",
            maxHeight: "30rem",
            backgroundColor: "#111827",
            padding: "0 1rem",
          }}
        >
          {stations.map((station) => (
            <RadioStation
              key={station.name}
              station={station}
              isPlaying={currentStation === station.name}
              onClick={() => playStation(station)}
            />
          ))}
        </ul>
        <p
          style={{
            color: "#6b7280",
            marginBottom: "0.75rem",
            textAlign: "center",
          }}
        >
          {
            ""
          }
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              backgroundColor: "#1f2937",
              color: "#e5e7eb",
              padding: "0.25rem 1.0rem",
              borderRadius: "9999px",
              fontWeight: "500",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              transition: "all 0.3s",
              cursor: "pointer",
            }}
          >
            Contact- Info@mdzaid.us.kg
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes play {
          0% {
            height: 10%;
          }
          25% {
            height: 75%;
          }
          50% {
            height: 50%;
          }
          75% {
            height: 100%;
          }
          100% {
            height: 10%;
          }
        }

        @keyframes l2 {
          50% {
            background-position: right;
          }
        }

        .loader {
          width: 120px;
          height: 20px;
          border-radius: 20px;
          background: radial-gradient(farthest-side, orange 94%, #0000)
            left/20px 20px no-repeat lightblue;
          animation: l2 1s infinite linear;
        }

        ul::-webkit-scrollbar {
          display: none;
        }

        ul {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Widget;
