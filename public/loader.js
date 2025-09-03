document.addEventListener("DOMContentLoaded", () => {
  // Create loader element dynamically
  const loader = document.createElement("div");
  loader.id = "loader";
  loader.style.cssText = `
    position:fixed;top:0;left:0;width:100%;height:100%;
    background:#fff;display:flex;align-items:center;justify-content:center;
    z-index:9999;
  `;
  loader.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;">
      <lottie-player 
        src="images/load.json"
        background="transparent" speed="1"
        style="width:200px;height:200px;" loop autoplay>
      </lottie-player>
      <p style="color: #05847D;font-size:16px;font-weight:normal;margin-top:7px; text-align:center;">
        Loading...
      </p>
    </div>
  `;
  document.body.appendChild(loader);

  // Hide loader after 2s
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.display = "none";
    }, 2000); // 2 sec
  });
});
