"use strict";var maxId,page=1,cardsElems=document.querySelector(".cards"),form=document.querySelector(".form");form.addEventListener("submit",function(e){e.preventDefault();var a=e.target.elements,t=a.firstname,r=a.lastname,n=a.email,c=a.avatar;console.log(t);var i=t.value,s=r.value,d=n.value,l=c.value;createNewUser({firstnameValue:i,lastnameValue:s,emailValue:d,avatarValue:l}).then(function(e){if(e){var a=maxId++,t=createCardForUser({id:a,first_name:i,last_name:s,email:d,avatar:l});cardsElems.prepend(t)}})}),cardsElems.addEventListener("click",function(e){var a=e.target;if(a.classList.contains("card__delete")){var t=a.parentNode,r=t.id;deleteUser(r).then(function(e){e&&t.remove()}).catch(function(e){console.log(e)})}}),document.addEventListener("scroll",function(){document.body.offsetHeight-window.scrollY-window.innerHeight<100&&getDataUsers(++page)});var createElem=function(e,a,t){var r=document.createElement(e);return r.classList.add(a),t&&(r.innerText=t),r},getDataUsers=function(e){fetch("https://reqres.in/api/users?page=".concat(e)).then(function(e){return e.json()}).then(function(a){if(e<=a.total_pages)for(var t=a.data,r=0;r<t.length;r++)cardsElems.appendChild(createCardForUser(t[r]))}).catch(function(e){console.log(e)})},deleteUser=function(e){return fetch("https://reqres.in/api/users/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(function(e){return e.ok})};function createNewUser(e){var a=e.id,t=e.first_name,r=e.last_name,n=e.email,c=e.avatar;return fetch("https://reqres.in/api/users",{method:"POST",headers:{"Content-Type":"application/json"},data:{id:a,first_name:t,last_name:r,email:n,avatar:c}}).then(function(e){return e.ok})}var createCardForUser=function(e){var a=createElem("div","card");a.id=e.id,maxId=++e.id;var t=createElem("div","card__info"),r=createElem("p","card__email",e.email),n=createElem("p","card__firstname",e.first_name),c=createElem("p","card__lastname",e.last_name),i=createElem("img","card__avata"),s=createElem("div","card__delete","Удалить");return loadImg(i,"card__avatar",e.avatar,"".concat(e.first_name," ").concat(e.last_name)),a.appendChild(t),a.appendChild(s),t.appendChild(r),t.appendChild(n),t.appendChild(c),t.appendChild(i),a},loadImg=function(e,a,t,r){e.setAttribute("src",t),e.setAttribute("alt",r),e.classList.add(a)};getDataUsers(page);
//# sourceMappingURL=main.js.map