// Created by iWeb 3.0.4 local-build-20120112

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:4,offset:new IWPoint(2.8284,2.8284),color:'#000000',opacity:0.750000}),stroke_0:new IWPhotoFrame([IWCreateImage('Research_files/GraphPaper_01.png'),IWCreateImage('Research_files/GraphPaper_02.png'),IWCreateImage('Research_files/GraphPaper_01_1.png'),IWCreateImage('Research_files/GraphPaper_01_2.png'),IWCreateImage('Research_files/GraphPaper_09.png'),IWCreateImage('Research_files/GraphPaper_08.png'),IWCreateImage('Research_files/GraphPaper_07.png'),IWCreateImage('Research_files/GraphPaper_01_3.png')],null,0,0.600000,90.000000,0.000000,90.000000,0.000000,89.000000,11.000000,89.000000,7.000000,11.000000,11.000000,11.000000,11.000000,'Research_files/graphpaper_tape.png',new IWPoint(0.500000,0),new IWSize(155,47),0.300000),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(2.8284,2.8284),color:'#000000',opacity:0.750000}),shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(2.8284,2.8284),color:'#000000',opacity:0.750000}),stroke_1:new IWPhotoFrame([IWCreateImage('Research_files/GraphPaper_01_4.png'),IWCreateImage('Research_files/GraphPaper_02_1.png'),IWCreateImage('Research_files/GraphPaper_01_5.png'),IWCreateImage('Research_files/GraphPaper_01_6.png'),IWCreateImage('Research_files/GraphPaper_09_1.png'),IWCreateImage('Research_files/GraphPaper_08_1.png'),IWCreateImage('Research_files/GraphPaper_07_1.png'),IWCreateImage('Research_files/GraphPaper_01_7.png')],null,0,0.600000,90.000000,0.000000,90.000000,0.000000,89.000000,11.000000,89.000000,7.000000,11.000000,11.000000,11.000000,11.000000,'Research_files/graphpaper_tape.png',new IWPoint(0.500000,0),new IWSize(155,47),0.300000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Research_files/ResearchMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
