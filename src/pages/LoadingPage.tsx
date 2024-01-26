function LoadingPage() {

  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black">
      <div className="h-2 w-full bg-primary">
        <div
          className="h-2 bg-accent transition-all duration-1000"
        ></div>
      </div>
      <p className="mt-4 text-lg font-semibold text-white">Loading...</p>
    </div>
  );
}

export default LoadingPage;
