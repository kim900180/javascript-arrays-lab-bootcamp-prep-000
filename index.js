// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens = [...kittens, name]
  return kittens
}

function destrutivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}