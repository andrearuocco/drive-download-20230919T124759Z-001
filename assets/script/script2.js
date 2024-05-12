function visibility () {
    const DIV = document.querySelectorAll("section div.my-1")
   
    console.log(DIV)
    //let viewPort = document.documentElement.scrollTop
    //console.log(viewPort)

    
        DIV.forEach( index => {
            const VPORT = index.getBoundingClientRect().top < window.innerHeight 
            /*const VIEWP = index.getBoundingClientRect().bottom >= 0*/
           
            
            if( VPORT) {
                index.classList.add("animate")
            } 


        })}
        window.addEventListener("scroll", visibility);
window.addEventListener("resize", visibility);  
        visibility ()