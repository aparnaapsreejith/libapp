
const express = require("express");
const booksRouter = express.Router();

function router(nav){
  var books = [
    {
      title: 'Harry Potter',
      author: 'JK Rowling',
      genre: 'Fantasy',
      img: "harry.jpg"
    },
    {
      title: 'The god of small things',
      author: 'Arundhati Roy',
      genre: 'Fiction',
      img: "arun.jpg"
    },
    {
      title: 'Darwin , his Daughter and Human',
      author: 'Randel',
      genre: 'Science Fiction',
      img: "darwin.jpg"
    },{
      title: 'Tom and jerry',
      author: 'Drama',
      genre: 'Science Fiction',
      img: "tomandjerry.jpg"
    },
    {
      title: 'Shiva and his trilogy',
      author: 'Amit Tripathi',
      genre: ' Fiction',
      img: "amish.jpg"
    },
    {
      title: 'Freedom from unknown',
      author: 'Jiddu Krishnamurthy',
      genre: ' Fiction',
      img: "jkrishnan.jpg"
    }
  ];
  
  
  booksRouter.get('/',function(req,res){
    res.render("books",{
      nav,
      title: 'Library | Books',
      books
    })
  });
  

  booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render("book",{
      nav,
      title: 'Library | ' + books[id].title,
      book: books[id]
    })
  })

  return booksRouter;
}

module.exports = router;