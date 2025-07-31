function DownloadButton({ imageURL }) {
  const downloadImage = () => {
    if (imageURL) {
      const link = document.createElement("a");
      link.href = imageURL;
      link.download = "generated-image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button
      className="px-6 py-2 bg-green-500 text-stone-200 rounded-md hover:bg-green-600 transition-colors"
      onClick={downloadImage}
    >
      Download Image
    </button>
  );
}

export default DownloadButton;
