var _0x550c=['fields','float','base','createStore','rawstore','nodeId','createAggregates','aggrConfigId','postConstructor','processRecord','hourly','data','length','stampm','currently','time','push','fusionNodeI','parent','NO\x20WEATHER/WEATHER\x20RECORD\x20TOO\x20SHORT\x20(48\x20hourly\x20records\x20needed)!','./streamingNode.js','kafka-node','fieldTypes','temperature','humidity','pressure','cloudCover'];(function(_0x1448be,_0x53a45c){var _0x128ac5=function(_0x2ca4d8){while(--_0x2ca4d8){_0x1448be['push'](_0x1448be['shift']());}};var _0xa94db5=function(){var _0x37dd1b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x50fd40,_0xf725a1,_0x5398aa,_0x4d6e6a){_0x4d6e6a=_0x4d6e6a||{};var _0x3fe054=_0xf725a1+'='+_0x5398aa;var _0x17b8a9=0x0;for(var _0x17b8a9=0x0,_0x528300=_0x50fd40['length'];_0x17b8a9<_0x528300;_0x17b8a9++){var _0xb3d083=_0x50fd40[_0x17b8a9];_0x3fe054+=';\x20'+_0xb3d083;var _0x2f745d=_0x50fd40[_0xb3d083];_0x50fd40['push'](_0x2f745d);_0x528300=_0x50fd40['length'];if(_0x2f745d!==!![]){_0x3fe054+='='+_0x2f745d;}}_0x4d6e6a['cookie']=_0x3fe054;},'removeCookie':function(){return'dev';},'getCookie':function(_0x40b698,_0x5ed61f){_0x40b698=_0x40b698||function(_0x35f5b6){return _0x35f5b6;};var _0x54bbd0=_0x40b698(new RegExp('(?:^|;\x20)'+_0x5ed61f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x37103d=function(_0x42c422,_0x2f5b5f){_0x42c422(++_0x2f5b5f);};_0x37103d(_0x128ac5,_0x53a45c);return _0x54bbd0?decodeURIComponent(_0x54bbd0[0x1]):undefined;}};var _0x1ddcaa=function(){var _0x1ac4bb=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1ac4bb['test'](_0x37dd1b['removeCookie']['toString']());};_0x37dd1b['updateCookie']=_0x1ddcaa;var _0x14fee2='';var _0x5328b3=_0x37dd1b['updateCookie']();if(!_0x5328b3){_0x37dd1b['setCookie'](['*'],'counter',0x1);}else if(_0x5328b3){_0x14fee2=_0x37dd1b['getCookie'](null,'counter');}else{_0x37dd1b['removeCookie']();}};_0xa94db5();}(_0x550c,0xd1));var _0x56ae=function(_0xc08cc2,_0x4c0521){_0xc08cc2=_0xc08cc2-0x0;var _0x2fe2dd=_0x550c[_0xc08cc2];return _0x2fe2dd;};var _0x5be702=function(){var _0x5591aa=!![];return function(_0x56a99d,_0x154b56){var _0x1120d5=_0x5591aa?function(){if(_0x154b56){var _0xa13641=_0x154b56['apply'](_0x56a99d,arguments);_0x154b56=null;return _0xa13641;}}:function(){};_0x5591aa=![];return _0x1120d5;};}();var _0x478723=_0x5be702(this,function(){var _0x324399=function(){return'\x64\x65\x76';},_0x6d2d5e=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x3cf4de=function(){var _0x1c0a66=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x1c0a66['\x74\x65\x73\x74'](_0x324399['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x3fc056=function(){var _0x3db76c=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x3db76c['\x74\x65\x73\x74'](_0x6d2d5e['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x1981db=function(_0x47ff33){var _0x199a35=~-0x1>>0x1+0xff%0x0;if(_0x47ff33['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x199a35)){_0x26c8bd(_0x47ff33);}};var _0x26c8bd=function(_0x1089fc){var _0x32e81d=~-0x4>>0x1+0xff%0x0;if(_0x1089fc['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x32e81d){_0x1981db(_0x1089fc);}};if(!_0x3cf4de()){if(!_0x3fc056()){_0x1981db('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x1981db('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x1981db('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x478723();const streamingNode=require(_0x56ae('0x0'));const kafka=require(_0x56ae('0x1'));class streamingWeatherNode extends streamingNode{constructor(_0x33748d,_0x3e4c21,_0x5c685e,_0x3e3156,_0x1e9e81,_0x292610,_0x151bd2){super(_0x33748d,_0x3e4c21,_0x5c685e,_0x3e3156,_0x1e9e81,_0x292610,_0x151bd2);this['fields']=[];this[_0x56ae('0x2')]=[_0x56ae('0x3'),_0x56ae('0x4'),_0x56ae('0x5'),'windSpeed','windBearing',_0x56ae('0x6')];for(let _0x4ce2f1=0x0;_0x4ce2f1<0x30;_0x4ce2f1++){for(let _0x333808 in this[_0x56ae('0x2')]){let _0x2ab90b=this[_0x56ae('0x2')][_0x333808]+_0x4ce2f1;this[_0x56ae('0x7')]['push']({'name':_0x2ab90b,'type':_0x56ae('0x8')});}}this[_0x56ae('0x9')][_0x56ae('0xa')]({'name':this['nodeId'],'fields':this['fields']});this[_0x56ae('0xb')]=this['base']['store'](this[_0x56ae('0xc')]);super[_0x56ae('0xd')](_0x3e3156[_0x5c685e[_0x56ae('0xe')]]);super[_0x56ae('0xf')]();}[_0x56ae('0x10')](_0xbd1168){let _0x4a4c56={};if('hourly'in _0xbd1168&&'data'in _0xbd1168['hourly']&&_0xbd1168[_0x56ae('0x11')][_0x56ae('0x12')][_0x56ae('0x13')]>=0x30){_0x4a4c56[_0x56ae('0x14')]=_0xbd1168[_0x56ae('0x15')][_0x56ae('0x16')]*0x3e8;for(let _0x5db4b0=0x0;_0x5db4b0<0x30;_0x5db4b0++){for(let _0x4283ce in this[_0x56ae('0x2')]){let _0x2b4227=this[_0x56ae('0x2')][_0x4283ce]+_0x5db4b0;_0x4a4c56[_0x2b4227]=_0xbd1168[_0x56ae('0x11')][_0x56ae('0x12')][_0x5db4b0][this['fieldTypes'][_0x4283ce]];if(_0x4a4c56[_0x2b4227]==null)_0xbd1168[_0x2b4227]=0x0;}}let _0x22dccb=_0x4a4c56;this['buffer'][_0x56ae('0x17')](_0x22dccb);this['processRecordCb'](this[_0x56ae('0x18')],this[_0x56ae('0x19')]);}else{console['log'](_0x56ae('0x1a'));}}}module['exports']=streamingWeatherNode;