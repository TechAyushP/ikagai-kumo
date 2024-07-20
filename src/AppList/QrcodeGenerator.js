import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const [url, setUrl] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleGenerate = () => {
    try {
      new URL(inputValue); // Validate URL
      setUrl(inputValue);
    } catch (_) {
      alert("Please enter a valid URL.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">
          QR Code Generator
        </h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter URL to generate QR code"
          className="w-full p-3 mb-4 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleGenerate}
          className="w-full px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-700"
        >
          Generate QR Code
        </button>
        {url && (
          <div className="flex justify-center mt-8">
            <QRCode value={url} />
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
