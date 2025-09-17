const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-8 animate-fade-in">
        Loading Brandwox Experience...
      </h2>
      <div className="w-72 h-3 bg-gray-200 rounded-full overflow-hidden shadow-lg">
        <div className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-loading-bar rounded-full"></div>
      </div>
      <p className="text-lg text-gray-600 mt-8 animate-fade-in delay-200">
        Please wait while we prepare something amazing for you!
      </p>
      {/* Animation styles */}
      <style>
        {`
          @keyframes loading-bar {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          .animate-loading-bar {
            animation: loading-bar 1.5s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default LoadingPage;
