import DownloadButton from "./DownloadButton";

function ImageDisplay({ imageURL }) {
  return (
    <div>
      {imageURL && (
        <div className="bg-slate-200 rounded-lg shadow-lg p-6">
          <h2 className="font-semibold text-stone-700 text-2xl mb-3">
            Generated Image
          </h2>
          <div className="text-center">
            <img
              className="max-w-full h-auto rounded-lg shadow-lg mx-auto mb-4"
              src={imageURL}
              alt="Generated"
            />
            <DownloadButton imageURL={imageURL} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageDisplay;
