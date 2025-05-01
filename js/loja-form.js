const formUrls = {
  '001': "https://docs.google.com/forms/d/e/1FAIpQLSeBc3SIuIpQhz0LmjVTZkzX-pKIy0CjCLdTuPIeqaXK4L53pA/viewform?embedded=true",
  '002': "https://docs.google.com/forms/d/e/1FAIpQLSfIZghJjiGoi0BBM3_gNtC7sBMtiq8E4DN5v1epx9tI5RspiA/viewform?embedded=true",
  '003': "https://docs.google.com/forms/d/e/1FAIpQLSe5ja9njf5rMrURdVNrVcLkgqXCg3BbNYs2VBK3Aaq1j7avIQ/viewform?embedded=true",
  '004': "https://docs.google.com/forms/d/e/1FAIpQLSfGkS_iUzSGgCvdtmXe9ATkZTZgZhmJlmbtJm23Mh5WrMZqng/viewform?embedded=true",
  '005': "https://docs.google.com/forms/d/e/1FAIpQLSeelfOd8W5wlsZt76_NIhNyLqRBGpOLypllPyPECDGDAbVntw/viewform?embedded=true",
  '201': "https://docs.google.com/forms/d/e/1FAIpQLScMrqBeVtaz7z_BLeerUgcFr4SgDxClVJjOvUktZrQXpOlbGg/viewform?embedded=true",
  '202': "https://docs.google.com/forms/d/e/1FAIpQLSfDX_Zm6cAyJdTpAOPFZ06hCdTSf7-X676qFlxNIkprCwmq9A/viewform?embedded=true",
  '203': "https://docs.google.com/forms/d/e/1FAIpQLSd5pdnvQi9iMcZRwamPUsEwV6Q_r0yDkRyOQio2HCBHN1cucw/viewform?embedded=true",
  '204': "https://docs.google.com/forms/d/e/1FAIpQLSfCf_WXm_OLRdxWV65-IWJJwa65tFFOyoIhga9SJUw7W0IeXw/viewform?embedded=true"
};

function getLojaParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get("loja");
}

function loadForm() {
  const loja = getLojaParam();
  const url = formUrls[loja];

  const container = document.getElementById("iframeContainer");

  if (!url) {
    container.innerHTML = `<p style="color: red;">Loja inválida ou não configurada.</p>`;
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.width = "100%";
  iframe.height = "850";
  iframe.frameBorder = "0";
  iframe.marginHeight = "0";
  iframe.marginWidth = "0";
  iframe.classList.add("iframe-form");

  container.appendChild(iframe);
}

window.addEventListener("DOMContentLoaded", loadForm);
