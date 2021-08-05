// import express module
const express = require("express");

// Route handler for /books page
const authorsRouter = express.Router();

function router(nav){
  var authors = [
    {
      name: 'JK Rowling',
      publications: 'Harry Potter Series',
      img: "harry.jpg"
    },
    {
      name: 'Jiddu Krishnamurthy',
      publications: 'Krishnamurthy Foundation',
  
      img: "jkrishan.jpg"
    },
    {
      name: 'Randel knight',
      publications: 'evolution',
      
      img: "darwin.jpg"
    },
    {
      name: 'AMIT tripathi',
      publications: 'bnp publication',
      
      img: "amish.jpg"
    }
  ];
  
  // For authors.ejs is the root for authorsRouter
  authorsRouter.get('/',function(req,res){
    res.render("authors",{
      nav,
      title: 'Authors',
      authors
    })
  });
  
  // eg: /books/1  1 is the parameter
  // this parameter from url is accessed using :
  authorsRouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render("author",{
      nav,
      title: 'Library' + authors[id].name,
      author: authors[id]
    })
  })

  return authorsRouter;
}

module.exports = router;