const addCopyButtons = (clipboard) => {
  document.querySelectorAll("pre > code").forEach( (codeBlock) => {
    var button = document.createElement("button")
    button.className = "copy-code-button"
    button.type = "button"
    
    var img = document.createElement("img")
    img.src = window.location.href + "../../content_copy.svg"
    button.appendChild(img)

    var tooltip = document.createElement("span")
    tooltip.className = "tooltip hidden"
    tooltip.innerText = "コピーしました！"

    var pre = codeBlock.parentNode
    pre.parentNode.appendChild(button)
    pre.parentNode.appendChild(tooltip)

    button.addEventListener("click", () => {
      clipboard.writeText(codeBlock.textContent).then(
        () => {
          /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
          button.blur()

          tooltip.classList.remove("hidden")
          tooltip.classList.add("visible")

          setTimeout(() => {
            tooltip.classList.remove("visible")
            tooltip.classList.add("hidden")
          }, 2000);
        },
        (error) => {
          button.innerText("エラー")
        }
      );
    })
  })
}

document.addEventListener("DOMContentLoaded", () => {
	if (!navigator || !navigator.clipboard) return
  addCopyButtons(navigator.clipboard)
})
