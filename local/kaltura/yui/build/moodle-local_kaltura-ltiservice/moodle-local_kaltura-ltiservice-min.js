YUI.add("moodle-local_kaltura-ltiservice",function(e,t){var n=function(){n.superclass.constructor.apply(this,arguments)};e.extend(n,e.Base,{init:function(t){var n=window.opener?window.opener.parent.document:window.parent.document;n.getElementById("video_title")&&e.one(n.getElementById("video_title")).setAttribute("value",t.title),n.getElementById("entry_id")&&e.one(n.getElementById("entry_id")).setAttribute("value",t.entryid),n.getElementById("height")&&e.one(n.getElementById("height")).setAttribute("value",t.height),n.getElementById("width")&&e.one(n.getElementById("width")).setAttribute("value",t.width),n.getElementById("uiconf_id")&&e.one(n.getElementById("uiconf_id")).setAttribute("value","1"),n.getElementById("widescreen")&&e.one(n.getElementById("widescreen")).setAttribute("value","1"),n.getElementById("video_preview_frame")?e.one(n.getElementById("video_preview_frame")).setAttribute("src",t.previewltilauncher):n.getElementById("contentframe")&&(e.one(n.getElementById("contentframe")).setAttribute("src",decodeURIComponent(t.iframeurl)),e.one(n.getElementById("contentframe")).setStyle("width",t.width+"px"),e.one(n.getElementById("contentframe")).setStyle("height",t.height+"px")),e.one(n.getElementById("source")).setAttribute("value",decodeURIComponent(t.iframeurl)),n.getElementById("metadata")&&e.one(n.getElementById("metadata")).setAttribute("value",t.metadata);if(window.parent.insertMedia){window.parent.insertMedia();return}n.getElementById("closeltipanel")&&e.one(n.getElementById("closeltipanel")).simulate("click"),n.body.dispatchEvent(n.body.entrySelectedEvent)}},{NAME:"moodle-local_kaltura-ltiservice",ATTRS:{iframeurl:{value:""},width:{value:""},height:{value:""},entryid:{value:""},title:{value:""},metadata:{value:""}}}),M.local_kaltura=M.local_kaltura||{},M.local_kaltura.init=function(e){return new n(e)}},"@VERSION@",{requires:["base","node","node-event-simulate"]});
