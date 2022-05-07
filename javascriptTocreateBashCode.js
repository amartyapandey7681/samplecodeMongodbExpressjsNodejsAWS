let axios = require("axios");
const { exec } = require("child_process");
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const fs = require('fs') 
let obj = [{
   //array of object 
}];
  let k=0;
  for(let x=0;x<obj.length;x++){

    let url = obj[x]["URL"];
    url = url.substring(0, url.length - 1);
    let pos = url.lastIndexOf("/");
    url = url.substring(0,pos+1);

    let arr = obj[x]["Navigation and category that are present on staging but missing on prod"];
    arr = arr.substring(1,arr.length - 1);
    arr+=",";
    
    let p=0;
    for(let y=0;y<arr.length;y++){
      
      if(arr[y]==","){
        let url1 = arr.substring(p,y);
        if(url1[0]==" ")url1 = url1.substring(1);
        p = y+1;
        if(url1.startsWith("final_url") ){
          url1 = url1.substring(0,url1.length -1);
          let pos1 = url1.lastIndexOf("/");
          let dis = url1.substring(pos1+1);
          let hit = url+dis+"/";
          let data;
          
            // main code to create a txt file having a bash script which will check a url exists or not
          
            fs.appendFile("OutputFinal1.txt", "if curl -s \""+hit+"\" | grep \"No Data Found\""+"\n"+
            "then"+"\n"+
                hit+" >>final.txt"+"\n"+ 
            "fi"+"\n", (err) => { 
            
                if (err) throw err; 
            }) 
            k++;
          
          
          
        }
      }
    }
  }


  //it outputs a code having 
  /*
    if curl -s "url_to_test" | grep "No Data Found"
        then
        echo url_to_test >>final.txt
        fi

        //it will check if html returned has "No Data Found"
        world in it or not
        */