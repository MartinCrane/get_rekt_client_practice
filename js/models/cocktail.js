class Cocktail {
  static find(id){
    return Api.getJSON(`http://localhost:3000/cocktails/${id}`)
  }

  static all(){
    return Api.getJSON("http://localhost:3000/cocktails")
  }
}
