function api()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
if(this.readyState==4&&this.status==200){
    
    var response =JSON.parse(this.responseText);
    var output ="";
    var output2 ="";
for(var i=0;i<response.length;i++){
    output+="<li>"+response[i].userId+"</i>";
}
for(var j=0;j<response.length;j++){
    output2+="<li>"+response[j].id+"</i>";
}
document.getElementById("demo").innerHTML=output;
document.getElementById("demo").innerHTML=output2;
document.getElementById("demo").style.border= "2px solid black";
document.getElementById("demo").style.width="3cm";





}

}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();




    }
    
