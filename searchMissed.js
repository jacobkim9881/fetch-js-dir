let targetArr = '/home/kim/SBO/agiletemplate.herokuapp.com/assets/js/search.config.js';
let config = require(targetArr);
const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');
var glob = require("glob")

// options is optional
glob("**/*.md", function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
console.log(files)	  
})

//console.log(config)

let arrs = Object.values(config);
//console.log(arr);

/*
 
arrs.forEach((arr) => {
  arr.forEach((path) => {	
    fs.open(path, (err, fd) => {
    if (err) {
//     console.log(err.path);
     let pathArr = path.match(/[^\/]+/g);
     let fileName = pathArr[pathArr.length - 1];	   
     let srcUrl = 'http://' + pathArr.slice(3).join('/') 
//     console.log(srcUrl);
	    
     let pathD = '/' + pathArr.slice(0, pathArr.length - 1).join('/')
//     console.log(fileName);	    
//     console.log(pathArr);
//       console.log(pathD);

	    
//make diretories for path	    
     fs.mkdir(pathD, {recursive: true}, (err) => {
//     if err throw err;
     console.log('dir created: ', pathD);     
     })	   

//fetch files for saving	    
     fetch(srcUrl).then(res => res.text()).then(body => {     
      //write file
     fs.writeFile(path, body, (err) => {
//     if err throw err;
     	     
     console.log('file created: ', path);	     
     
     if (err) console.log('fetch err: ', err);		     
     });	     
     })
//     pathArr.pop();	    
	 
    };
    })
  })	 
})

*/
