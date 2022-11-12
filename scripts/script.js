const openBtn = document.querySelector(".header__open");
const closeBtn = document.querySelector(".header__close");
const headerWrapper = document.querySelector(".header__wrapper");
const implementBottom = document.querySelector(".implement__bottom");
const div = document.createElement("div");

closeBtn.style.display = "none";
div.style.display = "none";

openBtn.addEventListener("click", function () {
  headerWrapper.classList.add("header--active");
  closeBtn.style.display = "block";
  closeBtn.style.position = "absolute";
  closeBtn.style.top = "50px";
  closeBtn.style.right = "27px";

  // style for div
  div.style.display = "block";
  div.style.width = "80%";
  div.style.position = "absolute";
  div.style.top = "100px";
  div.style.right = "20px";
  div.style.height = "3px";
  div.style.background = " #FBFCFE";
  div.style.opacity = "0.15";
  headerWrapper.append(div);
});

closeBtn.addEventListener("click", () => {
  headerWrapper.classList.remove("header--active");
  closeBtn.style.display = "none";
  div.style.display = "none";
});

implementBottom.innerText = `
<form id="form-id" method="GET"> </form>
<script
  src="https://loremipsum.com/api.js"
      data-client-name="Your Company's Name"
      data-form-id="form-id"
      data-key="test_key"
      data-product="transactions"
      data-env="sandbox">
</script>
`;
