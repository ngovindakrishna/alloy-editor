YUI.add("button-quote",function(t){"use strict";var e=t.Lang,o=t.Base.create("quote",t.Plugin.Base,[t.ButtonBase],{TPL_CONTENT:'<i class="alloy-editor-icon-quote"></i>',_onClick:function(){var t=this.get("host").get("editor");t.execCommand("blockquote")}},{NAME:"quote",NS:"quote",ATTRS:{element:{validator:e.isString,value:"blockquote"},strings:{validator:e.isObject,value:{label:"Quote"}}}});t.ButtonQuote=o},"",{requires:["button-base"]});