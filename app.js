const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
  // const clickedClass = "clicked";
  // if(h1.classList.contains(clickedClass)){
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }
  // h1의 classList에 clickedClass가 있는지 확인해서 있으면 없애고 없으면 추가
  h1.classList.toggle("clicked")
}

h1.addEventListener("click", handleTitleClick);
