// ==UserScript==
// @name         Beat Saber Logo
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the canvas!
// @author       oralekin, LittleEndu, BSMG
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
            (function () {
                const imageSrc = "https://assistant.moe/place.png";
                const imageUrl = () => {
                    const id = Math.round(Math.random() * 100000000000000);
                    return `${imageSrc}?id=${id}`;
                };

                const i = document.createElement("img");
                i.src = imageUrl();
                i.onload = () => {
                    if (i.width === i.height) {
                        i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
                    } else {
                        i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
                    }
                };
              
                setInterval(() => {
                  i.src = imageUrl();
                }, 30 * 1000);
                return i;
            })())
    }, false);
}
