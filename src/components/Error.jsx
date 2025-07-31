function Error({ error }) {
  return (
    <div>
      {error && (
        <div className="bg-red-100 border border-red-400 mt-4 p-3 text-red-700 font-semibold rounded-md">
          {error}
        </div>
      )}
    </div>
  );
}

export default Error;
