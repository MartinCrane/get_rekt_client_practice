class CocktailListController {
  constructor($target, detailController, cocktails) {
    this.$target = $target
    this.detailController = detailController
    this.cocktails = cocktails
    this.attachListeners()
    this.render()
  }

  render(){
    CocktailView.renderListItems(this.$target, this.cocktails)
  }

  attachListeners(){
    this.$target.on("click", "li.cocktail-list-item", (e) => {
      e.preventDefault()
      Cocktail.find($(e.currentTarget).data("id")).
      then((cocktail) => {
        this.detailController.setCurrent(cocktail)
      })
    })
  }
}
