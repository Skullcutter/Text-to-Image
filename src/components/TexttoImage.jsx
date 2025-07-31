import useImageGeneration from "../service/apiTexttoImage";
import Error from "./Error";
import GenerateButton from "./GenerateButton";
import ImageDisplay from "./ImageDisplay";

function TexttoImage() {
  const { inputText, setInputText, isLoading, error, imageURL, generateImage } =
    useImageGeneration();

  const samplePrompts = [
    "A futuristic city at night",
    "A dragon flying over mountains",
    "A cat playing guitar",
    "A spaceship landing on Mars",
    "A robot painting a sunset",
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-stone-700 mb-5">
          Text to Image Generator
        </h1>

        <div className="bg-slate-200 rounded-md shadow-lg p-6 mb-6">
          <div className="mb-6">
            <label
              htmlFor="textInput"
              className="block text-stone-700 text-lg font-semibold mb-2"
            >
              Enter your image description:
            </label>
            <textarea
              id="textInput"
              rows="3"
              placeholder="Describe the image you want to generate..."
              className="w-full px-3 py-2 rounded-md border border-slate-300 shadow-md focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500 resize-none text-stone-700"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>

          <div>
            <p className="text-stone-700 mb-2">Try these sample prompts:</p>
            <div className="flex gap-2 flex-wrap mb-3">
              {samplePrompts.map((prompt, i) => (
                <button
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-all duration-700"
                  onClick={() => setInputText(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Image Generation */}
          <GenerateButton generateImage={generateImage} isLoading={isLoading} />

          {/* Error Displays (If any) */}
          <Error error={error} />
        </div>

        {/* Final output */}
        <ImageDisplay imageURL={imageURL} />
      </div>
    </div>
  );
}

export default TexttoImage;
