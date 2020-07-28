
// building  the nav
const navcon=document.getElementsByTagName("section");
const nav=document.querySelector("#navbar__list");
nav.style.cssText="width:100%;background-color:black;float:left;text-align:left;padding:20px;position:fixed"; //styling navigation
nav.textContent="Navigation";
for(let i=0;i<navcon.length;i++)                    
{ /*traversing navigation items*/

    elem=document.createElement("li");  //creating navigation list
    const a=document.createElement("a");  //creating links for the section                                                 //creating multipages
    var link = document.createTextNode(navcon[i].getAttribute("data-nav")); 

    a.appendChild(link);

    a.href= "#"+ navcon[i].getAttribute("id"); //adding links
    a.style.cssText="text-decoration:none;color:white;margin-left:100px";

    elem.appendChild(a);
    nav.appendChild(elem);

    /*event listener for scrolling the sections*/

    elem.addEventListener("click",function(event){ 
        event.preventDefault();                             //preventDefault
        document.querySelector("#"+ navcon[i].getAttribute("id")).scrollIntoView({behavior:'smooth'});
        var current = document.getElementsByClassName("your-active-class");
        current[0].className = current[0].className.replace("your-active-class", "");  /*setting active class*/
        this.className += "your-active-class";
    });

}
