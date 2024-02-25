class Author {
  name = "";
  email = "";
  gender = '';
  constructor(name ,email ,gender ){
      this.name = name;
      this.email = email 
      this.gender = gender
  }
  
  getName(){
      return this.name
  }
  getEmail(){
      return this.email
  }
  setEmail(email){
      this.email = email;
  }
  toString(){
      return "Author [ name = "+this.name+", Email = "+this.email+", Gender = "+this.gender+" ]";
  }
}
class Book {
  name = "";
  authors = [];
  price = 0;
  qty = 0 ;
  constructor(name , authors,price ,qty = 0 ){
      this.name = name;
      this.authors = authors;
      this.price =price;
      this.qty = qty;
  }
  // constructor(name , price ,qty){
  //     this.name = name;
  //     this.author = author;
  //     this.price =price;
  //     this.qty = qty;
  // }
  getName() {
      return this.name;
  }

  getAuthor() {
      return this.author;
  }

  getPrice() {
      return this.price;
  }

  setPrice(price) {
      this.price = price;
  }

  getQty() {
      return this.qty;
  }

  setQty(qty) {
      this.qty = qty;
  }

  toString() {
      let BookDetail = "";
      for (let i = 0; i < this.authors.length; i++) {
          BookDetail += this.authors[i].toString();
          if (i < this.authors.length -1 ) {
              BookDetail += ', ';
          }
      }
      return `Book [name = ${this.name}, authors = {${BookDetail}}, price = ${this.price}, qty = ${this.qty}]`;
  }

  getAuthorName() {
      let AuthorName = "";
     for (let i = 0; i < this.authors.length; i++) {
      AuthorName += this.authors[i].getName();
      if (i < this.authors.length -1 ) {
          AuthorName += ', ';
      }
     }
     return `"${AuthorName}"`
  }

}
const main = () => {
  const author1 = new Author ("Oat" , "Oat@gmail.com" ,"M");
  const author2 = new Author ("Aom" , "Aom@gmail.com" ,"F");

  const book1 = new Book ("นิยาย" ,[author1,author2] ,599,7);
  const book2 = new Book ("การ์ตูน" ,[author2] ,399,1);

  

  // console.log(author1.toString());
  // console.log(author2.toString());
  console.log(book1.toString());
  console.log(book2.toString());

  console.log(book1.getAuthorName());
}
main()