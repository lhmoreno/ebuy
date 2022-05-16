function StoreOptions() {
  return (
    <div className="container-sm py-3 flex justify-between items-center gap-2 bg-white">
      <form
        className="flex"
        onSubmit={e => e.preventDefault()}
      >
        <button
          className="w-12 flex items-center justify-center bg-purple-500 rounded-l"
          type="submit"
        >
          <svg className="h-3.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              className="fill-gray-100"
              d="M14.041 13.856C14.007 13.882 13.974 13.911 13.942 13.943C13.91 13.975 13.882 14.007 13.855 14.042C12.597 15.255 10.886 16 9 16C7.067 16 5.318 15.218 4.05 13.95C2.782 12.682 2 10.933 2 9C2 7.067 2.782 5.318 4.05 4.05C5.318 2.782 7.067 2 9 2C10.933 2 12.682 2.782 13.95 4.05C15.218 5.318 16 7.067 16 9C16 10.886 15.255 12.597 14.041 13.856V13.856ZM19.707 18.293L16.032 14.618C17.263 13.078 18 11.125 18 9C18 6.515 16.992 4.264 15.364 2.636C13.736 1.008 11.485 0 9 0C6.515 0 4.264 1.008 2.636 2.636C1.008 4.264 0 6.515 0 9C0 11.485 1.008 13.736 2.636 15.364C4.264 16.992 6.515 18 9 18C11.125 18 13.078 17.263 14.618 16.032L18.293 19.707C18.684 20.098 19.317 20.098 19.707 19.707C20.097 19.316 20.098 18.683 19.707 18.293V18.293Z"
            />
          </svg>
        </button>
        <input
          className="w-full px-2 py-1 border-y border-r border-gray-300 rounded"
          type="text"
          placeholder="Procurar produtos..."
        />
      </form>

      <button
        className="flex items-center gap-1 text-purple-500"
        type="button"
      >
        <svg className="h-3" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className="fill-purple-500"
            d="M18.845 2L12.236 9.814C12.089 9.987 12 10.213 12 10.46V17.382L10 16.382V10.46C10.001 10.233 9.923 10.003 9.764 9.814L3.155 2H18.845ZM21 1.86352e-06H1C0.448 1.86352e-06 0 0.448002 0 1C0 1.247 0.0889999 1.473 0.236 1.646L8 10.826V17C8 17.389 8.222 17.727 8.553 17.894L12.553 19.894C13.047 20.141 13.648 19.941 13.895 19.447C13.967 19.301 14.001 19.146 14 19V10.826L21.764 1.646C22.121 1.224 22.068 0.593002 21.646 0.237002C21.457 0.0770019 21.227 -0.000998137 21 1.86352e-06V1.86352e-06Z"
          />
        </svg>
        Filtrar
      </button>
    </div>
  )
}

export default StoreOptions