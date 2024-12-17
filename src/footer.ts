export function footerComponent() {
  const footer = document.createElement("footer");
  footer.innerHTML = "<h3>Esto es un footer</h3>";
  footer.style.border = "solid 3px black";
  footer.style.borderRadius = "5px";
  footer.style.padding = "12px";
  return footer;
}
