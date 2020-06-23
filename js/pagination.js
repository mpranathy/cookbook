$(document).ready(function(){
   
    const item=document.querySelector(".items").children;
    var prev=document.querySelector('.prev');
    var next=document.querySelector('.next');
    var maxItem=6;
    var index=1;
    console.log(index);
    var pagenum=Math.ceil(item.length/maxItem);
    check();
    showItem();
   
    console.log(pagenum);
    prev.addEventListener('click',function(){
        index--;
        check();
        showItem();
    });
    next.addEventListener('click',function(){
        index++;
        check();
        showItem();
    })
    function check(){
        if(index==1){
           
            prev.classList.add('disabled');
           
            
        }
        else{
            prev.classList.remove('disabled');
        }
        if(index==pagenum){
            next.classList.add('disabled');
        }
        else{
            next.classList.remove('disabled');
        }
       
    }
  
    
  
    function showItem(){
        for(let i=0;i<item.length;i++){
            item[i].classList.remove('show');
            item[i].classList.add('hide');
            if(i>=(index*maxItem)-maxItem && i<index*maxItem){
                item[i].classList.remove('hide');
                item[i].classList.add('show');
            }
            document.getElementById('page').innerHTML=index
           
            

        }
     }
});
    

