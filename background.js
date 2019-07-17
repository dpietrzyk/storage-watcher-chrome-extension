'use strict';

// chrome.runtime.onInstalled.addListener(() => {
//     // chrome.storage.sync.set({color: '#3aa757'}, function() {
//     //     console.log("The color is green.");
//     // });
//
//     chrome.tabs.query({active: true, currentWindow: true}, tabs => {
//         console.log(tabs);
//     });
//
// });
const passMessageToDevTools = msg => {
    if (devTools)
        devTools.postMessage(msg);
};

var devTools;
chrome.runtime.onConnect.addListener(port => {
    console.log(port);

    switch (port.name) {
        case 'devtools':
            devTools = port;
            break;

        case 'background':
            port.onMessage.addListener(msg => {
                console.log(msg);
                console.log(devTools);
                passMessageToDevTools(msg);
            });
            break;

        default:
            console.warn('Unknown port connection');
    }
});

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         console.log(request);
//         // console.log(sender);
//
//         // console.log(sender.tab ?
//         //     "from a content script:" + sender.tab.url :
//         //     "from the extension");
//         // if (request.greeting == "hello")
//         //     sendResponse({farewell: "goodbye"});
//     });

/*const onUpdate = (tabId, changeInfo, tab) => {




    // if(tab.favIconUrl.includes('localhost')){
    //     console.log(tab)
    //     chrome.tabs.executeScript(tabId, {code:'var w = window.a; console.log(w);'});
    // }

    // chrome.tabs.executeScript({
    //     file: 'contentScript.js'
    // });
}

chrome.tabs.onUpdated.addListener(onUpdate);*/


