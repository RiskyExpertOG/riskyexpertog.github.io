(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{285:function(e,t,r){"use strict";r.r(t);var n=r(4),i=r.n(n),o=r(1),a=r(0),c=r.n(a),l=r(187),u=r.n(l),f=r(96);r(217),r(219),r(221),r(222),r(223),r(224),r(225),r(198),r(226),r(228),r(229),r(230),r(231),r(232),r(193),r(233),r(234),r(235),r(236),r(238),r(239),r(199),r(191),r(240),r(194),r(201),r(242),r(243),r(245),r(246),r(247),r(248),r(202),r(250),r(195),r(251),r(196),r(188),r(252),r(253),r(254),r(255),r(256),r(258),r(205),r(259),r(192),r(260),r(190),r(261),r(262),r(263),r(203),r(264),r(265),r(266),r(267),r(268),r(206),r(269),r(270),r(271),r(272),r(207),r(273),r(274),r(200),r(275),r(276),r(277),r(278),r(189),r(281);var s=o.c.div.withConfig({componentId:"sc-1dzlt6m-0"})(["min-height:16rem;height:calc(100vh - 20rem);",";> div{",";}.CodeMirror{font-size:12px;line-height:1.375rem;}.CodeMirror-linenumber{padding:1px 12px 0 12px !important;}.CodeMirror-foldmarker{color:#CBCCC6;text-shadow:none;margin-left:0.25rem;margin-right:0.25rem;}"],{position:"relative"},{borderRadius:"0.25rem",height:"100%"});t.default=function(e){var t=e.style,r=e.initialContent,n=e.filename,o=e.mode,l=e.fetchContent,d=e.onContentSaved,m=e.onModeChanged,h=Object(a.useState)(),g=i()(h,2),v=g[0],p=g[1],b=Object(a.useCallback)((function(e){if(e){var t=u.a.fromTextArea(e,{mode:"text/plain",theme:"ayu-mirage",indentUnit:4,smartIndent:!0,tabSize:4,indentWithTabs:!1,lineWrapping:!0,lineNumbers:!0,foldGutter:!0,fixedGutter:!0,scrollbarStyle:"overlay",coverGutterNextToScrollbar:!1,readOnly:!1,showCursorWhenSelecting:!1,autofocus:!1,spellcheck:!0,autocorrect:!1,autocapitalize:!1,lint:!1,autoCloseBrackets:!0,matchBrackets:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"]});p(t)}}),[]);return Object(a.useEffect)((function(){var e;void 0!==n&&m((null===(e=function(e){for(var t=0;t<f.a.length;t++){var r=f.a[t];if(r.file&&r.file.test(e))return r}var n=e.lastIndexOf("."),i=n>-1&&e.substring(n+1,e.length);if(i)for(var o=0;o<f.a.length;o++){var a=f.a[o];if(a.ext)for(var c=0;c<a.ext.length;c++)if(a.ext[c]===i)return a}}(n))||void 0===e?void 0:e.mime)||"text/plain")}),[n]),Object(a.useEffect)((function(){v&&v.setOption("mode",o)}),[v,o]),Object(a.useEffect)((function(){v&&v.setValue(r||"")}),[v,r]),Object(a.useEffect)((function(){v?(v.addKeyMap({"Ctrl-S":function(){return d()},"Cmd-S":function(){return d()}}),l((function(){return Promise.resolve(v.getValue())}))):l((function(){return Promise.reject(new Error("no editor session has been configured"))}))}),[v,l,d]),c.a.createElement(s,{style:t},c.a.createElement("textarea",{ref:b}))}}}]);