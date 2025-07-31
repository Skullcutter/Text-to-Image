import { useState } from "react";

function useImageGeneration() {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [imageURL, setImageURL] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL =
    "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-4";

  const generateImage = async () => {
    if (!inputText.trim()) {
      setError("Please enter a description");
      return;
    }

    if (!API_KEY || API_KEY === "YOUR_HF_API_KEY") {
      setError("Please add your Hugging Face API key");
      return;
    }
    setIsLoading(true);
    setError("");
    setImageURL("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: inputText,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status:${response.status}`);
      }

      const blob = await response.blob();
      const imageObjectURL = URL.createObjectURL(blob);
      console.log(imageObjectURL);
      setImageURL(imageObjectURL);
    } catch (err) {
      setError(`Failed to generate image: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    inputText,
    setInputText,
    isLoading,
    error,
    imageURL,
    generateImage,
  };
}

export default useImageGeneration;
