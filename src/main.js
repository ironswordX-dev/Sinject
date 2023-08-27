const Meta = GM_info.script || 
const disabled_urls = ['about:blank', 'about:blank#blocked']
if (disabled_urls.includes(window.location.href)) return;
function openNewWin() {
    let win = window.open('', '', 'height=400,width=200');
    return win;
}
function createElm(doc, headOrBody = "body", type, args=[]) {
    let el = doc.createElement(type);
    if (args.length > 0) {
        for (let i = 0; i < args.length; i++) {
            let inf = args[i]
            el.setAttribute(inf.key, inf.value)
        }
    }
    if (headOrBody === "head") {
        doc.head.appendChild(el)
    } else if (headOrBody === "body") {
        doc.body.appendChild(el)
    }
}
function erudaLoaderFunc() {
    let script = document.createElement('script');
    script.src="https://cdn.jsdelivr.net/npm/eruda";
    document.body.append(script);
    script.onload = function () {
        eruda.init();
    }
}


let sinjectWinOn = false
document.addEventListener('keyup', function(event) {
    if (sinjectWinOn) return;
    if (event.key.toLowerCase() === 'alt') {
        let sinjectWinOn = true;
        const editor = openNewWin();
        const editDoc = editor.document;

        editDoc.writeln(`<head><title>${Meta.name}</title></head><body><h1>${Meta.name} v${Meta.version}</h1></body>`);

        createElm(editDoc, "body", 'textarea', [{key:'id',value:'textInput'}, {key: 'style', value:'resize:vertical;min-height:60px'}]);
        createElm(editDoc, "body", 'button', [{key: 'id', value:'submitButton'}, {key: 'style', value: 'data-inline=true'}]);
        createElm(editDoc, "body", 'button', [{key: 'id', value:'erudaBtn'}, {key: 'style', value: 'data-inline=true'}]);

        editDoc.getElementById('submitButton').innerText = 'Inject!';
        editDoc.getElementById('submitButton').onclick = function() {
            let code = editDoc.getElementById('textInput').value;
            createElm(document, "body", 'script', [{key: 'id', value: 'scriptInjector'}]);
            document.getElementById('scriptInjector').innerText = code;
            sinjectWinOn = false;
            editor.window.close();
        }

        editDoc.getElementById('erudaBtn').innerText = 'Eruda console';
        editDoc.getElementById('erudaBtn').onclick = function() {
            erudaLoaderFunc();
            sinjectWinOn = false;
            editor.window.close();
        };
    }
}, false)