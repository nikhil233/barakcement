/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 4.6.4 (26.11.2014)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/


(function(jQuery,undefined){




	////////////////////////////////////////
	// THE REVOLUTION PLUGIN STARTS HERE //
	///////////////////////////////////////

	jQuery.fn.extend({

		// OUR PLUGIN HERE :)
		revolution: function(options) {



				////////////////////////////////
				// SET DEFAULT VALUES OF ITEM //
				////////////////////////////////
				
		},


		// METHODE PAUSE
		revscroll: function(oy) {
					return this.each(function() {
						var container=jQuery(this);
						if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0)
							jQuery('body,html').animate({scrollTop:(container.offset().top+(container.find('>ul >li').height())-oy)+"px"},{duration:400});
					})
				},

		// METHODE PAUSE
		revredraw: function(oy) {
					return this.each(function() {
						var container=jQuery(this);
						if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
							var bt = container.parent().find('.tp-bannertimer');
							var opt = bt.data('opt');
							containerResized(container,opt);
						}
					})
				},
		// METHODE PAUSE
		revkill: function(oy) {

						


				},

		// METHODE PAUSE
		revpause: function(options) {

					


				},

		// METHODE RESUME
		revresume: function(options) {
				
				},

		// METHODE NEXT
		revnext: function(options) {
					

				},

		// METHODE RESUME
		revprev: function(options) {
					
				},

		// METHODE LENGTH
		revmaxslide: function(options) {
						// CATCH THE CONTAINER
						return jQuery(this).find('>ul:first-child >li').length;
				},


		// METHODE CURRENT
		revcurrentslide: function(options) {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
							var bt = container.parent().find('.tp-bannertimer');
							var opt = bt.data('opt');
							return opt.act;
						}
				},

		// METHODE CURRENT
		revlastslide: function(options) {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
							var bt = container.parent().find('.tp-bannertimer');
							var opt = bt.data('opt');
							return opt.lastslide;
						}
				},


		// METHODE JUMP TO SLIDE
		revshowslide: function(slide) {
					return this.each(function() {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
							container.data('showus',slide);
							container.parent().find('.tp-rightarrow').click();
						}
					})

				}


})
		/*******************************************
			-	IS IOS VERSION OLDER THAN 5 ??	-
		*******************************************/

		function iOSVersion() {
			var oldios = false;
			if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
		        if (navigator.userAgent.match(/OS 4_\d like Mac OS X/i)) {
		        	oldios = true;
				}
		    } else {
				   oldios = false;
		    }
			return oldios;
		}

		function initSlider(container,opt) {
						if (container==undefined) return false;

						if (container.data('aimg')!=undefined) {
							if ((container.data('aie8')=="enabled" && isIE(8)) || (container.data('amobile')=="enabled" && is_mobile()))
								container.html('<img class="tp-slider-alternative-image" src="'+container.data("aimg")+'">');
						}
						// PREPARE FALL BACK SETTINGS
						if (opt.navigationStyle=="preview1" ||  opt.navigationStyle=="preview3" || opt.navigationStyle=="preview4") {
									opt.soloArrowLeftHalign="left";
									opt.soloArrowLeftValign="center";
									opt.soloArrowLeftHOffset=0;
									opt.soloArrowLeftVOffset=0;
									opt.soloArrowRightHalign="right";
									opt.soloArrowRightValign="center";
									opt.soloArrowRightHOffset=0;
									opt.soloArrowRightVOffset=0;
									opt.navigationArrows="solo";
						}


						// SIMPLIFY ANIMATIONS ON OLD IOS AND IE8 IF NEEDED
						if (opt.simplifyAll=="on" && (isIE(8) || iOSVersion())) {
							container.find('.tp-caption').each(function() {
								var tc = jQuery(this);
								tc.removeClass("customin").removeClass("customout").addClass("fadein").addClass("fadeout");
								tc.data('splitin',"");
								tc.data('speed',400);
							})
							container.find('>ul>li').each(function() {
								var li= jQuery(this);
								li.data('transition',"fade");
								li.data('masterspeed',500);
								li.data('slotamount',1);
								var img = li.find('>img').first();
								img.data('kenburns',"off");
							});
						}





						opt.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);

						if (opt.fullWidth!="on" && opt.fullScreen!="on") opt.autoHeight = "off";
						if (opt.fullScreen=="on") opt.autoHeight = "on";
						if (opt.fullWidth!="on" && opt.fullScreen!="on") forceFulWidth="off";

						if (opt.fullWidth=="on" && opt.autoHeight=="off")
							container.css({maxHeight:opt.startheight+"px"});

						if (is_mobile() && opt.hideThumbsOnMobile=="on" && opt.navigationType=="thumb")
						   opt.navigationType = "none"

						if (is_mobile() && opt.hideBulletsOnMobile=="on" && opt.navigationType=="bullet")
						   opt.navigationType = "none"

						if (is_mobile() && opt.hideBulletsOnMobile=="on" && opt.navigationType=="both")
						   opt.navigationType = "none"

						if (is_mobile() && opt.hideArrowsOnMobile=="on")
						   opt.navigationArrows = "none"

						if (opt.forceFullWidth=="on" && container.closest('.forcefullwidth_wrapper_tp_banner').length==0) {

							var loff = container.parent().offset().left;
							var mb = container.parent().css('marginBottom');
							var mt = container.parent().css('marginTop');
							if (mb==undefined) mb=0;
							if (mt==undefined) mt=0;

							container.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:'+mt+';margin-bottom:'+mb+'" class="forcefullwidth_wrapper_tp_banner"></div>');
							container.closest('.forcefullwidth_wrapper_tp_banner').append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+container.height()+'px"></div>');
							container.css({'backgroundColor':container.parent().css('backgroundColor'),'backgroundImage':container.parent().css('backgroundImage')});
							//container.parent().css({'position':'absolute','width':jQuery(window).width()});
							container.parent().css({'left':(0-loff)+"px",position:'absolute','width':jQuery(window).width()});
							opt.width=jQuery(window).width();
						}

						// HIDE THUMBS UNDER RESOLUTION
						try{
							if (opt.hideThumbsUnderResolution>jQuery(window).width() && opt.hideThumbsUnderResolution!=0) {
								container.parent().find('.tp-bullets.tp-thumbs').css({display:"none"});
							} else {
								container.parent().find('.tp-bullets.tp-thumbs').css({display:"block"});
							}
						} catch(e) {}

						if (!container.hasClass("revslider-initialised")) {

									container.addClass("revslider-initialised");
									if (container.attr('id')==undefined) container.attr('id',"revslider-"+Math.round(Math.random()*1000+5));

									// CHECK IF FIREFOX 13 IS ON WAY.. IT HAS A STRANGE BUG, CSS ANIMATE SHOULD NOT BE USED



									opt.firefox13 = false;
									opt.ie = !jQuery.support.opacity;
									opt.ie9 = (document.documentMode == 9);

									opt.origcd=opt.delay;

									// CHECK THE jQUERY VERSION
									var version = jQuery.fn.jquery.split('.'),
										versionTop = parseFloat(version[0]),
										versionMinor = parseFloat(version[1]),
										versionIncrement = parseFloat(version[2] || '0');

									if (versionTop==1 && versionMinor < 7) {
										container.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+version+' <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>');
									}

									if (versionTop>1) opt.ie=false;


									// Delegate .transition() calls to .animate()
									// if the browser can't do CSS transitions.
									if (!jQuery.support.transition)
										jQuery.fn.transition = jQuery.fn.animate;

									// CATCH THE CONTAINER


									 // LOAD THE YOUTUBE API IF NECESSARY

									container.find('.caption').each(function() { jQuery(this).addClass('tp-caption')});

									if (is_mobile()) {
										container.find('.tp-caption').each(function() {
											var nextcaption = jQuery(this);
											if (nextcaption.data('autoplayonlyfirsttime') == true || nextcaption.data('autoplayonlyfirsttime')=="true")
													nextcaption.data('autoplayonlyfirsttime',"false");
											if (nextcaption.data('autoplay')==true || nextcaption.data('autoplay')=="true")
												 nextcaption.data('autoplay',false);

										})
									}


									var addedyt=0;
									var addedvim=0;
									var addedvid=0;
									var httpprefix = "http";

									if (location.protocol === 'index.html') {
											httpprefix = "https";
									}
									container.find('.tp-caption').each(function(i) {
										// IF SRC EXIST, RESET SRC'S since WE DONT NEED THEM !!

										try {

												if ((jQuery(this).data('ytid')!=undefined  || jQuery(this).find('iframe').attr('src').toLowerCase().indexOf('youtube')>0) && addedyt==0) {
													addedyt=1;
													var s = document.createElement("script");
													var httpprefix2 = "https";
													s.src = httpprefix2+"://www.youtube.com/iframe_api"; /* Load Player API*/

													var before = document.getElementsByTagName("script")[0];
													var loadit = true;
													jQuery('head').find('*').each(function(){
														if (jQuery(this).attr('src') == httpprefix2+"://www.youtube.com/iframe_api")
														   loadit = false;
													});
													if (loadit) {
														before.parentNode.insertBefore(s, before);


													}
												}
											} catch(e) {}

										try{
											   if ((jQuery(this).data('vimeoid')!=undefined || jQuery(this).find('iframe').attr('src').toLowerCase().indexOf('vimeo')>0) && addedvim==0) {
													addedvim=1;
													var f = document.createElement("script");
													f.src = httpprefix+"://a.vimeocdn.com/js/froogaloop2.min.js"; /* Load Player API*/
													var before = document.getElementsByTagName("script")[0];

													var loadit = true;
													jQuery('head').find('*').each(function(){
														if (jQuery(this).attr('src') == httpprefix+"://a.vimeocdn.com/js/froogaloop2.min.js")
														   loadit = false;
													});
													if (loadit)
														before.parentNode.insertBefore(f, before);
												}
											} catch(e) {}

										try{
											if ((jQuery(this).data('videomp4')!=undefined || jQuery(this).data('videowebm')!=undefined))  {

											}
										} catch(e) {}
									});




									// REMOVE ANY VIDEO JS SETTINGS OF THE VIDEO  IF NEEDED
									container.find('.tp-caption video').each(function(i) {
										jQuery(this).removeClass("video-js").removeClass("vjs-default-skin");
										jQuery(this).attr("preload","");
										jQuery(this).css({display:"none"});
									});

									container.find('>ul:first-child >li').each(function() {
											var t = jQuery(this);
											t.data('origindex',t.index());
										})

									// SHUFFLE MODE
									if (opt.shuffle=="on") {
										var fsa = new Object,
											fli = container.find('>ul:first-child >li:first-child')

										fsa.fstransition = fli.data('fstransition');
										fsa.fsmasterspeed = fli.data('fsmasterspeed');
										fsa.fsslotamount = fli.data('fsslotamount');



										for (var u=0;u<container.find('>ul:first-child >li').length;u++) {
											var it = Math.round(Math.random()*container.find('>ul:first-child >li').length);
											container.find('>ul:first-child >li:eq('+it+')').prependTo(container.find('>ul:first-child'));
										}

										var newfli = container.find('>ul:first-child >li:first-child');
										 newfli.data('fstransition',fsa.fstransition);
										 newfli.data('fsmasterspeed',fsa.fsmasterspeed);
										 newfli.data('fsslotamount',fsa.fsslotamount);
									}


									// CREATE SOME DEFAULT OPTIONS FOR LATER
									opt.slots=4;
									opt.act=-1;
									opt.next=0;

									// IF START SLIDE IS SET
									if (opt.startWithSlide !=undefined) opt.next=opt.startWithSlide;

									// IF DEEPLINK HAS BEEN SET
									var deeplink = getUrlVars("#")[0];
									if (deeplink.length<9) {
										if (deeplink.split('slide').length>1) {
											var dslide=parseInt(deeplink.split('slide')[1],0);
											if (dslide<1) dslide=1;
											if (dslide>container.find('>ul:first >li').length) dslide=container.find('>ul:first >li').length;
											opt.next=dslide-1;
										}
									}


									opt.firststart=1;

									// BASIC OFFSET POSITIONS OF THE BULLETS
									if (opt.navigationHOffset==undefined) opt.navOffsetHorizontal=0;
									if (opt.navigationVOffset==undefined) opt.navOffsetVertical=0;



									container.append('<div class="tp-loader '+opt.spinner+'">'+
												  		'<div class="dot1"></div>'+
												  	    '<div class="dot2"></div>'+
												  	    '<div class="bounce1"></div>'+
														'<div class="bounce2"></div>'+
														'<div class="bounce3"></div>'+
													 '</div>');

									// RESET THE TIMER
									if (container.find('.tp-bannertimer').length==0) container.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
									var bt=container.find('.tp-bannertimer');
									if (bt.length>0) {
										bt.css({'width':'0%'});
									};


									// WE NEED TO ADD A BASIC CLASS FOR SETTINGS.CSS
									container.addClass("tp-simpleresponsive");
									opt.container=container;

									//if (container.height()==0) container.height(opt.startheight);

									// AMOUNT OF THE SLIDES
									opt.slideamount = container.find('>ul:first >li').length;


									// A BASIC GRID MUST BE DEFINED. IF NO DEFAULT GRID EXIST THAN WE NEED A DEFAULT VALUE, ACTUAL SIZE OF CONAINER
									if (container.height()==0) container.height(opt.startheight);
									if (opt.startwidth==undefined || opt.startwidth==0) opt.startwidth=container.width();
									if (opt.startheight==undefined || opt.startheight==0) opt.startheight=container.height();

									// OPT WIDTH && HEIGHT SHOULD BE SET
									opt.width=container.width();
									opt.height=container.height();


									// DEFAULT DEPENDECIES
									opt.bw= opt.startwidth / container.width();
									opt.bh = opt.startheight / container.height();

									// IF THE ITEM ALREADY IN A RESIZED FORM
									if (opt.width!=opt.startwidth) {

										opt.height = Math.round(opt.startheight * (opt.width/opt.startwidth));

										container.height(opt.height);

									}

									// LETS SEE IF THERE IS ANY SHADOW
									if (opt.shadow!=0) {
										container.parent().append('<div class="tp-bannershadow tp-shadow'+opt.shadow+'"></div>');
										var loff=0;
										if (opt.forceFullWidth=="on")
													loff = 0-opt.container.parent().offset().left;
										container.parent().find('.tp-bannershadow').css({'width':opt.width,'left':loff});
									}


									container.find('ul').css({'display':'none'});

									var fliparent = container;


									// PREPARE THE SLIDES
									container.find('ul').css({'display':'block'});
									prepareSlides(container,opt);
									if (opt.parallax!="off") checkForParallax(container,opt);

									// CREATE BULLETS
									if (opt.slideamount >1) createBullets(container,opt);

									if (opt.slideamount >1 && opt.navigationType=="thumb") createThumbs(container,opt);
									if (opt.slideamount >1) createArrows(container,opt);
									if (opt.keyboardNavigation=="on") createKeyboard(container,opt);


									swipeAction(container,opt);


									if (opt.hideThumbs>0) hideThumbs(container,opt);
									setTimeout(function() {
										swapSlide(container,opt);
									},opt.startDelay);
									opt.startDelay=0;
									// START COUNTDOWN
									if (opt.slideamount >1) countDown(container,opt);
									setTimeout(function() {
										container.trigger('revolution.slide.onloaded');
									},500);



									/******************************
										-	FULLSCREEN CHANGE	-
									********************************/
									// FULLSCREEN MODE TESTING
									jQuery("body").data('rs-fullScreenMode',false);
									jQuery(window).on ('mozfullscreenchange webkitfullscreenchange fullscreenchange',function(){
									     jQuery("body").data('rs-fullScreenMode',!jQuery("body").data('rs-fullScreenMode'));
									     if (jQuery("body").data('rs-fullScreenMode')) {
										     setTimeout(function() {
										     	jQuery(window).trigger("resize");

										     },200);
									     }
									})


									var resizid = "resize.revslider-"+container.attr('id');

									// IF RESIZED, NEED TO STOP ACTUAL TRANSITION AND RESIZE ACTUAL IMAGES
									jQuery(window).on(resizid,function() {
										if (container==undefined) return false;
										if (jQuery('body').find(container)!=0)
											if (opt.forceFullWidth=="on" ) {

												var loff = opt.container.closest('.forcefullwidth_wrapper_tp_banner').offset().left;
												//opt.container.parent().css({'width':jQuery(window).width()});
												opt.container.parent().css({'left':(0-loff)+"px",'width':jQuery(window).width()});
											}

											if (container.outerWidth(true)!=opt.width || container.is(":hidden")) {
													containerResized(container,opt);
											}




									});

									// HIDE THUMBS UNDER SIZE...
									try{
										if (opt.hideThumbsUnderResoluition!=0 && opt.navigationType=="thumb") {
											if (opt.hideThumbsUnderResoluition>jQuery(window).width())
												jQuery('.tp-bullets').css({display:"none"});
											 else
											 	jQuery('.tp-bullets').css({display:"block"});
										}
									} catch(e) {}



									// CHECK IF THE CAPTION IS A "SCROLL ME TO POSITION" CAPTION IS
									//if (opt.fullScreen=="on") {
										container.find('.tp-scrollbelowslider').on('click',function() {
												var off=0;
												try{
												 	off = jQuery('body').find(opt.fullScreenOffsetContainer).height();
												 } catch(e) {}
												try{
												 	off = off - parseInt(jQuery(this).data('scrolloffset'),0);
												 } catch(e) {}


												jQuery('body,html').animate(
													{scrollTop:(container.offset().top+(container.find('>ul >li').height())-off)+"px"},{duration:400});
											});
									//}


									// FIRST TIME STOP/START HIDE / SHOW SLIDER
									//REMOVE AND SHOW SLIDER ON DEMAND
									var contpar= container.parent();
									if (jQuery(window).width()<opt.hideSliderAtLimit) {
										container.trigger('stoptimer');
										if (contpar.css('display')!="none")
											contpar.data('olddisplay',contpar.css('display'));
										contpar.css({display:"none"});
									}

									tabBlurringCheck(container,opt);

						}

	}



/******************************
	-	MODULES	-
********************************/


		/////////////////////////////////////////
		// main visibility API function
		// check if current tab is active or not
		var vis = (function(){
		    var stateKey,
		        eventKey,
		        keys = {
		                hidden: "visibilitychange",
		                webkitHidden: "webkitvisibilitychange",
		                mozHidden: "mozvisibilitychange",
		                msHidden: "msvisibilitychange"
		    };
		    for (stateKey in keys) {
		        if (stateKey in document) {
		            eventKey = keys[stateKey];
		            break;
		        }
		    }
		    return function(c) {
		        if (c) document.addEventListener(eventKey, c);
		        return !document[stateKey];
		    }
		})();

		var tabBlurringCheck = function(container,opt) {

			
		}

		

		//////////////////////////
		//	CONTAINER RESIZED	//
		/////////////////////////
		var containerResized = function (container,opt) {

			if (container==undefined) return false;
			// HIDE THUMBS UNDER SIZE...
			try{
				if (opt.hideThumbsUnderResoluition!=0 && opt.navigationType=="thumb") {
					if (opt.hideThumbsUnderResoluition>jQuery(window).width())
						jQuery('.tp-bullets').css({display:"none"});
					 else
					 	jQuery('.tp-bullets').css({display:"block"});
				}
			} catch(e) {}



			container.find('.defaultimg').each(function(i) {
					setSize(jQuery(this),opt);
			});


			//REMOVE AND SHOW SLIDER ON DEMAND
			var contpar= container.parent();
			if (jQuery(window).width()<opt.hideSliderAtLimit) {
				container.trigger('stoptimer');
				if (contpar.css('display')!="none")
					contpar.data('olddisplay',contpar.css('display'));
				contpar.css({display:"none"});

			} else {

				if (container.is(":hidden")) {
					if (contpar.data('olddisplay')!=undefined && contpar.data('olddisplay')!="undefined" && contpar.data('olddisplay') != "none")
						contpar.css({display:contpar.data('olddisplay')});
					else
						contpar.css({display:"block"});
					container.trigger('restarttimer');
					setTimeout(function() {
						containerResized(container,opt);
					},150)
				}
			}


			var loff=0;
			if (opt.forceFullWidth=="on")
						loff = 0-opt.container.parent().offset().left;
			try{
				container.parent().find('.tp-bannershadow').css({'width':opt.width,'left':loff});
			} catch(e) {}

			var actsh = container.find('>ul >li:eq('+opt.act+') .slotholder');
			var nextsh = container.find('>ul >li:eq('+opt.next+') .slotholder');
			removeSlots(container,opt,container);
			punchgs.TweenLite.set(nextsh.find('.defaultimg'),{opacity:0});
			actsh.find('.defaultimg').css({'opacity':1});

			nextsh.find('.defaultimg').each(function() {
				var dimg = jQuery(this);

				if (opt.panZoomDisableOnMobile == "on") {
					// NO KEN BURNS ON MOBILE DEVICES

				} else {
					if (dimg.data('kenburn')!=undefined) {
					   dimg.data('kenburn').restart();
					   startKenBurn(container,opt,true)
					}
				}
			});

			var nextli = container.find('>ul >li:eq('+opt.next+')');



			var arr = container.parent().find('.tparrows');
			if (arr.hasClass("preview2"))
				arr.css({width:(parseInt(arr.css('minWidth'),0))});


			animateTheCaptions(nextli, opt,true);
			//restartBannerTimer(opt,container);
			setBulPos(container,opt);

		}




		/*********************************
			-	CHECK IF BROWSER IS IE	-
		********************************/
		var isIE = function( version, comparison ){
		    var $div = jQuery('<div style="display:none;"/>').appendTo(jQuery('body'));
		    $div.html('<!--[if '+(comparison||'')+' IE '+(version||'')+']><a>&nbsp;</a><![endif]-->');
		    var ieTest = $div.find('a').length;
		    $div.remove();
		    return ieTest;
		}



		var callingNewSlide = function(opt,container) {
						// CHECK THE LOOPS !!
						if (opt.next==container.find('>ul >li').length-1) {
								opt.looptogo=opt.looptogo-1;
								if (opt.looptogo<=0)
										opt.stopLoop="on";
							}
						swapSlide(container,opt);

		}






		////////////////////////////////
		//	-	CREATE THE BULLETS -  //
		////////////////////////////////
		var createBullets = function(container,opt) {
			var starthidebullets = "hidebullets";
			if (opt.hideThumbs==0) starthidebullets = "";

			if (opt.navigationType=="bullet"  || opt.navigationType=="both") {
						container.parent().append('<div class="tp-bullets '+starthidebullets+' simplebullets '+opt.navigationStyle+'"></div>');
			}

			var bullets = container.parent().find('.tp-bullets');
			container.find('>ul:first >li').each(function(i) {
							var src=container.find(">ul:first >li:eq("+i+") img:first").attr('src');
							bullets.append('<div class="bullet"></div>');
							var bullet= bullets.find('.bullet:first');
				});
			// ADD THE BULLET CLICK FUNCTION HERE
			bullets.find('.bullet').each(function(i) {
				var bul = jQuery(this);
				if (i==opt.slideamount-1) bul.addClass('last');
				if (i==0) bul.addClass('first');

				bul.click(function() {
					var sameslide = false,
						buli = bul.index();

					if (opt.navigationArrows=="withbullet" || opt.navigationArrows=="nexttobullets")
						buli = bul.index()-1;

					if (buli == opt.act) sameslide=true;

					if (opt.transition==0 && !sameslide) {
						opt.next = buli;
						callingNewSlide(opt,container);
					}
				});

			});
			bullets.append('<div class="tpclear"></div>');
			setBulPos(container,opt);
		}

		//////////////////////
		//	CREATE ARROWS	//
		/////////////////////
		var createArrows = function(container,opt) {
						var bullets = container.find('.tp-bullets'),
							hidden="",
							starthidearrows = "hidearrows",
							arst= opt.navigationStyle;

						if (opt.hideThumbs==0) starthidearrows = "";


						if (opt.navigationArrows=="none") hidden="visibility:hidden;display:none";
						opt.soloArrowStyle = "default"+" "+opt.navigationStyle;

						if (opt.navigationArrows!="none" && opt.navigationArrows!="nexttobullets") arst = opt.soloArrowStyle;

						function aArrow(dir) {
							container.parent().append('<div style="'+hidden+'" class="tp-'+dir+'arrow '+starthidearrows+' tparrows '+arst+'"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>');
						}
						aArrow("left");
						aArrow("right");

						// 	THE LEFT / RIGHT BUTTON CLICK !	 //
						container.parent().find('.tp-rightarrow').click(function() {
							if (opt.transition==0) {
									if (container.data('showus') !=undefined && container.data('showus') != -1)
										opt.next = container.data('showus')-1;
									else
										opt.next = opt.next+1;
									container.data('showus',-1);
									if (opt.next >= opt.slideamount) opt.next=0;
									if (opt.next<0) opt.next=0;

									if (opt.act !=opt.next)
										callingNewSlide(opt,container);
							}
						});

						container.parent().find('.tp-leftarrow').click(function() {
							if (opt.transition==0) {
									opt.next = opt.next-1;
									opt.leftarrowpressed=1;
									if (opt.next < 0) opt.next=opt.slideamount-1;
									callingNewSlide(opt,container);
							}
						});

						setBulPos(container,opt);

		}

		//////////////////////////////////
		//	ENABLE KEYBOARD INTERACTION	//
		//////////////////////////////////
		var createKeyboard = function(container,opt) {
						// 	THE LEFT / RIGHT BUTTON CLICK !	 //
						jQuery(document).keydown(function(e){
							if (opt.transition==0 && e.keyCode == 39) {
									if (container.data('showus') !=undefined && container.data('showus') != -1)
										opt.next = container.data('showus')-1;
									else
										opt.next = opt.next+1;
									container.data('showus',-1);
									if (opt.next >= opt.slideamount) opt.next=0;
									if (opt.next<0) opt.next=0;
									if (opt.act !=opt.next)
										callingNewSlide(opt,container);
							}

							if (opt.transition==0 && e.keyCode == 37) {
									opt.next = opt.next-1;
									opt.leftarrowpressed=1;
									if (opt.next < 0) opt.next=opt.slideamount-1;
									callingNewSlide(opt,container);
							}
						});

						setBulPos(container,opt);

		}

		////////////////////////////
		// SET THE SWIPE FUNCTION //
		////////////////////////////
		var swipeAction = function(container,opt) {
			// TOUCH ENABLED SCROLL
				var aps = "vertical";

				if (opt.touchenabled=="on") {
							if (opt.drag_block_vertical == true)
							    aps = "none";

							container.swipe({
								allowPageScroll:aps,
								fingers:opt.swipe_min_touches,
								treshold:opt.swipe_treshold,
								swipe:function(event,direction,distance,duration,fingerCount,fingerData) {
									switch (direction) {
										case "left":
											 if (opt.transition==0) {
																opt.next = opt.next+1;
																if (opt.next == opt.slideamount) opt.next=0;
																callingNewSlide(opt,container);
														}
										break;
										case "right":
											if (opt.transition==0) {
																opt.next = opt.next-1;
																opt.leftarrowpressed=1;
																if (opt.next < 0) opt.next=opt.slideamount-1;
																callingNewSlide(opt,container);
														}
										break;
										case "up":
											if (aps=="none")
												jQuery("html, body").animate({scrollTop:(container.offset().top + container.height())+"px"});
										break;
										case "down":
											if (aps=="none")
												jQuery("html, body").animate({scrollTop:(container.offset().top - jQuery(window).height())+"px"});
										break;
									}
								}
							})

				}

		}




		////////////////////////////////////////////////////////////////
		// SHOW AND HIDE THE THUMBS IF MOUE GOES OUT OF THE BANNER  ///
		//////////////////////////////////////////////////////////////
		var hideThumbs = function(container,opt) {

			var bullets = container.parent().find('.tp-bullets'),
				ca = container.parent().find('.tparrows');

			if (bullets==null) {
				container.append('<div class=".tp-bullets"></div>');
				var bullets = container.parent().find('.tp-bullets');
			}

			if (ca==null) {
				container.append('<div class=".tparrows"></div>');
				var ca = container.parent().find('.tparrows');
			}


			//var bp = (thumbs.parent().outerHeight(true) - opt.height)/2;

			//	ADD THUMBNAIL IMAGES FOR THE BULLETS //
			container.data('hideThumbs',opt.hideThumbs);

			bullets.addClass("hidebullets");
			ca.addClass("hidearrows");

			if (is_mobile()) {
				try{
					container.hammer().on('touch', function() {
						container.addClass("hovered");
						if (opt.onHoverStop=="on")
							container.trigger('stoptimer');
						clearTimeout(container.data('hideThumbs'));
						bullets.removeClass("hidebullets");
						ca.removeClass("hidearrows");


					});

					container.hammer().on('release', function() {
						container.removeClass("hovered");
						container.trigger('starttimer');
						if (!container.hasClass("hovered") && !bullets.hasClass("hovered"))
							container.data('hideThumbs', setTimeout(function() {
									bullets.addClass("hidebullets");
									ca.addClass("hidearrows");
									container.trigger('starttimer');
							},opt.hideNavDelayOnMobile));
					});
				} catch(e) {}

			} else {
				bullets.hover(function() {
				opt.overnav = true;
				if (opt.onHoverStop=="on")
					container.trigger('stoptimer');
				bullets.addClass("hovered");
				clearTimeout(container.data('hideThumbs'));
				bullets.removeClass("hidebullets");
				ca.removeClass("hidearrows");
					},
				function() {
					opt.overnav = false;
					container.trigger('starttimer');
					bullets.removeClass("hovered");
					if (!container.hasClass("hovered") && !bullets.hasClass("hovered"))
						container.data('hideThumbs', setTimeout(function() {
						bullets.addClass("hidebullets");
						ca.addClass("hidearrows");
						},opt.hideThumbs));
				});


				ca.hover(function() {
					opt.overnav = true;
					if (opt.onHoverStop=="on")
						container.trigger('stoptimer');
					bullets.addClass("hovered");
					clearTimeout(container.data('hideThumbs'));
					bullets.removeClass("hidebullets");
					ca.removeClass("hidearrows");

				},
				function() {
					opt.overnav = false;
					container.trigger('starttimer');
					bullets.removeClass("hovered");
					});



				container.on('mouseenter', function() {
					container.addClass("hovered");
					if (opt.onHoverStop=="on")
						container.trigger('stoptimer');
					clearTimeout(container.data('hideThumbs'));
					bullets.removeClass("hidebullets");
					ca.removeClass("hidearrows");


				});

				container.on('mouseleave', function() {
					container.removeClass("hovered");
					container.trigger('starttimer');
					if (!container.hasClass("hovered") && !bullets.hasClass("hovered"))
						container.data('hideThumbs', setTimeout(function() {
								bullets.addClass("hidebullets");
								ca.addClass("hidearrows");
						},opt.hideThumbs));
				});
			}


		}


		//////////////////////////////
		//	SET POSITION OF BULLETS	//
		//////////////////////////////
		var setBulPos = function(container,opt) {
			var topcont=container.parent();
			var bullets=topcont.find('.tp-bullets');

			if (opt.navigationType=="thumb") {
				bullets.find('.thumb').each(function(i) {
					var thumb = jQuery(this);

					thumb.css({'width':opt.thumbWidth * opt.bw+"px", 'height':opt.thumbHeight*opt.bh+"px"});

				})
				var bup = bullets.find('.tp-mask');

				bup.width(opt.thumbWidth*opt.thumbAmount * opt.bw);
				bup.height(opt.thumbHeight * opt.bh);
				bup.parent().width(opt.thumbWidth*opt.thumbAmount * opt.bw);
				bup.parent().height(opt.thumbHeight * opt.bh);
			}


			var tl = topcont.find('.tp-leftarrow');
			var tr = topcont.find('.tp-rightarrow');

			if (opt.navigationType=="thumb" && opt.navigationArrows=="nexttobullets") opt.navigationArrows="solo";
			// IM CASE WE HAVE NAVIGATION BULLETS TOGETHER WITH ARROWS
			if (opt.navigationArrows=="nexttobullets") {
				tl.prependTo(bullets).css({'float':'left'});
				tr.insertBefore(bullets.find('.tpclear')).css({'float':'left'});
			}
			var loff=0;
			if (opt.forceFullWidth=="on")
						loff = 0-opt.container.parent().offset().left;

			var gridposX = 0,
				gridposY = 0;

			if (opt.navigationInGrid=="on") {
				gridposX = container.width()>opt.startwidth ? (container.width() - opt.startwidth)/2 : 0,
				gridposY = container.height()>opt.startheight ? (container.height() - opt.startheight)/2 : 0;
			}



			if (opt.navigationArrows!="none" && opt.navigationArrows!="nexttobullets") {
				var lv = opt.soloArrowLeftValign,
					lh = opt.soloArrowLeftHalign,
					rv = opt.soloArrowRightValign,
					rh = opt.soloArrowRightHalign,
					lvo = opt.soloArrowLeftVOffset,
					lho = opt.soloArrowLeftHOffset,
					rvo = opt.soloArrowRightVOffset,
					rho = opt.soloArrowRightHOffset;

				tl.css({'position':'absolute'});
				tr.css({'position':'absolute'});

				if (lv=="center")	tl.css({'top':'50%','marginTop':(lvo-Math.round(tl.innerHeight()/2))+"px"})
				else
				if (lv=="bottom")	tl.css({'top':'auto','bottom':(0+lvo)+"px"})
				else
				if (lv=="top")	 	tl.css({'bottom':'auto','top':(0+lvo)+"px"});

				if (lh=="center")	tl.css({'left':'50%','marginLeft':(loff+lho-Math.round(tl.innerWidth()/2))+"px"})
				else
				if (lh=="left")	tl.css({'left':(gridposX+lho+loff)+"px"})
				else
				if (lh=="right")	tl.css({'right':(gridposX+lho-loff)+"px"});

				if (rv=="center")	tr.css({'top':'50%','marginTop':(rvo-Math.round(tr.innerHeight()/2))+"px"})
				else
				if (rv=="bottom")	tr.css({'top':'auto','bottom':(0+rvo)+"px"})
				else
				if (rv=="top")	tr.css({'bottom':'auto','top':(0+rvo)+"px"})

				if (rh=="center")	tr.css({'left':'50%','marginLeft':(loff+rho-Math.round(tr.innerWidth()/2))+"px"})
				else
				if (rh=="left")	tr.css({'left':(gridposX+rho+loff)+"px"})
				else
				if (rh=="right")	tr.css({'right':(gridposX+rho-loff)+"px"})


				if (tl.position()!=null)
					tl.css({'top':Math.round(parseInt(tl.position().top,0))+"px"});

				if (tr.position()!=null)
					tr.css({'top':Math.round(parseInt(tr.position().top,0))+"px"});
			}

			if (opt.navigationArrows=="none") {
				tl.css({'visibility':'hidden'});
				tr.css({'visibility':'hidden'});
			}

			// SET THE POSITIONS OF THE BULLETS // THUMBNAILS
			var nv = opt.navigationVAlign,
				nh = opt.navigationHAlign,
				nvo = opt.navigationVOffset * opt.bh,
				nho = opt.navigationHOffset * opt.bw;

			if (nv=="center")	 bullets.css({'top':'50%','marginTop':(nvo-Math.round(bullets.innerHeight()/2))+"px"});
			if (nv=="bottom")	 bullets.css({'bottom':(0+nvo)+"px"});
			if (nv=="top")	 bullets.css({'top':(0+nvo)+"px"});

			if (nh=="center")	bullets.css({'left':'50%','marginLeft':(loff+nho-Math.round(bullets.innerWidth()/2))+"px"});
			if (nh=="left")	bullets.css({'left':(0+nho+loff)+"px"});
			if (nh=="right")	bullets.css({'right':(0+nho-loff)+"px"});
		}


		/*******************************************************
			-	HANDLING OF PREVIEWS AND CUSTOM PREVIEWS	-
		*******************************************************/

		var handleSpecialPreviews = function(opt) {

			

		}
		//////////////////////////////////////////////////////////
		//	-	SET THE IMAGE SIZE TO FIT INTO THE CONTIANER -  //
		////////////////////////////////////////////////////////
		var setSize = function(img,opt) {


			



		}




		/////////////////////////////////////////
		//	-	PREPARE THE SLIDES / SLOTS -  //
		///////////////////////////////////////
		var prepareSlides = function(container,opt) {

		
		}


		///////////////////////
		// PREPARE THE SLIDE //
		//////////////////////
		var prepareOneSlide = function(slotholder,opt,visible,vorh) {

				
		}

		/***********************************************
			-	MOVE IE8 IMAGE IN RIGHT POSITION	-
		***********************************************/

		var ieimgposition = function(nextsh,opt) {

			
		}

		///////////////////////
		//	REMOVE SLOTS	//
		/////////////////////
		var removeSlots = function(container,opt,where) {
				
		}


		/*******************************************
			-	PREPARE LOADING OF IMAGES	-
		********************************************/
		var loadAllPrepared = function(container,alreadyinload) {

			container.find('img, .defaultimg').each(function(i) {
				var img = jQuery(this),
					ill = img.data('lazyload');

				if (ill!=img.attr('src') && alreadyinload<3 && ill!=undefined && ill!='undefined') {

					if (ill !=undefined && ill !='undefined') {
						img.attr('src',ill);

						var limg = new Image();

						limg.onload = function(i) {
							img.data('lazydone',1);
							if (img.hasClass("defaultimg")) setDefImg(img,limg);
						}
						limg.error = function() {
							img.data('lazydone',1);
						}

						limg.src=img.attr('src');
						if (limg.complete) {
								if (img.hasClass("defaultimg")) setDefImg(img,limg);
								img.data('lazydone',1);
						}

					}
				} else {

					if ((ill === undefined || ill === 'undefined') && img.data('lazydone')!=1) {
						var limg = new Image();
						limg.onload = function() {
							if (img.hasClass("defaultimg")) setDefImg(img,limg);
							img.data('lazydone',1);
						}
						limg.error = function() {
							img.data('lazydone',1);
						}


						if (img.attr('src')!=undefined && img.attr('src')!='undefined') 	{
							limg.src = img.attr('src');
						} else
							limg.src = img.data('src');

						if (limg.complete) {
								if (img.hasClass("defaultimg")) {
									setDefImg(img,limg);
								}
								img.data('lazydone',1);
						}
					}
				}
			})
		}

		var setDefImg = function(img,limg) {
			var nextli = img.closest('li'),
				ww = limg.width,
				hh = limg.height;

			nextli.data('owidth',ww);
			nextli.data('oheight',hh);
			nextli.find('.slotholder').data('owidth',ww);
			nextli.find('.slotholder').data('oheight',hh);
			nextli.data('loadeddone',1);
		}

		var waitForLoads = function(element,call,opt) {

			loadAllPrepared(element,0);
			var inter = setInterval(function() {
				opt.bannertimeronpause = true;
				opt.container.trigger('stoptimer');
				opt.cd=0;
				 var found = 0;
				 element.find('img, .defaultimg').each(function(i) {
				 	if (jQuery(this).data('lazydone')!=1) {
				 		found++;

				 	}
				 });

				 if (found>0)
					 loadAllPrepared(element,found);
				 else {
					 clearInterval(inter);
					 if (call!=undefined)
					 	call();
				 }

			},100)
		}


		//////////////////////////////
		//	-	SWAP THE SLIDES -  //
		////////////////////////////
		var swapSlide = function(container,opt) {

				
		}

		var swapSlideCall = function(opt,defimg,container) {
			opt.bannertimeronpause = false;
		    opt.cd=0;
		    container.trigger('nulltimer');
		    container.find('.tp-loader').css({display:"none"});
		    setSize(defimg,opt);
			setBulPos(container,opt);
			setSize(defimg,opt);
		   	swapSlideProgress(container,opt);

		}

		/******************************
			-	SWAP SLIDE PROGRESS	-
		********************************/
		/*!SWAP SLIDE*/
		var swapSlideProgress = function(container,opt) {




		

		}


		/******************************************
			-	START THE LAYER ANIMATION 	-
		*******************************************/

		var slideAnimation = function(container,opt,nextli,actli,actsh,nextsh) {

			
			///////////////////////////
			// SIMPLE FADE ANIMATION //
			///////////////////////////
			

		}






		/**************************************
			-	GIVE FREE THE TRANSITIOSN	-
		**************************************/
		var letItFree = function(container,opt,nextsh,actsh,nextli,actli,mtl) {
				

			}


		//////////////////////////////////////////
		// CHANG THE YOUTUBE PLAYER STATE HERE //
		////////////////////////////////////////
		var  onPlayerStateChange = function(event) {

		

		  }



		 ////////////////////////
		// VIMEO ADD EVENT /////
		////////////////////////
		var addEvent = function(element, eventName, callback) {

				
		}





		/////////////////////////////////////
		// EVENT HANDLING FOR VIMEO VIDEOS //
		/////////////////////////////////////

		var vimeoready_auto = function(player_id,autoplay) {

			
			}



			/////////////////////////////////////
			// RESIZE HTML5VIDEO FOR FULLSCREEN//
			/////////////////////////////////////
			var updateHTML5Size = function(pc,container) {
					
				}



				/////////////////////////////////////
				//	-	CREATE ANIMATION OBJECT	-  //
				/////////////////////////////////////
				var newAnimObject = function() {
									
									}

				///////////////////////////////////////////////////
				// ANALYSE AND READ OUT DATAS FROM HTML CAPTIONS //
				///////////////////////////////////////////////////
				var getAnimDatas = function(frm,data) {

								
								}
				///////////////////////////////////////////////////////////////////
				// ANALYSE AND READ OUT DATAS FROM HTML CAPTIONS ANIMATION STEPS //
				///////////////////////////////////////////////////////////////////
				var getAnimSteps = function(data) {

					
				}




				////////////////////////
				// SHOW THE CAPTION  //
				///////////////////////
				var animateTheCaptions = function(nextli, opt,recalled,mtl) {

								


				var get_browser = function(){
				    var N=navigator.appName, ua=navigator.userAgent, tem;
				    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
				    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
				    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
				    return M[0];
				    }
				var get_browser_version  = function(){
				    var N=navigator.appName, ua=navigator.userAgent, tem;
				    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
				    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
				    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
				    return M[1];
				    }

				/////////////////////////////////////////////////////////////////
				//	-	CALCULATE THE RESPONSIVE SIZES OF THE CAPTIONS	-	  //
				/////////////////////////////////////////////////////////////////
				var calcCaptionResponsive = function(nc,opt) {
								if (nc.data('fsize') == undefined) nc.data('fsize',parseInt(nc.css('font-size'),0) || 0);
								if (nc.data('pt') == undefined) nc.data('pt',parseInt(nc.css('paddingTop'),0) || 0);
								if (nc.data('pb') == undefined) nc.data('pb',parseInt(nc.css('paddingBottom'),0) || 0);
								if (nc.data('pl') == undefined) nc.data('pl',parseInt(nc.css('paddingLeft'),0) || 0);
								if (nc.data('pr') == undefined) nc.data('pr',parseInt(nc.css('paddingRight'),0) || 0);

								if (nc.data('mt') == undefined) nc.data('mt',parseInt(nc.css('marginTop'),0) || 0);
								if (nc.data('mb') == undefined) nc.data('mb',parseInt(nc.css('marginBottom'),0) || 0);
								if (nc.data('ml') == undefined) nc.data('ml',parseInt(nc.css('marginLeft'),0) || 0);
								if (nc.data('mr') == undefined) nc.data('mr',parseInt(nc.css('marginRight'),0) || 0);

								if (nc.data('bt') == undefined) nc.data('bt',parseInt(nc.css('borderTopWidth'),0) || 0);
								if (nc.data('bb') == undefined) nc.data('bb',parseInt(nc.css('borderBottomWidth'),0) || 0);
								if (nc.data('bl') == undefined) nc.data('bl',parseInt(nc.css('borderLeftWidth'),0) || 0);
								if (nc.data('br') == undefined) nc.data('br',parseInt(nc.css('borderRightWidth'),0) || 0);

								if (nc.data('ls') == undefined) nc.data('ls',parseInt(nc.css('letterSpacing'),0) || 0);

								if (nc.data('lh') == undefined) nc.data('lh',parseInt(nc.css('lineHeight'),0) || "auto");
								if (nc.data('minwidth') == undefined) nc.data('minwidth',parseInt(nc.css('minWidth'),0) || 0);
								if (nc.data('minheight') == undefined) nc.data('minheight',parseInt(nc.css('minHeight'),0) || 0);
								if (nc.data('maxwidth') == undefined) nc.data('maxwidth',parseInt(nc.css('maxWidth'),0) || "none");
								if (nc.data('maxheight') == undefined) nc.data('maxheight',parseInt(nc.css('maxHeight'),0) || "none");
								if (nc.data('wii') == undefined) nc.data('wii',parseInt(nc.css('width'),0) || 0);
								if (nc.data('hii') == undefined) nc.data('hii',parseInt(nc.css('height'),0) || 0);

								if (nc.data('wan') == undefined) nc.data('wan',nc.css("-webkit-transition"));
								if (nc.data('moan') == undefined) nc.data('moan',nc.css("-moz-animation-transition"));
								if (nc.data('man') == undefined) nc.data('man',nc.css("-ms-animation-transition"));
								if (nc.data('ani') == undefined) nc.data('ani',nc.css("transition"));

								// IE8 FIX FOR AUTO LINEHEIGHT
								if (nc.data('lh')=="auto") nc.data('lh',nc.data('fsize')+4);




								if (!nc.hasClass("tp-splitted")) {


										nc.css("-webkit-transition", "none");
									    nc.css("-moz-transition", "none");
									    nc.css("-ms-transition", "none");
									    nc.css("transition", "none");

										punchgs.TweenLite.set(nc,{
														 fontSize: Math.round((nc.data('fsize') * opt.bw))+"px",

														 letterSpacing:Math.floor((nc.data('ls') * opt.bw))+"px",

														 paddingTop: Math.round((nc.data('pt') * opt.bh)) + "px",
														 paddingBottom: Math.round((nc.data('pb') * opt.bh)) + "px",
														 paddingLeft: Math.round((nc.data('pl') * opt.bw)) + "px",
														 paddingRight: Math.round((nc.data('pr') * opt.bw)) + "px",

														 marginTop: (nc.data('mt') * opt.bh) + "px",
														 marginBottom: (nc.data('mb') * opt.bh) + "px",
														 marginLeft: (nc.data('ml') * opt.bw) + "px",
														 marginRight: (nc.data('mr') * opt.bw) + "px",

														 borderTopWidth: Math.round((nc.data('bt') * opt.bh)) + "px",
														 borderBottomWidth: Math.round((nc.data('bb') * opt.bh)) + "px",
														 borderLeftWidth: Math.round((nc.data('bl') * opt.bw)) + "px",
														 borderRightWidth: Math.round((nc.data('br') * opt.bw)) + "px",

														 lineHeight: Math.round((nc.data('lh') * opt.bh)) + "px",
														 minWidth:(nc.data('minwidth') * opt.bw) + "px",
														 minHeight:(nc.data('minheight') * opt.bh) + "px",

														/* width:(nc.data('wii') * opt.bw) + "px",
														 height:(nc.data('hii') * opt.bh) + "px",														 */

														 overwrite:"auto"
										});
										setTimeout(function() {
											nc.css("-webkit-transition", nc.data('wan'));
										    nc.css("-moz-transition", nc.data('moan'));
										    nc.css("-ms-transition", nc.data('man'));
										    nc.css("transition", nc.data('ani'));

										},30);

										//konsole.log(nc.data('maxwidth')+"  "+nc.data('maxheight'));
										if (nc.data('maxheight')!='none')
											nc.css({'maxHeight':(nc.data('maxheight') * opt.bh) + "px"});


										if (nc.data('maxwidth')!='none')
											nc.css({'maxWidth':(nc.data('maxwidth') * opt.bw) + "px"});
								}
						}


				/******************************
					-	CAPTION LOOPS	-
				********************************/


				var callCaptionLoops = function(nextcaption,factor) {

									

				var killCaptionLoops = function(nextcaption) {
							// SOME LOOPING ANIMATION ON INTERNAL ELEMENTS
							nextcaption.find('.rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave').each(function() {
								var el = jQuery(this);
								if (el.data('timeline')!=undefined) {
										el.data('timeline').pause();
										el.data('timeline',null);
									}
								});
				}

				//////////////////////////
				//	REMOVE THE CAPTIONS //
				/////////////////////////
				var removeTheCaptions = function(actli,opt) {

					
				}

				//////////////////////////////
				//	MOVE THE CAPTIONS  //
				////////////////////////////
				var addMoveCaption = function(nextcaption,opt,params,frame,downscale) {
							

				}
				//////////////////////////////
				//	MOVE OUT THE CAPTIONS  //
				////////////////////////////
				var endMoveCaption = function(nextcaption,opt,mdelay,backwards,frame,downscale) {

								
			}

		///////////////////////////
		//	REMOVE THE LISTENERS //
		///////////////////////////
		var removeAllListeners = function(container,opt) {
			container.children().each(function() {
			  try{ jQuery(this).die('click'); } catch(e) {}
			  try{ jQuery(this).die('mouseenter');} catch(e) {}
			  try{ jQuery(this).die('mouseleave');} catch(e) {}
			  try{ jQuery(this).unbind('hover');} catch(e) {}
			})
			try{ container.die('click','mouseenter','mouseleave');} catch(e) {}
			clearInterval(opt.cdint);
			container=null;
		}

		///////////////////////////
		//	-	countDown	-	//
		/////////////////////////
		var countDown = function(container,opt) {
			
		}
	

	//////////////////
	// IS MOBILE ?? //
	//////////////////
	var is_mobile = function() {
	    var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry','Android', 'webos', ,'iPod', 'iPhone', 'iPad', 'Blackberry', 'BlackBerry'];
		var ismobile=false;
	    for(var i in agents) {

		    if (navigator.userAgent.split(agents[i]).length>1) {
	            ismobile = true;

	          }
	    }
	    return ismobile;
	}



/**************************************************************************
 * Revolution Slider - PAN ZOOM MODULE
 * @version: 1.0 (03.06.2013)
 * @author ThemePunch
**************************************************************************/

	/***********************************************
		-	KEN BURN BACKGROUND FIT CALCULATOR	-
	***********************************************/
	var calculateKenBurnScales = function(proc,sloth,opt) {
				var ow = sloth.data('owidth');
				var oh = sloth.data('oheight');

				if (ow / oh > opt.width / opt.height) {
					var factor = (opt.container.width() /ow);
					var nheight = oh * factor;
					var hfactor = (nheight / opt.container.height())*proc;
					proc = proc * (100/hfactor);
					hfactor = 100;
					proc = proc;
					return (proc+"% "+hfactor+"%"+" 1");
				} else {
					var factor = (opt.container.width() /ow);
					var nheight = oh * factor;
					var hfactor = (nheight / opt.container.height())*proc;
					return (proc+"% "+hfactor+"%");
				}
			}



	/******************************
		-	startKenBurn	-
	********************************/
	var startKenBurn = function(container,opt,recalc,prepareonly) {

		try{
			var actli = container.find('>ul:first-child >li:eq('+opt.act+')');
		} catch(e) {
			var actli=container.find('>ul:first-child >li:eq(1)');
		}

		opt.lastslide=opt.act;


		var nextli = container.find('>ul:first-child >li:eq('+opt.next+')'),
			nextsh = nextli.find('.slotholder'),
			bgps = nextsh.data('bgposition'),
			bgpe = nextsh.data('bgpositionend'),
			zos = nextsh.data('zoomstart')/100,
			zoe = nextsh.data('zoomend')/100,
			ros = nextsh.data('rotationstart'),
			roe = nextsh.data('rotationend'),
			bgfs = nextsh.data('bgfit'),
			bgfe = nextsh.data('bgfitend'),
			easeme = nextsh.data('easeme'),
			dur = nextsh.data('duration')/1000,
			bgfb = 100;


			if (bgfs==undefined) bgfs=100;
			if (bgfe==undefined) bgfe=100;
			var obgfs = bgfs,
				obgfe = bgfe;

			bgfs = calculateKenBurnScales(bgfs,nextsh,opt);
			bgfe = calculateKenBurnScales(bgfe,nextsh,opt);
			bgfb = calculateKenBurnScales(100,nextsh,opt);


			if (zos==undefined) zos=1;
			if (zoe==undefined) zoe=1;
			if (ros==undefined) ros=0;
			if (roe==undefined) roe=0;

			if (zos<1) zos=1;
			if (zoe<1) zoe=1;


			var imgobj = new Object();
			imgobj.w = parseInt(bgfb.split(" ")[0],0),
			imgobj.h = parseInt(bgfb.split(" ")[1],0);

			var turned = false;
			if (bgfb.split(" ")[2] == "1") {
				turned = true;
			}

			nextsh.find('.defaultimg').each(function() {
				var defimg = jQuery(this);
				if (nextsh.find('.kenburnimg').length==0)
					nextsh.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="'+defimg.attr('src')+'" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:'+imgobj.w+'%;height:'+imgobj.h+'%;"></div>');
				else {
					nextsh.find('.kenburnimg img').css({width:imgobj.w+'%',height:imgobj.h+'%'});
				}



				var kbimg = nextsh.find('.kenburnimg img');


				var imgs = calculateKenBurnImgPos(opt,bgps,bgfs,kbimg,turned),
					imge = calculateKenBurnImgPos(opt,bgpe,bgfe,kbimg,turned);

				if (turned) {
					imgs.w = obgfs/100;
					imge.w = obgfe/100;
				}



				if (prepareonly) {

					punchgs.TweenLite.set(kbimg,{autoAlpha:0,
											transformPerspective:1200,
											transformOrigin:"0% 0%",
											top:0,left:0,
											scale:imgs.w,
											x:imgs.x,
											y:imgs.y});
					var sx = imgs.w,
						ww = (sx * kbimg.width()) - opt.width,
						hh = (sx * kbimg.height()) - opt.height,
						hor = Math.abs((imgs.x / ww)*100),
						ver = Math.abs((imgs.y / hh)*100);
						if (hh==0) ver =0;
						if (ww == 0) hor = 0;
					defimg.data('bgposition',hor+"% "+ver+"%");
					if (!isIE(8)) defimg.data('currotate',getRotationDegrees(kbimg));
					if (!isIE(8)) defimg.data('curscale',(imgobj.w*sx)+"%  "+(imgobj.h*sx+"%"));

					nextsh.find('.kenburnimg').remove();
				}
				else
					defimg.data('kenburn',punchgs.TweenLite.fromTo(kbimg,dur,{autoAlpha:1, force3D:punchgs.force3d, transformOrigin:"0% 0%", top:0,left:0, scale:imgs.w, x:imgs.x, y:imgs.y},{autoAlpha:1,rotationZ:roe,ease:easeme, x:imge.x, y:imge.y,scale:imge.w,onUpdate:function() {
							var sx = kbimg[0]._gsTransform.scaleX;
							var ww = (sx * kbimg.width()) - opt.width,
								hh = (sx * kbimg.height()) - opt.height,
								hor = Math.abs((kbimg[0]._gsTransform.x / ww)*100),
								ver = Math.abs((kbimg[0]._gsTransform.y / hh)*100);
								if (hh==0) ver =0;
								if (ww == 0) hor = 0;

							defimg.data('bgposition',hor+"% "+ver+"%");

							if (!isIE(8)) defimg.data('currotate',getRotationDegrees(kbimg));
							if (!isIE(8)) defimg.data('curscale',(imgobj.w*sx)+"%  "+(imgobj.h*sx+"%"));
							//punchgs.TweenLite.set(defimg,{rotation:defimg.data('currotate'), backgroundPosition:defimg.data('bgposition'), backgroundSize:defimg.data('curscale')});
					}}));
		})
	}

	/*************************************************
		-	CALCULATE KENBURNS IMAGE POSITIONS	-
	**************************************************/

	var calculateKenBurnImgPos = function(opt,bgp,bgf,img,turned) {
			var imgobj = new Object;

			if (!turned)
				imgobj.w = parseInt(bgf.split(" ")[0],0) / 100;
			else
				imgobj.w = parseInt(bgf.split(" ")[1],0) / 100;

			switch(bgp) {
							case "left top":
							case "top left":
								imgobj.x = 0;
								imgobj.y = 0;
							break;
							case "center top":
							case "top center":
								imgobj.x = (((0-img.width()) * imgobj.w) + parseInt(opt.width,0))/2;
								imgobj.y = 0;
							break;
							case "top right":
							case "right top":
								imgobj.x = ((0-img.width()) * imgobj.w) + parseInt(opt.width,0);
								imgobj.y = 0;

							break;
							case "center left":
							case "left center":
								imgobj.x = 0;
								imgobj.y = (((0-img.height()) * imgobj.w) + parseInt(opt.height,0)) / 2;
							break;
							case "center center":
								imgobj.x = (((0-img.width()) * imgobj.w) + parseInt(opt.width,0))/2;
								imgobj.y = (((0-img.height()) * imgobj.w) + parseInt(opt.height,0)) / 2;

							break;
							case "center right":
							case "right center":
								imgobj.x = ((0-img.width()) * imgobj.w) + parseInt(opt.width,0);
								imgobj.y = (((0-img.height()) * imgobj.w) + parseInt(opt.height,0)) / 2;

							break;
							case "bottom left":
							case "left bottom":
								imgobj.x =0;
								imgobj.y = ((0-img.height()) * imgobj.w) + parseInt(opt.height,0);

							break;
							case "bottom center":
							case "center bottom":
								imgobj.x = (((0-img.width()) * imgobj.w) + parseInt(opt.width,0))/2;
								imgobj.y = ((0-img.height()) * imgobj.w) + parseInt(opt.height,0);
							break;
							case "bottom right":
							case "right bottom":
								imgobj.x = ((0-img.width()) * imgobj.w) + parseInt(opt.width,0);
								imgobj.y = ((0-img.height()) * imgobj.w) + parseInt(opt.height,0);
							break;
						}



			return imgobj;
		}

		/******************************
			-	GET ROTATION DEGREES	-
		********************************/
		var getRotationDegrees = function(obj) {
				    var matrix = obj.css("-webkit-transform") ||
				    obj.css("-moz-transform")    ||
				    obj.css("-ms-transform")     ||
				    obj.css("-o-transform")      ||
				    obj.css("transform");
				    if(matrix !== 'none') {
				        var values = matrix.split('(')[1].split(')')[0].split(',');
				        var a = values[0];
				        var b = values[1];
				        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
				    } else { var angle = 0; }
				    return (angle < 0) ? angle +=360 : angle;
				}


		/******************************
			-	STOP KEN BURN	-
		********************************/
		var stopKenBurn = function(container,opt) {

			try{
				var actli = container.find('>ul:first-child >li:eq('+opt.act+')');
			} catch(e) {
				var actli=container.find('>ul:first-child >li:eq(1)');
			}

			opt.lastslide=opt.act;

			var nextli = container.find('>ul:first-child >li:eq('+opt.next+')');


			var actsh = actli.find('.slotholder');
			var nextsh = nextli.find('.slotholder');

			container.find('.defaultimg').each(function() {
				var defimg = jQuery(this);
				punchgs.TweenLite.killTweensOf(defimg,false);
				punchgs.TweenLite.set(defimg,{scale:1,rotationZ:0});
				punchgs.TweenLite.killTweensOf(defimg.data('kenburn img'),false);
				if (defimg.data('kenburn') != undefined) {
					defimg.data('kenburn').pause();
				}
				if (defimg.data('currotate') != undefined && defimg.data('bgposition') !=undefined && defimg.data('curscale') != undefined)
					punchgs.TweenLite.set(defimg,{rotation:defimg.data('currotate'), backgroundPosition:defimg.data('bgposition'), backgroundSize:defimg.data('curscale')});
				if (defimg!= undefined && defimg.data('kenburn img') != undefined && defimg.data('kenburn img').length>0) punchgs.TweenLite.set(defimg.data('kenburn img'),{autoAlpha:0});

			});
		}

//// END OF KENBURNS EXTNESION




/**************************************************************************
 * Revolution Slider - PARALLAX MODULE
 * @version: 1.1 (23.06.2013)
 * @author ThemePunch
**************************************************************************/

		/******************************
			-	PARALLAX EFFECT	-
		********************************/
		var checkForParallax = function(container,opt) {
			if (is_mobile() && opt.parallaxDisableOnMobile=="on") return false;

			container.find('>ul:first-child >li').each(function() {
				var li = jQuery(this);
				for (var i = 1; i<=10;i++)
					li.find('.rs-parallaxlevel-'+i).each(function() {
						var pw = jQuery(this);
						pw.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:'+pw.css('zIndex')+'" class="tp-parallax-container" data-parallaxlevel="'+opt.parallaxLevels[i-1]+'"></div>');
					});
			})



			if (opt.parallax=="mouse" || opt.parallax=="scroll+mouse" || opt.parallax=="mouse+scroll") {

						container.mouseenter(function(event) {
							var currslide = container.find('.current-sr-slide-visible');
									var t = container.offset().top,
										l = container.offset().left,
										ex = (event.pageX-l),
										ey =  (event.pageY-t);
									currslide.data("enterx",ex);
									currslide.data("entery",ey);

						})

						container.on('mousemove.hoverdir, mouseleave.hoverdir',function(event) {
							var currslide = container.find('.current-sr-slide-visible');
							switch (event.type) {

								case "mousemove":

										var	t = container.offset().top,
											l = container.offset().left,
											mh = currslide.data("enterx"),
											mv = currslide.data("entery"),
											diffh = (mh - (event.pageX  - l)),
											diffv = (mv - (event.pageY - t));

										currslide.find(".tp-parallax-container").each(function() {
											var pc = jQuery(this),
												pl = parseInt(pc.data('parallaxlevel'),0)/100,
												offsh =	diffh * pl,
												offsv =	diffv * pl;
											if (opt.parallax=="scroll+mouse" || opt.parallax=="mouse+scroll")
												punchgs.TweenLite.to(pc,0.4,{force3D:"auto",x:offsh,ease:punchgs.Power3.easeOut,overwrite:"all"});
											else
												punchgs.TweenLite.to(pc,0.4,{force3D:"auto",x:offsh,y:offsv,ease:punchgs.Power3.easeOut,overwrite:"all"});
										})

								break;
								case "mouseleave":
										currslide.find(".tp-parallax-container").each(function() {
											var pc = jQuery(this);
											if (opt.parallax=="scroll+mouse" || opt.parallax=="mouse+scroll")
												punchgs.TweenLite.to(pc,1.5,{force3D:"auto",x:0,ease:punchgs.Power3.easeOut});
											else
												punchgs.TweenLite.to(pc,1.5,{force3D:"auto",x:0,y:0,ease:punchgs.Power3.easeOut});
										})
								break;
							}
						});

						if (is_mobile())
							window.ondeviceorientation = function(event) {
							  var 	y = Math.round(event.beta  || 0),
							  		x = Math.round(event.gamma || 0);

							  var currslide = container.find('.current-sr-slide-visible');


							  if (jQuery(window).width() > jQuery(window).height()){
							  		var xx = x;
							  		x = y;
							  		y = xx;

							  }

								var curh = 360/container.width() * x,
							  		curv = 180/container.height() * y;




							  currslide.find(".tp-parallax-container").each(function() {
												var pc = jQuery(this),
													pl = parseInt(pc.data('parallaxlevel'),0)/100,
													offsh =	curh * pl,
													offsv =	curv * pl;
												punchgs.TweenLite.to(pc,0.2,{force3D:"auto",x:offsh,y:offsv,ease:punchgs.Power3.easeOut});
											})

							  // y: -90 -> +90,  x:-180 -> +180

							  //jQuery('.logo-container').html("h:"+curh+"  v:"+curv);
							  }
			}
			if (opt.parallax=="scroll" || opt.parallax=="scroll+mouse" || opt.parallax=="mouse+scroll") {

						jQuery(window).on('scroll',function(event) {
							scrollParallax(container,opt);
						});
			}
		}

		/***************************************
			-	SET POST OF SCROLL PARALLAX	-
		***************************************/
		var scrollParallax = function(container,opt) {
			if (is_mobile() && opt.parallaxDisableOnMobile=="on") return false;
			var t = container.offset().top,
					st = jQuery(window).scrollTop(),
					dist = t+container.height()/2,
					mv = t+container.height()/2 - st,
					wh = jQuery(window).height()/2,
					diffv= wh - mv;

			if (dist<wh) diffv = diffv - (wh-dist);
			var currslide = container.find('.current-sr-slide-visible');
			container.find(".tp-parallax-container").each(function(i) {
				var pc = jQuery(this),
					pl = parseInt(pc.data('parallaxlevel'),0)/100,
					offsv =	diffv * pl;
				pc.data('parallaxoffset',offsv);
				punchgs.TweenLite.to(pc,0.2,{force3D:"auto",y:offsv,ease:punchgs.Power3.easeOut});
			})

			if (opt.parallaxBgFreeze!="on") {
				var pl = opt.parallaxLevels[0]/100,
					offsv =	diffv * pl;
				punchgs.TweenLite.to(container,0.2,{force3D:"auto",y:offsv,ease:punchgs.Power3.easeOut});
			}
		}

		/**************************************************************************
		 * Revolution Slider - THUMBNAIL MODULE
		 * @version: 1.0 (03.06.2013)
		 * @author ThemePunch
		**************************************************************************/


		////////////////////////////////
		//	-	CREATE THE BULLETS -  //
		////////////////////////////////
		var createThumbs = function(container,opt) {

			var cap=container.parent();



			if (opt.navigationType=="thumb" || opt.navsecond=="both") {
						cap.append('<div class="tp-bullets tp-thumbs '+opt.navigationStyle+'"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');
			}
			var bullets = cap.find('.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer');
			var bup = bullets.parent();

			bup.width(opt.thumbWidth*opt.thumbAmount);
			bup.height(opt.thumbHeight);
			bup.parent().width(opt.thumbWidth*opt.thumbAmount);
			bup.parent().height(opt.thumbHeight);

			container.find('>ul:first >li').each(function(i) {
							var li= container.find(">ul:first >li:eq("+i+")");
							var bgcolor = li.find(".defaultimg").css("backgroundColor");
							if (li.data('thumb') !=undefined)
								var src= li.data('thumb')
							else
								var src=li.find("img:first").attr('src');


							bullets.append('<div class="bullet thumb" style="background-color:'+bgcolor+';position:relative;width:'+opt.thumbWidth+'px;height:'+opt.thumbHeight+'px;background-image:url('+src+') !important;background-size:cover;background-position:center center;"></div>');
							var bullet= bullets.find('.bullet:first');
				});
			//bullets.append('<div style="clear:both"></div>');
			var minwidth=10;


			// ADD THE BULLET CLICK FUNCTION HERE
			bullets.find('.bullet').each(function(i) {
				var bul = jQuery(this);

				if (i==opt.slideamount-1) bul.addClass('last');
				if (i==0) bul.addClass('first');
				bul.width(opt.thumbWidth);
				bul.height(opt.thumbHeight);

				if (minwidth<bul.outerWidth(true)) minwidth=bul.outerWidth(true);
				bul.click(function() {
					if (opt.transition==0 && bul.index() != opt.act) {
						opt.next = bul.index();
						callingNewSlide(opt,container);
					}
				});
			});


			var max=minwidth*container.find('>ul:first >li').length;

			var thumbconwidth=bullets.parent().width();
			opt.thumbWidth = minwidth;



			////////////////////////
			// SLIDE TO POSITION  //
			////////////////////////
			if (thumbconwidth<max) {
				jQuery(document).mousemove(function(e) {
					jQuery('body').data('mousex',e.pageX);
				});



				// ON MOUSE MOVE ON THE THUMBNAILS EVERYTHING SHOULD MOVE :)

				bullets.parent().mouseenter(function() {
						var $this=jQuery(this);

						var offset = $this.offset(),
							x = jQuery('body').data('mousex')-offset.left,
							thumbconwidth=$this.width(),
							minwidth=$this.find('.bullet:first').outerWidth(true),
							max=minwidth*container.find('>ul:first >li').length,
							diff=(max- thumbconwidth)+15,
							steps = diff / thumbconwidth;

						$this.addClass("over");
						x=x-30;

						//ANIMATE TO POSITION
						var pos=(0-((x)*steps));
						if (pos>0) pos =0;
						if (pos<0-max+thumbconwidth) pos=0-max+thumbconwidth;
						moveThumbSliderToPosition($this,pos,200);
				});

				bullets.parent().mousemove(function() {

								var $this=jQuery(this),
									offset = $this.offset(),
									x = jQuery('body').data('mousex')-offset.left,
									thumbconwidth=$this.width(),
									minwidth=$this.find('.bullet:first').outerWidth(true),
									max=minwidth*container.find('>ul:first >li').length-1,
									diff=(max- thumbconwidth)+15,
									steps = diff / thumbconwidth;

								x=x-3;
								if (x<6) x=0;
								if (x+3>thumbconwidth-6) x=thumbconwidth;

								//ANIMATE TO POSITION
								var pos=(0-((x)*steps));
								if (pos>0) pos =0;
								if (pos<0-max+thumbconwidth) pos=0-max+thumbconwidth;
								moveThumbSliderToPosition($this,pos,0);

				});

				bullets.parent().mouseleave(function() {
								var $this=jQuery(this);
								$this.removeClass("over");
								moveSelectedThumb(container);
				});
			}


		}


		///////////////////////////////
		//	SelectedThumbInPosition //
		//////////////////////////////
		var moveSelectedThumb = function(container) {

									var bullets=container.parent().find('.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer'),
										$this=bullets.parent(),
										offset = $this.offset(),
										minwidth=$this.find('.bullet:first').outerWidth(true),
										x = $this.find('.bullet.selected').index() * minwidth,
										thumbconwidth=$this.width(),
										minwidth=$this.find('.bullet:first').outerWidth(true),
										max=minwidth*container.find('>ul:first >li').length,
										diff=(max- thumbconwidth),
										steps = diff / thumbconwidth,
										pos=0-x;

									if (pos>0) pos =0;
									if (pos<0-max+thumbconwidth) pos=0-max+thumbconwidth;
									if (!$this.hasClass("over")) {
										moveThumbSliderToPosition($this,pos,200);
									}
		}


		////////////////////////////////////
		//	MOVE THUMB SLIDER TO POSITION //
		///////////////////////////////////
		var moveThumbSliderToPosition = function($this,pos,speed) {
			punchgs.TweenLite.to($this.find('.tp-thumbcontainer'),0.2,{force3D:"auto",left:pos,ease:punchgs.Power3.easeOut,overwrite:"auto"});
		}
})(jQuery);



/// END OF THUMBNAIL EXTNESIONS






// SOME ERROR MESSAGES IN CASE THE PLUGIN CAN NOT BE LOADED
function revslider_showDoubleJqueryError(sliderID) {
	var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
	errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
	errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
	errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
	errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
		jQuery(sliderID).show().html(errorMessage);
}
}
