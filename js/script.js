'use strict';

function titleClickHandler(event){
  console.log('Link was clicked!');


   /* [DONE] remove class 'active' from all articles */
  const activeLinks = document.querySelectorAll('.titles a.active');
	for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

/* [DONE] add class 'active' to the clicked link */
   event.preventDefault();
   const clickedElement = this;
   this.classList.add('active')
   console.log('clickedElement:', clickedElement);
   
  

 /* [DONE] remove class 'active' from all articles */
   const activeArticles = document.querySelectorAll('.posts .active');
	for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}
  

  /* get 'href' attribute from the clicked link */
  

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}