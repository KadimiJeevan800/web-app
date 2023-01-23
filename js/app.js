console.log("JS File Loaded Successfully...");
//To Keep Header Sticky to the Top of the Website.
$(document).ready(function(){
    window.onscroll = function() {myFunction()};
    document.getElementById('quit').classList.add("display-no");
    document.getElementById('search-bar').classList.add("display-no");
    var header = document.getElementsByClassName("header");
    var sticky = header.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } 
    }
  });
var flag=0;
function search()
{
  if(flag==0)
  {
    document.getElementById('ser').classList.remove("display-no");
    document.getElementById('quit').classList.add("display-no");
    document.getElementById('search-bar').classList.add("display-no");
    flag=1;
  }
  else
  {
    document.getElementById('ser').classList.add("display-no");
    document.getElementById('quit').classList.remove("display-no");
    document.getElementById('quit').classList.remove("trans");
    document.getElementById('search-bar').classList.remove("display-no");
    document.getElementById('search-bar').classList.remove("trans");
    flag=0;
  }
}
search();

function textChange(opt)
{
  var data="";
 
 if(opt=='Rev')
 {
  document.getElementById(opt).classList.add("active");
  document.getElementById('des').classList.remove("active");
  document.getElementById('spec').classList.remove("active");
  data=`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
  or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything 
  embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first
   true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which 
   looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`;
}
 else if(opt=='spec')
 {
  document.getElementById(opt).classList.add("active");
  document.getElementById('des').classList.remove("active");
  document.getElementById('Rev').classList.remove("active");
  data=`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
   discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
  written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`;
 }
 else
 {
  document.getElementById(opt).classList.add("active");
  document.getElementById('Rev').classList.remove("active");
  document.getElementById('spec').classList.remove("active");
  data=`Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature 
  from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one 
  of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
   discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
   (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 
  "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 
  translation by H. Rackham.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour`;

 }
 //document.getElementById(opt).classList.add("active");

 document.getElementById('print').innerHTML=data;
}


//JS Hamberger code for menu links
function myFunction() {
  var x = document.getElementById("myTopnavm");
  if (x.className === "topnav") {
    x.className += " mobile responsive";
  } else {
    x.className = "topnav";
  }
}