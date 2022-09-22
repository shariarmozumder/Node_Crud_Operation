const mongoCilent= require("mongodb").MongoClient;

const localUrl="mongodb://127.0.0.1:27017"
const config={useUnifiedTopology : true};
mongoCilent.connect(localUrl,config,(err,mongoServer)=>{
    if(err){
        console.log("Connected Faield")
    }
    else{
        console.log("Connected Success")
        //Insert Data
        insertMydata(mongoServer)
        //Find Data
        findMyProducts(mongoServer)
        //Update Product 
        updateProduct(mongoServer)
        //Delete Products
        deleteProductItem(mongoServer)
        
    }

})

//Data Insert
 function insertMydata(mongoServer){
    let database=mongoServer.db("Shop");
    let collection=database.collection("products")
    let productInfo={
        productId:"01",productName:"sweet chocolate Ilise",productPrice:"100$",productStock:"12",color:"blue"
    }
    collection.insertOne(productInfo,(err)=>{
        if(err){
            console.log("Product Insert Fail")
        }
        else{
            console.log("Product Insert Success")
        }

    })
       
 }

 //Data Find
 function findMyProducts(mongoServer) {
    let database=mongoServer.db("Shop");
    let collection=database.collection("products");
    collection.find().toArray((err,result)=>{
        if(err){
            console.log("Error Find products")
        }
        else{
            console.log(result)
        }

    })
    
 }

 //Update Data
 function updateProduct(mongoServer){
    let database=mongoServer.db("Shop");
    let collection=database.collection("products");
    let selectProduct={ productId:"04"};
    const newProducts = {$set:{ productId:"07",productName:"crooked",productPrice:"800$",productStock:"50",color:"blue"}}
    collection.updateOne(selectProduct,newProducts,(err,result)=>{
        if(err){
            console.log("Error Update products")
        }
        else{
            console.log(result)
        }

    })

 }

 //Products Delete Data
  function deleteProductItem(mongoServer) {
    let database=mongoServer.db("Shop");
    let collection=database.collection("products");
    const singelRemoveProduct = { productId:"01"}
    collection.deleteOne(singelRemoveProduct,(err)=>{
        if(err){
            console.log("deleteProduct Faield")
        }
        else{
            console.log("deleteProduct Success")
        }

    })
    
  }