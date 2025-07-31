function GenerateButton({ generateImage, isLoading }) {
  return (
    <button
      onClick={generateImage}
      disabled={isLoading}
      className={`w-full px-6 py-3 rounded-md font-bold text-stone-200 transition-colors ${
        isLoading
          ? "bg-slate-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
      }`}
    >
      {isLoading ? "Generating Image..." : "Generate Image"}
    </button>
  );
}

export default GenerateButton;
