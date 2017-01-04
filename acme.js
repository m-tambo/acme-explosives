// enable bootstrap dropdowns
$('.dropdown-toggle').dropdown()

$('#dropdownMenu1').change(populateCards(e))






function populateCards () {
   for (let i = 0; i < 6; i++) {
      if ()
      $('#grid').append(`
         <div class="container card col-sm-5 col-xs-5 col-md-4 col-lg-3">
            <h1>Firework ${i}</h1>
            <h3>Type ${i}</h3>
            <p>Description ${i}</p>
         </div>
      `)
   }
}
