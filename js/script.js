//Selected-player
const playerArray = [];
function SelectButton(element) {
  if (playerArray.length > 4) {
    alert("you cant not select aney plyer");
  } else {
    const mainPlyerName = element.parentNode.parentNode.children[0].innerText;
    playerArray.push(mainPlyerName);
    document.getElementById("totalPlyerList").innerText = playerArray.length;
    const makeLi = document.createElement("li");
    const mainUlID = document.getElementById("mainUl");
    makeLi.innerText = mainPlyerName;
    makeLi.setAttribute("class", "block text-2xl text-white pl-3");
    mainUlID.appendChild(makeLi);
    if (true) {
      element.setAttribute("disabled", true);
      element.setAttribute(
        "class",
        "bg-slate-500 w-6/12 text-white py-2 mt-5 font-bold rounded transition duration-300 ease-in "
      );
    }
  }
}
//Selected-player end
