
// building  the nav
const navcon=document.getElementsByTagName("section");
const nav=document.querySelector("#navbar__list");
nav.style.cssText="width:100%;background-color:black;float:left;text-align:left;padding:20px;position:fixed"; //styling navigation
nav.textContent="Navigation";
let ActiveSectionIndex = 0;
let navBar = document.querySelector("header>nav>ul#navbar__list");
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
    function activeSectionIndex() {
        let curActive = Array.from(navcon, (i) => isSectionInView(i));
        let activeInd = curActive.indexOf(true);
    
        
        if (activeInd < 0) {
          activeInd = 0;
        }
    
        return activeInd;
      }

      function isSectionInView(sec) {
        let box = sec.getBoundingClientRect();
        let p = 0.4;
        return (
          box.top <= p * window.innerHeight && box.top >= -p * window.innerHeight
        );
      }
      
      function updateActive(oldInd, newInd) {
        navBar.children[oldInd].children[0].classList.remove("active-section");
        navBar.children[newInd].children[0].classList.add("active-section");
        navcon[oldInd].classList.remove("active-section");
        navcon[newInd].classList.add("active-section");
      }
    
    
    function scrollIndicatorWidthUpdater() {
        let winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        let height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
      }

    /*event listener for scrolling the sections*/

    elem.addEventListener("click",function clicking(event){ 
        event.preventDefault();   
        const rect=navcon[i].getBoundingClientRect();
        const scrollelem=window.scroll(pageXOffset,pageYOffset); //preventDefault
        document.querySelector("#"+ navcon[i].getAttribute("id")).scrollIntoView({behavior:'smooth'});
        var current = document.getElementsByClassName("your-active-class");
        current[0].className = current[0].className.replace("your-active-class", "");  /*setting active class*/
        this.className += "your-active-class";
    });
    window.addEventListener("scroll", function () {
        setTimeout(() => {
          //update Active index
          let CurActiveSectionIndex = activeSectionIndex();
          updateActive(ActiveSectionIndex, CurActiveSectionIndex);
          ActiveSectionIndex = CurActiveSectionIndex;
    
          //update scroll indicator
          scrollIndicatorWidthUpdater();
        }, 0);
      });   

    }
