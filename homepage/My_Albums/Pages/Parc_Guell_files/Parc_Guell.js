// Created by iWeb 3.0.1 local-build-20100628

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.sis.pitt.edu/%7Ejahn/homepage/My_Albums/Pages/Parc_Guell_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.sis.pitt.edu/%7Ejahn/homepage/My_Albums/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.sis.pitt.edu/%7Ejahn/homepage/My_Albums/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(2,new IWSize(241,241),new IWSize(241,34),new IWSize(290,290),27,27,0,new IWSize(14,14)),new IWPhotoFrame([IWCreateImage('Parc_Guell_files/Watercolor_iweb_01.png'),IWCreateImage('Parc_Guell_files/Watercolor_iweb_02.png'),IWCreateImage('Parc_Guell_files/Watercolor_iweb_04.png'),IWCreateImage('Parc_Guell_files/Watercolor_iweb_08.png'),IWCreateImage('Parc_Guell_files/Watercolor_iweb_16.png'),IWCreateImage('Parc_Guell_files/Watercolor_iweb_14.png'),IWCreateImage('Parc_Guell_files/Watercolor_iweb_13.png'),IWCreateImage('Parc_Guell_files/Watercolor_iweb_05.png')],null,0,0.565789,0.000000,0.000000,0.000000,0.000000,12.000000,12.000000,11.000000,11.000000,13.000000,12.000000,13.000000,12.000000,null,null,null,0.500000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Parc_Guell_files/Parc_GuellMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
