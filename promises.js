// define promises

var promise1 = new Promise(function(resolve, reject){
  var request1 = new XMLHttpRequest()
  request1.addEventListener("load", function() {
    var data = JSON.parse(request1.responseText).categories
    resolve(data)
  })
  request1.open("GET", "json/categories.json")
  request1.send()
})

var promise2 = new Promise(function(resolve, reject){
  var request2 = new XMLHttpRequest()
  request2.addEventListener("load", function() {
    var data = JSON.parse(request2.responseText).types
    resolve(data)
  })
  request2.open("GET", "json/types.json")
  request2.send()
})

var promise3 = new Promise(function(resolve, reject){
  var request3 = new XMLHttpRequest()
  request3.addEventListener("load", function() {
    var data = JSON.parse(request3.responseText).products
    resolve(data)
  })
  request3.open("GET", "json/products.json")
  request3.send()
})





 promise1
  .then(
  function(val){
    categories = val
    console.log("promise one resolved, ", categories)
    return promise2
  })
  .then(
    function(val) {
      types = val
      console.log("promise two resolved, ", types)
      return promise3
    })
  .then(
    function(val) {
      products = val
      console.log("promise three resolved, ", products)
    })
  .then(populateCards)


// Promise.all([promise1, promise2, promise3])
//   .then(function(values) {
//     categories = values[0]
//     types = values[1]
//     products = values[2]
//     populateCardss()
//   })
