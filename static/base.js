// window.addEventListener('scroll', ()=>{
    // let t =scrollY;
    //  if(t>200){
    //      document.getElementById('homebtn').style.display='inherit'
    //     }
    //     if(t<200){
    //      document.getElementById('homebtn').style.display='none'
    //  }
    // })
    let k=0
    function hidepage(){
        let element = document.getElementById('page');
        let element2 = document.getElementById('btn2color');
        let element3 = document.getElementById('btn2');
        var x = document.getElementsByTagName("BODY")[0];
        // let all = document.getElementsByTagName('*')[0];
       
       if(k%2==0){
           element.style.width='216px'
          element2.style.transform= 'rotate(90deg) scale(1)';
          element3.style.background = 'inherit';
          element3.style.left='216px'
           x.style.overflowy = "hidden";
           k++;
        }
        else{
            element.style.width='0px'
            element2.style.transform= 'rotate(0deg) scale(1)';
            element3.style.background= 'transparent';
            element3.style.left='12px'
            x.style.overflowy = "inherit";
              k++;
       }  
    }
    
    // let l=0;
    // function pop(){
    //     let popitem = document.getElementById('box')
    //     if(l%2==0){
    //         popitem.style.height = '10%'
    //         popitem.style.display='inherit'
    //         l++;
    //     }
    //     else{
    //         popitem.style.height = '0%'
    //         popitem.style.display='none'
    //         l++
    //     }
    // }