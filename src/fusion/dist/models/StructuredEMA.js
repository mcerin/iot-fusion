const a0_0x2148=['structuralFactorPosition','options','EMA','constructor','apply','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','return\x20/\x22\x20+\x20this\x20+\x20\x22/','test','qminer','exports','partialFit','save','value'];(function(_0x2b783e,_0x21483f){const _0x3d514f=function(_0x52f9e2){while(--_0x52f9e2){_0x2b783e['push'](_0x2b783e['shift']());}},_0x47650a=function(){const _0x4fd166={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xe0bdc7,_0x349232,_0x5e0b42,_0x3df2a5){_0x3df2a5=_0x3df2a5||{};let _0x349d06=_0x349232+'='+_0x5e0b42,_0xb98b62=0x0;for(let _0x43251d=0x0,_0x1e9493=_0xe0bdc7['length'];_0x43251d<_0x1e9493;_0x43251d++){const _0x3836dd=_0xe0bdc7[_0x43251d];_0x349d06+=';\x20'+_0x3836dd;const _0x398832=_0xe0bdc7[_0x3836dd];_0xe0bdc7['push'](_0x398832),_0x1e9493=_0xe0bdc7['length'],_0x398832!==!![]&&(_0x349d06+='='+_0x398832);}_0x3df2a5['cookie']=_0x349d06;},'removeCookie':function(){return'dev';},'getCookie':function(_0x599f1d,_0x11cfbe){_0x599f1d=_0x599f1d||function(_0x1aad31){return _0x1aad31;};const _0x5aa5b1=_0x599f1d(new RegExp('(?:^|;\x20)'+_0x11cfbe['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x237d9a=function(_0x5326e6,_0x3e3dee){_0x5326e6(++_0x3e3dee);};return _0x237d9a(_0x3d514f,_0x21483f),_0x5aa5b1?decodeURIComponent(_0x5aa5b1[0x1]):undefined;}},_0x5c3849=function(){const _0x4faef8=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4faef8['test'](_0x4fd166['removeCookie']['toString']());};_0x4fd166['updateCookie']=_0x5c3849;let _0x5e77b8='';const _0x1c95df=_0x4fd166['updateCookie']();if(!_0x1c95df)_0x4fd166['setCookie'](['*'],'counter',0x1);else _0x1c95df?_0x5e77b8=_0x4fd166['getCookie'](null,'counter'):_0x4fd166['removeCookie']();};_0x47650a();}(a0_0x2148,0x6f));const a0_0x3d51=function(_0x2b783e,_0x21483f){_0x2b783e=_0x2b783e-0x0;let _0x3d514f=a0_0x2148[_0x2b783e];return _0x3d514f;};const a0_0x5e0b42=function(){let _0x1a7faf=!![];return function(_0x2f426a,_0x2bce46){const _0x5cab92=_0x1a7faf?function(){if(_0x2bce46){const _0x42d1a6=_0x2bce46[a0_0x3d51('0xa')](_0x2f426a,arguments);return _0x2bce46=null,_0x42d1a6;}}:function(){};return _0x1a7faf=![],_0x5cab92;};}(),a0_0x349232=a0_0x5e0b42(this,function(){const _0x359f76=function(){const _0x47ad69=_0x359f76[a0_0x3d51('0x9')](a0_0x3d51('0xc'))()[a0_0x3d51('0x9')](a0_0x3d51('0xb'));return!_0x47ad69[a0_0x3d51('0x0')](a0_0x349232);};return _0x359f76();});a0_0x349232();const qm=require('qminer'),la=require(a0_0x3d51('0x1'))['la'],fs=require('fs'),AbstractIncrementalModel=require('./abstractIncrementalModel');class StructuredEMAIncrementalModel extends AbstractIncrementalModel{constructor(_0x3db1d1,_0x5607f2){super(_0x3db1d1,_0x5607f2),this[a0_0x3d51('0x7')]=_0x3db1d1,this[a0_0x3d51('0x5')]=0x0;let _0x80979d=_0x3db1d1['N']!==undefined?_0x3db1d1['N']:0x5;this['k']=0x2/(_0x80979d+0x1),this['EMA']={};}[a0_0x3d51('0x3')](_0x589e1e,_0x1d0c7a){const _0x49b070=_0x589e1e[this['options'][a0_0x3d51('0x6')]];this['EMA'][_0x49b070]===undefined?this[a0_0x3d51('0x8')][_0x49b070]=_0x1d0c7a:this[a0_0x3d51('0x8')][_0x49b070]=_0x1d0c7a*this['k']+(0x1-this['k'])*this[a0_0x3d51('0x8')][_0x49b070];}['predict'](_0xda3aac){const _0x54ce57=_0xda3aac[this[a0_0x3d51('0x7')][a0_0x3d51('0x6')]];if(this[a0_0x3d51('0x8')][_0x54ce57]===undefined)return null;return this[a0_0x3d51('0x8')][_0x54ce57];}[a0_0x3d51('0x4')](_0x220350){}['load'](_0x438349){}}module[a0_0x3d51('0x2')]=StructuredEMAIncrementalModel;