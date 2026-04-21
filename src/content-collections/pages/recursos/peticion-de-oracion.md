---
title: Petición de Oración
order: 2
---

<style>
  /* DESKTOP (≥1024px) */
  @media (min-width: 1024px) {
    .google-form-zoom {
      transform: scale(1.15);
      transform-origin: top center;
      width: 760px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  /* TABLET (640px–1023px) */
  @media (min-width: 640px) and (max-width: 1023px) {
    .google-form-zoom {
      transform: scale(1);
      width: 100%;
      max-width: 680px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  /* MOBILE (<640px) */
  @media (max-width: 639px) {
    .google-form-container {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .google-form-zoom iframe {
      min-width: 320px;
      max-width: 100%;
    }
  }
</style>

<!-- 
  AUTO‑RESIZE SCRIPT
  -------------------
  Google Forms sends height updates via postMessage.
  This listener catches them and updates the iframe height.
  This ensures the footer is ALWAYS pushed down.
-->
<script>
  window.addEventListener("message", (event) => {
    if (typeof event.data === "string" && event.data.includes("height")) {
      try {
        const data = JSON.parse(event.data);
        if (data.height) {
          const iframe = document.getElementById("google-form-iframe");
          if (iframe) {
            iframe.style.height = data.height + "px";
          }
        }
      } catch (e) {
        // Ignore invalid messages
      }
    }
  });
</script>

<div class="google-form-container w-full my-10 flex justify-center">
  <div class="google-form-zoom">
    <iframe
      id="google-form-iframe"
      src="https://docs.google.com/forms/d/e/1FAIpQLSdXxBOGKOJT36VKwruyBlT6xaKFVWaixVjaVnGI-8IfI48EpA/viewform?embedded=true"
      width="100%"
      style="height: 1400px; transition: height 0.3s ease;"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    ></iframe>
  </div>
</div>
