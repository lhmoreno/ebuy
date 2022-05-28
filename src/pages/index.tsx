import type { NextPage } from 'next'
import { FormEvent, Fragment, useState } from 'react'
import Head from 'next/head'

const fakeProducts = [
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    price: "R$ 23,15"
  }
]

const Home: NextPage = () => {
  const [search, setSearch] = useState('')

  function handleSearchProduct(event: FormEvent) {
    event.preventDefault()

    console.log(search)
  }

  return (
    <Fragment>
      <Head>
        <title>Ebuy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER */}
      <div className="bg-purple-500">
        <div className="mx-auto max-w-container p-4 flex flex-col gap-4 sm:px-6 sm:flex-row sm:items-center md:px-12 md:py-6">
          {/* MENU AND LOGO */}
          <div className="flex items-start gap-4">
            <button
              type="button"
            >
              <svg
                className="w-4.5 sm:w-5 md:w-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-white"
                  d="M1.2 13.7143H22.8C23.4624 13.7143 24 12.9463 24 12C24 11.0537 23.4624 10.2857 22.8 10.2857H1.2C0.5376 10.2857 0 11.0537 0 12C0 12.9463 0.5376 13.7143 1.2 13.7143ZM1.2 3.42857H22.8C23.4624 3.42857 24 2.66057 24 1.71429C24 0.768 23.4624 0 22.8 0H1.2C0.5376 0 0 0.768 0 1.71429C0 2.66057 0.5376 3.42857 1.2 3.42857ZM1.2 24H22.8C23.4624 24 24 23.232 24 22.2857C24 21.3394 23.4624 20.5714 22.8 20.5714H1.2C0.5376 20.5714 0 21.3394 0 22.2857C0 23.232 0.5376 24 1.2 24Z"
                />
              </svg>
            </button>
            <svg
              className="h-6 sm:h-7 md:h-8"
              viewBox="0 0 217 80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-white"
                d="M1.82857 63.1111C1.17672 63.1111 0.673016 62.9037 0.31746 62.4889C0.021164 62.0741 -0.0677249 61.5704 0.0507937 60.9778L12.4064 3.11111C12.5249 2.45926 12.8212 1.92593 13.2952 1.51111C13.7693 1.0963 14.3323 0.888888 14.9841 0.888888H54.0952C54.7471 0.888888 55.2212 1.0963 55.5175 1.51111C55.8138 1.92593 55.9026 2.45926 55.7841 3.11111L54.5397 8.97778C54.4212 9.57037 54.1249 10.0741 53.6508 10.4889C53.1767 10.9037 52.6138 11.1111 51.9619 11.1111H22.7175L19.3397 26.8444H46.6286C47.2804 26.8444 47.7545 27.0519 48.0508 27.4667C48.3471 27.8222 48.436 28.3259 48.3175 28.9778L47.1619 34.4889C47.0434 35.1407 46.7471 35.6741 46.273 36.0889C45.7989 36.4444 45.236 36.6222 44.5841 36.6222H17.2952L13.7397 52.8889H43.7841C44.436 52.8889 44.9101 53.0963 45.2063 53.5111C45.5026 53.9259 45.5915 54.4593 45.473 55.1111L44.2286 60.9778C44.1101 61.5704 43.8138 62.0741 43.3397 62.4889C42.8656 62.9037 42.3026 63.1111 41.6508 63.1111H1.82857Z"
              />
              <path
                className="fill-white"
                d="M79.7036 64C76.2665 64 73.4221 63.4074 71.1702 62.2222C68.9776 61.037 67.3776 59.5259 66.3702 57.6889L65.6591 60.9778C65.5406 61.5704 65.2147 62.0741 64.6814 62.4889C64.2073 62.9037 63.6739 63.1111 63.0813 63.1111H55.9702C55.3776 63.1111 54.9036 62.9037 54.548 62.4889C54.2517 62.0741 54.1628 61.5704 54.2813 60.9778L66.8147 2.13333C66.9332 1.54074 67.2295 1.03704 67.7036 0.622225C68.2369 0.207408 68.7999 0 69.3925 0H76.948C77.5999 0 78.0739 0.207408 78.3702 0.622225C78.6665 1.03704 78.7554 1.54074 78.6369 2.13333L74.4591 21.8667C76.2962 20.1481 78.2813 18.7556 80.4147 17.6889C82.6073 16.563 85.3036 16 88.5036 16C91.6443 16 94.2813 16.5333 96.4147 17.6C98.6073 18.6667 100.326 20.1481 101.57 22.0444C102.874 23.8815 103.704 26.0741 104.059 28.6222C104.474 31.1111 104.415 33.837 103.881 36.8C103.704 37.8667 103.496 38.9333 103.259 40C103.081 41.0074 102.844 42.0444 102.548 43.1111C101.541 47.2 100.029 50.8148 98.0147 53.9556C95.9999 57.0963 93.4813 59.5556 90.4591 61.3333C87.4369 63.1111 83.8517 64 79.7036 64ZM77.748 54.4889C80.1776 54.4889 82.2221 53.9556 83.8813 52.8889C85.5406 51.763 86.9036 50.3111 87.9702 48.5333C89.0962 46.6963 89.9554 44.7407 90.548 42.6667C90.8443 41.7778 91.0814 40.8889 91.2591 40C91.4962 39.1111 91.6443 38.2222 91.7036 37.3333C92.0591 35.2 92.1184 33.2444 91.8813 31.4667C91.7036 29.6889 91.0517 28.2667 89.9258 27.2C88.8591 26.0741 87.0517 25.5111 84.5036 25.5111C82.1332 25.5111 80.0295 26.0444 78.1925 27.1111C76.4147 28.1778 74.9332 29.5407 73.748 31.2C72.6221 32.8 71.8221 34.4889 71.348 36.2667C71.0517 37.3333 70.785 38.4889 70.548 39.7333C70.311 40.9185 70.1332 42.0444 70.0147 43.1111C69.6591 44.9481 69.6295 46.7556 69.9258 48.5333C70.2221 50.2519 70.9628 51.6741 72.148 52.8C73.3925 53.9259 75.2591 54.4889 77.748 54.4889Z"
              />
              <path
                className="fill-white"
                d="M126.129 64C122.277 64 119.136 63.2 116.706 61.6C114.277 59.9407 112.647 57.6296 111.817 54.6667C111.047 51.6444 111.077 48.0889 111.906 44L117.24 19.0222C117.358 18.4296 117.654 17.9259 118.129 17.5111C118.662 17.0963 119.225 16.8889 119.817 16.8889H127.64C128.232 16.8889 128.677 17.0963 128.973 17.5111C129.269 17.9259 129.358 18.4296 129.24 19.0222L124.084 43.4667C123.551 45.8963 123.373 47.9407 123.551 49.6C123.788 51.2 124.469 52.4148 125.595 53.2444C126.721 54.0741 128.469 54.4889 130.84 54.4889C134.04 54.4889 136.825 53.5111 139.195 51.5556C141.566 49.6 143.106 46.9037 143.817 43.4667L149.062 19.0222C149.18 18.4296 149.477 17.9259 149.951 17.5111C150.484 17.0963 151.047 16.8889 151.64 16.8889H159.373C160.025 16.8889 160.499 17.0963 160.795 17.5111C161.092 17.9259 161.18 18.4296 161.062 19.0222L152.173 60.9778C152.055 61.5704 151.758 62.0741 151.284 62.4889C150.81 62.9037 150.247 63.1111 149.595 63.1111H142.395C141.803 63.1111 141.329 62.9037 140.973 62.4889C140.677 62.0741 140.588 61.5704 140.706 60.9778L141.417 57.3333C140.114 58.6963 138.751 59.8815 137.329 60.8889C135.966 61.8963 134.395 62.6667 132.617 63.2C130.899 63.7333 128.736 64 126.129 64Z"
              />
              <path
                className="fill-white"
                d="M168.181 80C167.47 80 166.996 79.7037 166.759 79.1111C166.522 78.5185 166.641 77.8667 167.115 77.1556L177.959 60.0889L169.337 19.3778C169.218 18.7259 169.337 18.163 169.692 17.6889C170.048 17.1556 170.67 16.8889 171.559 16.8889H178.226C178.937 16.8889 179.441 17.0667 179.737 17.4222C180.033 17.7185 180.211 18.1037 180.27 18.5778L186.226 47.7333L204.715 18.5778C205.011 18.1037 205.367 17.7185 205.781 17.4222C206.255 17.0667 206.848 16.8889 207.559 16.8889H215.204C215.796 16.8889 216.241 17.1556 216.537 17.6889C216.892 18.163 216.863 18.7852 216.448 19.5556L178.492 78.3111C178.196 78.7852 177.811 79.1704 177.337 79.4667C176.922 79.8222 176.359 80 175.648 80H168.181Z"
              />
            </svg>
          </div>

          {/* FORM SEARCH */}
          <form
            className="w-full max-w-search flex items-center sm:ml-4"
            onSubmit={handleSearchProduct}
          >
            <input
              className="w-full h-10 pl-2 rounded-l text-gray-900 placeholder:gray-400"
              type="text"
              placeholder="Macbook"
            />
            <button
              className="h-10 px-4 rounded-r bg-white"
              type="submit"
            >
              <svg
                className="w-3.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-gray-400"
                  d="M16.849 16.627C16.8082 16.6582 16.7686 16.693 16.7302 16.7314C16.6918 16.7698 16.6582 16.8082 16.6258 16.8502C15.1162 18.3058 13.063 19.1998 10.7999 19.1998C8.48029 19.1998 6.38152 18.2614 4.85994 16.7398C3.33836 15.2182 2.39997 13.1194 2.39997 10.7999C2.39997 8.48029 3.33836 6.38152 4.85994 4.85994C6.38152 3.33836 8.48029 2.39997 10.7999 2.39997C13.1194 2.39997 15.2182 3.33836 16.7398 4.85994C18.2614 6.38152 19.1998 8.48029 19.1998 10.7999C19.1998 13.063 18.3058 15.1162 16.849 16.627V16.627ZM23.6481 21.9513L19.2382 17.5414C20.7153 15.6934 21.5997 13.3498 21.5997 10.7999C21.5997 7.8179 20.3901 5.11674 18.4366 3.16316C16.483 1.20959 13.7818 0 10.7999 0C7.8179 0 5.11674 1.20959 3.16316 3.16316C1.20959 5.11674 0 7.8179 0 10.7999C0 13.7818 1.20959 16.483 3.16316 18.4366C5.11674 20.3901 7.8179 21.5997 10.7999 21.5997C13.3498 21.5997 15.6934 20.7153 17.5414 19.2382L21.9513 23.6481C22.4205 24.1173 23.1801 24.1173 23.6481 23.6481C24.1161 23.1789 24.1173 22.4193 23.6481 21.9513V21.9513Z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* ORDER */}
      <div className="bg-gray-200">
        <div className="mx-auto max-w-container px-4 py-2 flex gap-2 text-gray-500 sm:px-6 md:px-12">
          <svg
            className="w-3.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-gray-500"
              d="M2.56087 13.0605L10.5004 5.121V22.5C10.5004 23.328 11.1724 24 12.0004 24C12.8284 24 13.5004 23.328 13.5004 22.5V5.121L21.4399 13.0605C22.0264 13.647 22.9759 13.647 23.5609 13.0605C24.1459 12.474 24.1474 11.5245 23.5609 10.9395L13.0609 0.4395C12.9229 0.3015 12.7579 0.1905 12.5749 0.114C12.3919 0.0375003 12.1954 0 12.0004 0C11.6164 0 11.2324 0.147 10.9399 0.4395L0.439875 10.9395C-0.146625 11.526 -0.146625 12.4755 0.439875 13.0605C1.02638 13.6455 1.97587 13.647 2.56087 13.0605Z"
            />
          </svg>
          <p>PREÇO</p>
        </div>
      </div>

      {/* TEXT-SEARCH */}
      <div>
        <div className="mx-auto max-w-container px-4 py-8 flex flex-col sm:px-6 md:px-12">
          <p className="font-medium text-gray-400">VOCÊ BUSCOU POR:</p>
          <p className="font-medium text-purple-700">MACBOOK</p>
        </div>
      </div>

      {/* PRODUCTS */}
      <div>
        <div className="mx-auto max-w-container pt-0.5 flex flex-col gap-0.5 bg-gray-200">
          {fakeProducts.map((product, index) => (
            <div
              className="px-4 py-2 flex gap-4 bg-white text-gray-900"
              key={String(index)}
            >
              <img
                className="w-28 object-contain"
                src="/images/product.jpg"
                alt="product"
              />
              <div className="flex flex-col justify-between">
                <p>Mouse Gamer Logitech G203 LIGHTSYNC RGB...</p>
                <p className="text-xl text-orange-600 font-medium">R$ 200,00 <span className="text-sm font-normal">à vista</span></p>
                <p className="text-sm text-gray-500 font-bold">R$ 160,00 <span className="text-xs font-normal">em até 10x</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div>
        <div className="p-4 flex items-center justify-center bg-purple-600">
          <p className="text-lg text-white text-center font-medium">Este site é apenas uma demonstração</p>
        </div>
        <div className="p-4 flex items-center justify-center bg-purple-800">
          <p className="text-xs text-gray-300 text-center">Todos os direitos reservados</p>
        </div>
      </div>
    </Fragment>
  )
}

export default Home