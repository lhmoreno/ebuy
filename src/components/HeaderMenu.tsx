function HeaderMenu() {
  return (
    <div className="ebuy-container py-3 flex justify-between items-center bg-purple-500 md:py-4">
      <h1 className="font-bold text-white text-xl md:text-2xl">
        Ebuy
      </h1>

      <button
        className="group"
        type="button"
      >
        <svg className="w-5 md:w-6" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className="fill-gray-100 group-hover:fill-white"
            d="M1 8H19C19.552 8 20 7.552 20 7C20 6.448 19.552 6 19 6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8ZM1 2H19C19.552 2 20 1.552 20 1C20 0.448 19.552 0 19 0H1C0.448 0 0 0.448 0 1C0 1.552 0.448 2 1 2ZM1 14H19C19.552 14 20 13.552 20 13C20 12.448 19.552 12 19 12H1C0.448 12 0 12.448 0 13C0 13.552 0.448 14 1 14Z"
          />
        </svg>
      </button>
    </div>
  )
}

export default HeaderMenu