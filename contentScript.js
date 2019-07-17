const iwcWatcher = `
<script>
    const channel = new BroadcastChannel('my_bus');

    Storage.prototype._setItem = Storage.prototype.setItem;
    Storage.prototype.setItem = function (key, value) {
        if (this === window.localStorage) {
            channel.postMessage({
                key,
                oldValue: localStorage.getItem(key),
                newValue: value,
                url: window.location.href,
            });
            localStorage._setItem(key, value);
        } else {
            // console.log(key, value);
            sessionStorage._setItem(key, value);
        }
    };
</script>`;


const passMessagesToBackground = () => {
    const channel = new BroadcastChannel('my_bus');
    const port = chrome.runtime.connect({name: 'background'});
    channel.onmessage = (e) => {
        // console.log(e);
        port.postMessage(e.data);
    };
};

const removeScriptTags = text => {
    return text.replace('<script>', '').replace('</script>', '');
};

const loadIWCWatcher = () => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.textContent = removeScriptTags(iwcWatcher);

    head.appendChild(script);
};

const onLoad = () => {
    passMessagesToBackground();
    loadIWCWatcher();
};


window.addEventListener('load', onLoad, false);
