class Console {
    static log(data) {
        this.canEval() ?
            this.eeval(`console.log(${JSON.stringify(data)})`) :
            console.log(data);
    }

    static canEval() {
        return chrome && chrome.devtools && chrome.devtools.inspectedWindow && chrome.devtools.inspectedWindow.eval;
    }

    static eeval(toEval) {
        chrome.devtools.inspectedWindow.eval(
            toEval,
            function (result, isException) {
                console.log(result, isException);
            },
        );
    }
}

export class InspectedWindow {

    static get console() {
        return Console;
    }

}
