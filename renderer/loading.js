window.onload = () => {
    const webview = document.querySelector('#webview');
    const loading = document.querySelector('#loader');

    webview.addEventListener("did-stop-loading", () => {
        loading.remove()
    })
}