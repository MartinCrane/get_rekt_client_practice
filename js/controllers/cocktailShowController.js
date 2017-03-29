class CocktailShowController {
  constructor($target) {
    this.$target = $target
  }

  setCurrent(cocktail){
    this.cocktail = cocktail
    CocktailView.renderDetail(this.$target, cocktail)
  }
}
