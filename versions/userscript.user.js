// ==UserScript==
// @name         Sinject
// @version      1.0
// @description  Upload code into sites >:)
// @author       ironswordX
// @match        *://*/*
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIGZpbGw9IiMwMDAwMDAiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgDQoJIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDkyLjE3OSA5Mi4xOCINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNNzMuNDM3LDM2LjU0di05LjE5MkM3My40MzcsMTIuMjY4LDYxLjE2OSwwLDQ2LjA5LDBTMTguNzQ0LDEyLjI2OCwxOC43NDQsMjcuMzQ4aDExLjM1NQ0KCQljMC04LjgxOCw3LjE3My0xNS45OTIsMTUuOTkxLTE1Ljk5MmM4LjgxNywwLDE1Ljk5MSw3LjE3NCwxNS45OTEsMTUuOTkydjkuMTkySDkuODg0djU1LjY0aDcyLjQxMVYzNi41NEg3My40Mzd6IE01MC42MDksNzEuMTE1DQoJCVY4My4zM2gtOS4wMzdWNzEuMTE1Yy0yLjEwMi0xLjQ0MS0zLjQ4Mi0zLjg1OC0zLjQ4Mi02LjZjMC00LjQxOCwzLjU4Mi04LDgtOHM4LDMuNTgyLDgsOA0KCQlDNTQuMDksNjcuMjU3LDUyLjcxLDY5LjY3NCw1MC42MDksNzEuMTE1eiIvPg0KPC9nPg0KPC9zdmc+
// @grant        GM_info
// ==/UserScript==

(async () => {
  let response = await fetch('https://raw.githubusercontent.com/ironswordX-dev/Sinject/main/src/main.js');
  let data = await response.text();
  eval(data)
})();