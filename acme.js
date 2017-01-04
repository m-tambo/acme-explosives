// enable bootstrap dropdowns
$('.dropdown-toggle').dropdown()

$('#fireworksSelect').click(function() {
   console.log("hi")
})

$('#dynamiteSelect').click(promise1)






function populateCards () {
   for (let i = 0; i < 6; i++) {
      $('#grid').append(`
         <div class="container card col-sm-5 col-xs-5 col-md-4 col-lg-3">
            <h1>Firework ${i}</h1>
            <h3>Type ${i}</h3>
            <p>Description ${i}</p>
         </div>
      `)
   }
}
