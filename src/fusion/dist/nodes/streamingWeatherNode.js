var _0x1fcc=['aggrConfigId','postConstructor','data','hourly','stampm','currently','time','buffer','processRecordCb','fusionNodeI','parent','log','exports','./streamingNode.js','fields','fieldTypes','temperature','humidity','windSpeed','windBearing','cloudCover','push','float','base','nodeId','rawstore','store'];(function(_0x2c15cc,_0x134b32){var _0x42d9e9=function(_0x9e89ee){while(--_0x9e89ee){_0x2c15cc['push'](_0x2c15cc['shift']());}};var _0x5710f0=function(){var _0x401e3a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2bebac,_0x2b2f73,_0x17b0c8,_0x4b467e){_0x4b467e=_0x4b467e||{};var _0x3acc96=_0x2b2f73+'='+_0x17b0c8;var _0x138bfb=0x0;for(var _0x138bfb=0x0,_0x3758eb=_0x2bebac['length'];_0x138bfb<_0x3758eb;_0x138bfb++){var _0x580c17=_0x2bebac[_0x138bfb];_0x3acc96+=';\x20'+_0x580c17;var _0x148d25=_0x2bebac[_0x580c17];_0x2bebac['push'](_0x148d25);_0x3758eb=_0x2bebac['length'];if(_0x148d25!==!![]){_0x3acc96+='='+_0x148d25;}}_0x4b467e['cookie']=_0x3acc96;},'removeCookie':function(){return'dev';},'getCookie':function(_0x360edd,_0x1a3156){_0x360edd=_0x360edd||function(_0x131863){return _0x131863;};var _0xb0cd47=_0x360edd(new RegExp('(?:^|;\x20)'+_0x1a3156['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x292a0b=function(_0x211ed2,_0x6283a9){_0x211ed2(++_0x6283a9);};_0x292a0b(_0x42d9e9,_0x134b32);return _0xb0cd47?decodeURIComponent(_0xb0cd47[0x1]):undefined;}};var _0x152fae=function(){var _0x52d8d0=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x52d8d0['test'](_0x401e3a['removeCookie']['toString']());};_0x401e3a['updateCookie']=_0x152fae;var _0x165576='';var _0x2ffc6=_0x401e3a['updateCookie']();if(!_0x2ffc6){_0x401e3a['setCookie'](['*'],'counter',0x1);}else if(_0x2ffc6){_0x165576=_0x401e3a['getCookie'](null,'counter');}else{_0x401e3a['removeCookie']();}};_0x5710f0();}(_0x1fcc,0x94));var _0x40a1=function(_0x445f10,_0x4be1ca){_0x445f10=_0x445f10-0x0;var _0x46166d=_0x1fcc[_0x445f10];return _0x46166d;};var _0x4bbb8b=function(){var _0x57135f=!![];return function(_0x2fab71,_0x5c8805){var _0x540747=_0x57135f?function(){if(_0x5c8805){var _0x3882f0=_0x5c8805['apply'](_0x2fab71,arguments);_0x5c8805=null;return _0x3882f0;}}:function(){};_0x57135f=![];return _0x540747;};}();var _0x4bd6e9=_0x4bbb8b(this,function(){var _0x3c5ed5=function(){return'\x64\x65\x76';},_0x4471c6=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x57e7eb=function(){var _0x19d8c3=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x19d8c3['\x74\x65\x73\x74'](_0x3c5ed5['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x3f4a88=function(){var _0xbe49eb=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0xbe49eb['\x74\x65\x73\x74'](_0x4471c6['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0xb5588f=function(_0x244296){var _0x570a50=~-0x1>>0x1+0xff%0x0;if(_0x244296['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x570a50)){_0x5c7dde(_0x244296);}};var _0x5c7dde=function(_0x4aefbc){var _0x3f4a75=~-0x4>>0x1+0xff%0x0;if(_0x4aefbc['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x3f4a75){_0xb5588f(_0x4aefbc);}};if(!_0x57e7eb()){if(!_0x3f4a88()){_0xb5588f('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0xb5588f('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0xb5588f('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x4bd6e9();const streamingNode=require(_0x40a1('0x0'));class streamingWeatherNode extends streamingNode{constructor(_0x238a21,_0x2f8e3f,_0x2fe7be,_0x3a7507,_0x300c32,_0x35ed16,_0xf7ebb2){super(_0x238a21,_0x2f8e3f,_0x2fe7be,_0x3a7507,_0x300c32,_0x35ed16,_0xf7ebb2);this[_0x40a1('0x1')]=[];this[_0x40a1('0x2')]=[_0x40a1('0x3'),_0x40a1('0x4'),'pressure',_0x40a1('0x5'),_0x40a1('0x6'),_0x40a1('0x7')];for(let _0x568a71=0x0;_0x568a71<0x30;_0x568a71++){for(let _0x3f26dd in this['fieldTypes']){let _0x183653=this[_0x40a1('0x2')][_0x3f26dd]+_0x568a71;this[_0x40a1('0x1')][_0x40a1('0x8')]({'name':_0x183653,'type':_0x40a1('0x9')});}}this[_0x40a1('0xa')]['createStore']({'name':this[_0x40a1('0xb')],'fields':this[_0x40a1('0x1')]});this[_0x40a1('0xc')]=this[_0x40a1('0xa')][_0x40a1('0xd')](this['nodeId']);super['createAggregates'](_0x3a7507[_0x2fe7be[_0x40a1('0xe')]]);super[_0x40a1('0xf')]();}['processRecord'](_0x2f184a){let _0x2c1682={};if('hourly'in _0x2f184a&&_0x40a1('0x10')in _0x2f184a[_0x40a1('0x11')]&&_0x2f184a[_0x40a1('0x11')][_0x40a1('0x10')]['length']>=0x30){_0x2c1682[_0x40a1('0x12')]=_0x2f184a[_0x40a1('0x13')][_0x40a1('0x14')]*0x3e8;for(let _0x339768=0x0;_0x339768<0x30;_0x339768++){for(let _0x532a86 in this[_0x40a1('0x2')]){let _0x30544a=this[_0x40a1('0x2')][_0x532a86]+_0x339768;_0x2c1682[_0x30544a]=_0x2f184a['hourly'][_0x40a1('0x10')][_0x339768][this[_0x40a1('0x2')][_0x532a86]];if(_0x2c1682[_0x30544a]==null)_0x2f184a[_0x30544a]=0x0;}}let _0x2658ee=_0x2c1682;this[_0x40a1('0x15')][_0x40a1('0x8')](_0x2658ee);this[_0x40a1('0x16')](this[_0x40a1('0x17')],this[_0x40a1('0x18')]);}else{console[_0x40a1('0x19')]('NO\x20WEATHER/WEATHER\x20RECORD\x20TOO\x20SHORT\x20(48\x20hourly\x20records\x20needed)!');}}}module[_0x40a1('0x1a')]=streamingWeatherNode;