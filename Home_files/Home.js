// Created by iWeb 3.0.1 local-build-20100214

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:1,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.230000}),shadow_1:new IWShadow({blurRadius:2,offset:new IWPoint(0.0000,-1.0000),color:'#000000',opacity:0.500000}),shadow_2:new IWShadow({blurRadius:2,offset:new IWPoint(0.0000,-1.0000),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-4,4,8,126),url:'Home_files/stroke.png'},{rect:new IWRect(-4,-4,8,8),url:'Home_files/stroke_1.png'},{rect:new IWRect(4,-4,170,8),url:'Home_files/stroke_2.png'},{rect:new IWRect(174,-4,8,8),url:'Home_files/stroke_3.png'},{rect:new IWRect(174,4,8,126),url:'Home_files/stroke_4.png'},{rect:new IWRect(174,130,8,8),url:'Home_files/stroke_5.png'},{rect:new IWRect(4,130,170,8),url:'Home_files/stroke_6.png'},{rect:new IWRect(-4,130,8,8),url:'Home_files/stroke_7.png'}],new IWSize(178,134)),stroke_1:new IWPhotoFrame([IWCreateImage('Home_files/Watercolor_iweb_01.png'),IWCreateImage('Home_files/Watercolor_iweb_02.png'),IWCreateImage('Home_files/Watercolor_iweb_04.png'),IWCreateImage('Home_files/Watercolor_iweb_08.png'),IWCreateImage('Home_files/Watercolor_iweb_16.png'),IWCreateImage('Home_files/Watercolor_iweb_14.png'),IWCreateImage('Home_files/Watercolor_iweb_13.png'),IWCreateImage('Home_files/Watercolor_iweb_05.png')],null,0,0.800000,0.000000,0.000000,0.000000,0.000000,12.000000,12.000000,11.000000,11.000000,13.000000,12.000000,13.000000,12.000000,null,null,null,0.500000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
