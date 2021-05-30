console.log("Page is Ready")
var take_input=document.getElementById("fileUpload")
var save_value=document.getElementById("save_value")
var localstorage_value=document.getElementById("localstorage_value")
var read_localstorage=document.getElementById("read_localstorage")
var delete_data=document.getElementById("delete_data")
var read_all_data=document.getElementById("read_all_data")

save_value.onclick=function(){
    localStorage.setItem("id",take_input.value);
}

read_localstorage.onclick=function(){
    localstorage_value.textContent=localStorage.getItem("id");
}

delete_data.onclick=function(){
    localStorage.removeItem("id")
}

read_all_data.onclick=function(){
    var keys=Object.keys(localStorage);
    console.log(keys);

    for(var key of keys){
        console.log("Key : "+key+" : Value : "+localStorage.getItem(key));
    }
}