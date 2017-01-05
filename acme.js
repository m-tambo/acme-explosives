// enable bootstrap dropdowns
$('.dropdown-toggle').dropdown()

$('#fireworksSelect').click(runPromises)

$('#dynamiteSelect').click(runPromises)





function resetCards () {
   $('#grid').empty()
}

function populateCards () {
   resetCards();
   let prods =[];
   for (let j=0; j < products.length; j++) {
      prods.push(products.childNode[j].type_id)
   }
   console.dir(prods)
      // for (let i = 0; i < 1; i++) {
      //    if (prods[i].type_id === 0) {
      //       $('#grid').append(`
      //          <div class="container card col-sm-5 col-xs-5 col-md-4 col-lg-3">
      //           <h1>Firework ${i}</h1>
      //             <h3>Type ${i}</h3>
      //             <p>Description ${i}</p>
      //          </div>
      //       `)
      //    }
      // }
}
