$(function(){
  Cocktail.all().then((cocktails) => {
    let cocktailShowController = new CocktailShowController($(".cocktail-detail"))
    let cocktailListController = new CocktailListController($(".cocktail-list"), cocktailShowController, cocktails)
  })
})
