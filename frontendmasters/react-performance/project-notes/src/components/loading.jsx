const Loading = ({ loading = true }) => {
  if (!loading) return null;

  return (
    <div className="flex h-full w-full animate-pulse place-content-center items-center text-lg font-bold text-primary-900">
      Loading…
    </div>
  );
};

export default Loading;
