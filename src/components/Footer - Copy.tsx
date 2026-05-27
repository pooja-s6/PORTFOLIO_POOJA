const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Pooja S. Built with React + TypeScript
        </p>
        <p className="text-gray-500 text-xs mt-1">
          Open to backend and cloud opportunities
        </p>
      </div>
    </footer>
  )
}

export default Footer
