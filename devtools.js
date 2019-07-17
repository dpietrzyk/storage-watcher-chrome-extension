chrome.devtools.panels.create('Storage Watcher',
    null,
    'panel/IWC-panel.html',
    panel => {
        const messages = new BroadcastChannel('messs');
        const port = chrome.runtime.connect({name: 'devtools'});
        port.onMessage.addListener(msg => {
            messages.postMessage(msg);
        });
    },
);
