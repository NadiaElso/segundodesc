let precio: number = document.getElementById("precio");
let cantidad: number = document.getElementById("cantidad");

btn.addEventListener("click", () => {
  if (precio.value * cantidad.value >= 1000) {
    console.log(
      precio.value * cantidad.value - (precio.value * cantidad.value) / 100
    );
  } else {
    console.log(precio.value * cantidad.value);
  }
});
