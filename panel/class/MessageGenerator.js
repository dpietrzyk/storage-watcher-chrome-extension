// {"senderBusNodeId":"6beac657-1994-492c-b528-febaf0c9005c","args":["applicationEvent",{"type":"LayerDescriptionChangedEvent","data":{"descriptionItem":{"layerId":"CUST-1419-1","description":"accu_not_supported_zoom"},"mapId":"main-map"}}]}
// {"senderBusNodeId":"6beac657-1994-492c-b528-febaf0c9005c","args":["removeManyContextEvents"]}
// {"senderBusNodeId":"6beac657-1994-492c-b528-febaf0c9005c","args":["eventBusIncidentSelected",{"uniqueId":"es://demo-cameras:camera://demo-camera/0a14312e3030343038636630363364362e63616d30301a1024292ecc48e84a2d8fadd477a46433f322107ab004dce2484b99a6791d6907b064d1380a/838","source":{"componentId":"49o09lkb28y","source":0},"timestamp":1563123632084}]}
// {"senderBusNodeId":"6beac657-1994-492c-b528-febaf0c9005c","args":["applicationEvent",{"type":"DisableGeolocationEvent","data":{"mapId":"main-map"}}]}
// {"senderBusNodeId":"6beac657-1994-492c-b528-febaf0c9005c","args":["updateExtensionEvent",{"id":"es://demo-cameras:camera://demo-camera/0a14312e3030343038636630363364362e63616d30301a1024292ecc48e84a2d8fadd477a46433f322107ab004dce2484b99a6791d6907b064d1380a","extension":{"id":"es://demo-cameras:camera://demo-camera/0a14312e3030343038636630363364362e63616d30301a1024292ecc48e84a2d8fadd477a46433f322107ab004dce2484b99a6791d6907b064d1380a","nearbyCorrelations":[],"hasLocation":true,"isVisibleOnMap":true,"isLabelVisible":true,"isTracked":false,"isRead":true,"isUpdate":false,"isDisabled":false,"popupComponent":"CameraPopup","states":{"cameraState":0},"pttInProgress":false,"isEmergency":false,"isEmergencyAck":false,"sortablePriority":7,"priority":"unknown","trackingRangeMinutes":5,"trackedLocations":[],"isSelected":true,"isPtzCapable":true,"alertTalkgroup":"","cameraFieldOfView":null,"icon":{"msiIcon":"msiIcon://ic_camera_ptz_video"},"mapIconUrl":"/assets/images/camera-icons/map/selected/ic_camera_ptz.svg","listIconUrl":"/assets/images/camera-icons/list/ic_camera_ptz.svg"}}]}

export default class MessageGenerator {

    static get IWCEvent() {
        return {
            key: 'IWC_DEFAULT_EBUS',
            oldValue: '{"senderBusNodeId":"313fb750-5534-4e21-ad43-d03ed5a5d3a4","args":["2ft","tajne info' + Date.now() + '"]}',
            newValue: '{"senderBusNodeId":"313fb750-5534-4e21-ad43-d03ed5a5d3a4","args":["1m","tajne info' + +Date.now() + '"]}',
            url: 'http://localhost:63342/iwc-demo/index.html?_ijt=os4fahsggilb9ou2vc7gsscnqh',
        };
    }


    static get IWCDefault() {
        return {
            key: 'IWC_DEFAULT_WND_6133cacb-d5ef-478c-f1ad-ff9f7e836284',
            oldValue: '1562420654476',
            newValue: 1562420656975,
            url: 'http://localhost:63342/iwc-demo/index.html?_ijt=os4fahsggilb9ou2vc7gsscnqh',
        };

    }

}
