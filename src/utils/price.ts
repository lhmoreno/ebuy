export function formatPriceInReal(price: number) {
  let real = String(price.toFixed(2)).replace('.', ',')

  if (price >= 100000) {
    real = real.slice(0, 3) + '.' + real.slice(3)
  } else if (price >= 10000) {
    real = real.slice(0, 2) + '.' + real.slice(2)
  } else if (price >= 1000) {
    real = real.slice(0, 1) + '.' + real.slice(1)
  }

  return `R$ ${real}`
}
