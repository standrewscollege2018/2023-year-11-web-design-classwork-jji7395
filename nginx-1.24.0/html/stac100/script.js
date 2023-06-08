window.addEventListener('DOMContentLoaded', function () {
    var iframe = document.getElementById('my-iframe');

    function resizeIframe() {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }

    iframe.onload = resizeIframe;
    window.addEventListener('resize', resizeIframe);
});
