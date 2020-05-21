# RESTapi
My first RESTapi project

### 
I created a RESTapi and checked it on POSTMAN you can check it on the Editor by installing the Extension of REST.(VISUAL CODE ahs REST client
as an extension)

##
The fields required here are in JSON fromat
1.title
2.description
3.date (not mandatory)

### 
You can use fetch api to extract the data like :
fetch("path of your localhost")
.then(res =>{
  return res.json()
})
.then(data =>{
  console.log(data)
})
