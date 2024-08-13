export default function LoadingSpinner() {
  return (
    <aside className="flex h-screen items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
    </aside>
  );
}
