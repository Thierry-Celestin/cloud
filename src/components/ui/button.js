export function Button({ children, ...props }) {
    return (
      <button
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg text-lg font-semibold shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all hover:shadow-purple-500/50"
        {...props}
      >
        {children}
      </button>
    );
  }
  