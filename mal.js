const toggleClass = () => {
  const menu = document.querySelector('.content');
  menu.classList.toggle('toggleCls');
  const skygge = document.querySelector('.skygge');
  skygge.classList.toggle('skyggeOpen');
}
