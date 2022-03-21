export function formatPriceInReal(price: number) {
  let real = String(price.toFixed(2)).replace('.', ',')
  if (price >= 1000) {
    real = real.slice(0, 1) + '.' + real.slice(1)
  }

  return `R$ ${real}`
}
