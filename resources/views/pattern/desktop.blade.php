<!DOCTYPE html>
<html>
{{-- зависемости --}}
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>@yield('title')</title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />

    <meta property="og:title" content="" />
    <meta property="og:description" content="" />
    <meta property="og:url" content="" />
    <meta property="og:image" content="" />
    <meta property="og:type" content="website" />

    <meta itemprop="name" content="" />
    <meta itemprop="description" content="" />
    <meta itemprop="image" content="" />

    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/desktop_style.css">
    <link rel="stylesheet" href="/css/stylesheet.css">
    <style type="text/css">
        :root [href^="//mage98rquewz.com/"], :root img[style*="//counter.yadro.ru/"], :root img[src^="/stat/"][width="88"][height="31"], :root img[src*="top.mail.ru/counter?"], :root img[src*="cycounter"][width="88"][height="31"], :root img[src*="://c.bigmir.net/"], :root a[href^="http://hitcounter.ru/top/stat.php"], :root a[href^="http://click.hotlog.ru/"], :root a[href*="/rating/"] > img[width="88"][height="31"], :root a[href*="//top.mail.ru/jump?"], :root a#mobtop[title^="Рейтинг мобильных сайтов"], :root [title="uWeb Counter"], :root [title="uCoz Counter"], :root .min-width-normal > #popup_container ~ #fade, :root .min-width-normal > #popup_container, :root body > div[class^="_"][class*=" _"][class$="_stBig"], :root body > div[style="position: fixed; z-index: 999999; width: 400px; height: 308px; right: 5px; bottom: 5px;"], :root .flex-promo-series > .left-col > :not(#players):not(.serial-series-info), :root a[href*="://news.mirtesen.ru/newdata/"], :root .app.blog-post-page #blog-post-item-video-ad, :root #root > .app .sportrecs, :root #root > .app #very-right-column, :root body.has-brand .b-content__main > div[style^="height: 250px; overflow: hidden;"], :root body.has-brand .b-content__main > div[id]:not([class]):empty, :root body.has-brand .b-content__main .b-player a[href*="aHR0c"], :root div[style="width: 252px; height: 450px; position: fixed; right: 0px; top: 0px; overflow: hidden; z-index: 10000;"], :root thetruestory-widget-top, :root object[data^="blob"], :root img[width="728"][height="90"], :root img[width="160"][height="600"], :root iframe[src*="zhitomir.info/price"], :root iframe[src*="trafic-media.ru"], :root iframe[src*="hd.gg33.top/"], :root iframe[src*="ads.exosrv.com"], :root iframe[src*="://vidroll.ru/"], :root iframe[src*="://promo-bc.com/"], :root iframe[src*="://mark-media.com.ua"], :root iframe[src*="/mixadv_"], :root iframe[src*="/carta.ua/ajax/widget."], :root iframe[src*="/3647.tech"], :root iframe[id^="republer"], :root iframe[data-src*="fwdcdn.com/frame/partners/"], :root div[id^="yandex_rtb"], :root div[id^="trafmag_"], :root div[id^="tizerws_"], :root div[id^="rtn4p"], :root div[id^="republer_"], :root div[id^="news_nest_net_ru"], :root div[id^="news_nest_msk_ru"], :root div[id^="news_2xclick_ru_"], :root div[id^="join_informer_"], :root div[id^="itizergroup_"], :root div[id^="infox_"], :root div[id^="gnezdo_ru_"], :root div[id^="cpa_rotator_block"], :root div[id^="beroll_rotator"], :root div[id^="b_tz_"], :root div[id^="admixer_"], :root div[id^="admixer-"], :root div[id^="DIV_DA_"], :root div[id^="Crt-"][style], :root div[data-server-rendered="true"] > div[id^="la-"], :root div[data-adv-type="dfp"], :root div[class^="mixadvert"], :root iframe[src^="https://a.adtng.com/"], :root div[class^="da-ya-widget"], :root div[class^="da-widget-"], :root div[class^="cnt32_"][id^="cnt_rb_"], :root div[class^="block_fortress"], :root div[class^="bidvol-widget-"], :root div[class^="adfinity_block_"], :root div[class*="td-a-rec-id-"], :root #root > .app .partner-block-wrapper, :root div[class*="spklw"][data-type="ad"], :root a[onclick*="trtkp.ru"], :root a[onclick*="offergate-amigo"], :root [data-ns-portal] div[class^="advLabel"], :root iframe[src*="litres.ru/static/widgets"], :root a[href^="https://www.juicer.io?referrer="], :root a[href^="https://wcm-ru.frontend.weborama.fr/fcgi-bin/dispatch.fcgi?"], :root a[href^="https://relap.io/"][href*="promo_ad_link"], :root a[href^="https://msetup.pro"], :root a[href^="https://bongacams"][href*="com/track?"], :root a[href^="http://trafmaster.com"], :root a[href^="http://traderstart.mirtesen.ru"], :root a[href^="http://tds-2.ru"], :root a[href^="http://glprt.ru/affiliate/"], :root a[href^="http://datxxx.com"], :root a[href^="http://browserload.info/"], :root a[href^="http://amigodistr.ru/"], :root img[data-src="https://catalog.orbita.co.il/orbita.gif"], :root a[href^="/images/obmen/"][href$=".php"][target="_blank"], :root a[href^="/go/ufiler?"], :root a[href^="/go/ubar?"], :root a[href="http://advert.mirtesen.ru/"], :root a[href*="xxxrevpushclcdu.com"], :root a[href*="webdiana.ru/click"], :root a[href*="tvroff.net"], :root a[href*="tvks.ru"], :root a[href*="trklp.ru"], :root a[href*="traflabs.xyz"], :root div[id^="CGCandy"], :root a[href*="tptrk.ru"], :root a[href*="top.24smi.info"], :root a[href*="shakesclick.com"], :root a[href*="shakescash.com"], :root a[href*="sapmedia.ru"], :root a[href*="sandratand.ru"], :root a[href*="rexchange.begun.ru/rclick?"], :root a[href*="retagapp.com"], :root a[href*="refpazus.top"], :root a[href*="problogrus.ru"], :root a[href*="please-direct.com"], :root a[href*="sviruniversal.com/"], :root a[href*="octoclick.net"], :root a[href*="nhebd.xyz"], :root a[href*="news"][href*="favid"], :root a[href*="makegreat.website"], :root a[href*="m1cpl.ru"], :root #root > .app .adfox-top, :root a[href*="joycasino.com/?partner="], :root a[href*="idealmedia.io"], :root a[href*="//softboxik1.ru/"], :root a[href*="flylinks.pw"], :root [data-la-block-show-id], :root a[href*="films.ws"], :root a[href*="cpl11.ru"], :root a[href*="cmsmodnews.com"], :root a[href*="shakesin.com"], :root a[href*="bgrndi.com"], :root a[href^="https://zirdough.net/"], :root a[href*="awesomeredirector"], :root a[href*="ads2-adnow.com"], :root a[href*="adpool.bet/"], :root a[href*="://www.meendoru.net/?partner="], :root a[href^="https://bs.serving-sys.com"], :root a[href*="://womens-journal.ru/"], :root a[href*="://vse-sdal.com/promo/"], :root [id^="ad-wrap-"], :root a[href^="https://go.tmrjmp.com"], :root a[href*="://ufiler-pro.ru/"], :root topadblock, :root a[href*="://tracker.partnersmelbet.ru/"], :root a[href*="://topclicks.club/"], :root a[href*="://tlmnt"][href*="/tracker/?partner="], :root a[href*="://telamon"][href*="/tracker/?partner="], :root a[title="TopTracker.Ru - Рейтинг трекеров."], :root a[href^="https://startgaming.net/tienda/" i], :root a[href*="://clickstats.fun/"], :root a[href*="://techdmn.com/"], :root a[href^="https://tracker.loropartners.com/"], :root [onclick*="traffic-media.co"], :root a[href*="://tatarkoresh.ru"], :root a[href*="://sugisatomi.com/"], :root a[href*="://segodnia.club/"], :root [href*="driverpack.io/"], :root a[href*="cpagetti1.com"], :root a[href*="://search-cdn.ru/r/"], :root a[href*="://ruprivate.club/"], :root a[href^="https://kshop"][href*=".com/"], :root a[href*="://ruonline.bar/"], :root a[href^="http://eaplay.ru/"], :root amp-connatix-player, :root a[href*="://riaccaw.com/"], :root [href^="https://join.playboyplus.com/track/"], :root a[href*="://hypmag.ru/search/pereh.php"], :root a[href*="://reidancis.com/"], :root a[href*=".cfm?domain="][href*="&fp="], :root a[href*="://ya-browser.ru/r/"], :root a[href*="://refpamjeql.top/"], :root [data-mobile-ad-id], :root a[href*="://ref.studwork.ru/"], :root a[href*="://r.advg.agency/"], :root a[href^="https://homyanus.com"], :root a[href*="please-direct.me"], :root a[href*="://profiledbase.com/"], :root div[id^="advertur_"], :root a[href*="://lapina.xyz/"], :root a[href*="://lapina.best/"], :root a[href*="/rlink/simptizer/"], :root a[href*="://gopremiumsoft.com/"], :root a[href*="://go.progfile.space/r/"], :root a[href*="://go.bundlebyte.net/r/"], :root a[href*="://go.btraffic.net/"], :root a[href*="://getbrauzer.ru/"], :root a[href*="://newbrowserme.ru/"], :root a[href*="://gertadv.ru/"], :root a[href*="torrentum.ru"], :root a[href*="://filesmytop.ru/"], :root [href^="https://www.mypillow.com/"] > img, :root a[href*="://fast2click.ru/"], :root a[href*="tvkw.ru"], :root a[href^="http://www.mrskin.com/tour"], :root a[href*="://etcodes.com/"], :root a[href*="://et-cod.com/"], :root a[href^="https://go.xxxjmp.com"], :root a[href*="://elgrur.com/"], :root a[href*="://doxod24.online/"], :root a[href*="://downloadcontent2.ru/"], :root a[href*="://dmtech05.com/"], :root a[href*="://clickrpk.com/"], :root a[href*="://bubblevard.com/"], :root a[href*="://bs.serving-sys.ru/"], :root div[id^="adfox_"], :root a[href*="://bestnewsoft.ru/"], :root a[href*="://analyticsq.com"], :root a[href^="http://fly-shops.ru"], :root a[href*="/universal-lnk.net/"], :root a[href*="://vpnbrowser.ru/"], :root .nya-slot[style], :root a[href*="/uni-lnk.com/"], :root a[href*="://getyoursoft.ru/"], :root a[href*="/sb/clk/"], :root a[href*="://extlinka.ru/"], :root a[href*="/rapidtor.ru"], :root a[href*="://premiumredir.ru/"], :root a[href^="https://play1ad.shop/"], :root a[href*="/onvix.tv/promo/"][target=_blank], :root a[href*="/onvix.me/promo/"][target=_blank], :root a[href^="https://streamate.com/landing/click/"], :root a[href*="/newbrowser.club/"], :root a[href^="https://www.adultempire.com/"][href*="?partner_id="], :root a[href*="/myuniversalnk.net/"], :root a[href*="/myuniversalnk.com/"], :root a[href*="/mosday.ru/ad/"], :root a[href*="/loaderu.ru/"], :root a[href^="https://prime.rambler.ru/promo/"], :root a[href^="//s.zlinkd.com/"], :root a[href*="/installpack.net"], :root a[href*="/fastvk.com"], :root object[data*="ads.com/clk.swf"], :root a[href*="/eversaree.bid"], :root a[href*="://r.advmusic.com/"], :root a[href*="/clubleads.ru"], :root a[href*="/afftraf.co/"], :root a[href*="/advjump.com"], :root a[href*="://yadistr.ru/"], :root a[href*="//yojlf.com"], :root a[href*="://installpack.ru"], :root a[href*="//viruniversal.com/"], :root a[href*="//universalut.info/"], :root a[href*="//universalini.info/"], :root a[href*="//ubar.pro"], :root a[href*="//ubar-pro"], :root a[href*="/u-loads.ru/"], :root [href^="http://www.mypillow.com/"] > img, :root a[href^="//go.eabids.com/"], :root a[href*="//tranqvilius.com/"], :root div[data-adzone], :root a[href*="://tele.gg/"], :root a[href*="//tiruniversal.com/"], :root [href^="https://optimizedelite.com/"] > img, :root a[href^="https://www.dating-finder.com/signup/?ai_d="], :root a[href*="//tdsrotate.ru/"], :root a[href*="//restofarian.com"], :root a[href*="//portakamus.com/"], :root a[href*="//newbrowser.me/"], :root a[href^="https://bongacams10.com/track?"], :root a[href*="//loderna.ru"], :root [href^="https://www.restoro.com/"], :root a[href*="//loderls.ru"], :root a[href^="https://tour.mrskin.com/"], :root #BlWrapper > .b-temp_rbc, :root a[href*="//historategory.com/"], :root a[href*="//go.webredir.net/r/"], :root a[href*="//getmybrowser.ru/"], :root a[href*="://ya-distrib.ru/r/"], :root [href^="https://www.hostg.xyz/"] > img, :root a[href*="//clickdome.online/"], :root a[href*="//gerocenius.com/"], :root a[href*="//givemysoft.ru/"], :root a[href*="//febrare.ru/"], :root [id^="ad_slider"], :root a[href*="advertwebgid.ru"], :root a[href*="//ext-load.net"], :root a[href*="//dzen.ru"][href*="favid"], :root a[href^="https://www.adskeeper.com"], :root a[href*="bestforexplmdb.com"], :root a[href*="/universalsrc.com/"], :root a[href*="//bestonewos.com/"], :root a[href*="//avertise.ru/"], :root a[href*="//advtise.ru/"], :root div[id^="traffim-widget"], :root a[href^="https://m.do.co/c/"] > img, :root a[href*="//24smi."][href*="/top/"], :root a[href*=".ufiler.pro/"], :root a[href*="://ufiler-download.ru/"], :root a[href^="https://trk.nfl-online-streams.club/"], :root a[href*=".pokupkins.ru"], :root a[href*="://topsofto.ru/"], :root a[href*=".orgsales.ru"], :root [src^="//am15.net/?"], :root [id^="unit_"] > a[href*="://vrf.ru"], :root #root > .app > .sticky-button, :root [href^="https://download.cdn.yandex.net/yandex-tag/weboffer/"], :root [href*="postlnk.com"], :root [href*="pigiuqproxy.com"], :root a[href^="https://pb-imc.com/"], :root a[href*=".braun634.com/"], :root a[href^="http://deskfrontfreely.com/"], :root a[href^="https://t.hrtye.com/"], :root [href*="://morelnk.ru/"], :root a[href*="mixadvert.com"], :root a[href*="/ogclick.com/api/redirect"], :root [data-link*="://topclicks.club/"], :root [href*="://edgrmtracking.com/"], :root [href*="://clickpzk.com/"], :root [href*="://click.1k3web.com/"], :root [href*="/vaigowoa.com"], :root a[href^="https://www.liquidfire.mobi/"], :root a[href*="intovarro.ru"], :root [href*="/uni-tds.com/"], :root [href*="//takenewsofts.ru/"], :root a[href*="go.ad2up.com"], :root a[href^="https://hot-growngames.life/"], :root [data-src^="https://news.te.ua/widget/"], :root [data-membrana-container], :root [data-link*="://ubar-pro"], :root .header-banner > #moneyback[target="_blank"], :root [data-link*="/sb/clk/"], :root a[href*="offhealth.ru"], :root a[href*="://landingtracker.com/"], :root [data-link*="//ufiler-pro2.ru"], :root a[href^="http://handgripvegetationhols.com/"], :root [data-la-show-id], :root [data-la-show-block-id], :root div[id^="zcbclk"], :root [data-la-custom-block], :root a[href*="herrabjec.pro"], :root [data-la-block], :root [class^="fpm_"][class*="_out"], :root [href^="https://noqreport.com/"] > img, :root a[href*="://superiortds.ru/"], :root [class^="fpm_"][class*="_crss"], :root a[href^="http://luckiestclick.com/goto."], :root [class^="fpm_"][class*="_cross"], :root a[href^="http://naggingirresponsible.com/"], :root [href*=".drp.su/"], :root div[id^="ad-div-"], :root [class^="flat_"][class*="_modal"], :root div[id^="adpartner-jsunit-"], :root a[href*="/yfiles1.ru"], :root a[href*="wow-partners.com/click.php"], :root [class^="flat_"][class*="_cross"], :root iframe[title="mixAd"], :root a[href^="https://syndication.optimizesrv.com/"], :root DIV[id^="DIV_NNN_"], :root .content_rb[id^="content_rb_"], :root a[href*="//loderla.online"], :root .base-page_center > .banerTopOver, :root #adv_unisound ~ #main > #slidercontentContainer, :root a[href^="http://cam4com.go2cloud.org/aff_c?"], :root #adv_unisound ~ #ad_module_cont > [id^="ad_module"], :root a[href*="/get-torrent.ru"], :root #adv_kod_frame ~ #gotimer, :root a[href^="https://ad.zanox.com/ppc/"] > img, :root #MT_overroll ~ div[class][style="left:0px;top:0px;height:480px;width:650px;"], :root a[href*="//appt12mn.com/"], :root a[href*="kinqon.ru"], :root img[src*="://cp.beget.com/promo_data/"], :root zeus-ad, :root a[href*="://offergate-apps-phkr.com/"], :root span[id^="ezoic-pub-ad-placeholder-"], :root ins.adsbygoogle[data-ad-slot], :root guj-ad, :root gpt-ad, :root a[href*="//refpaewsbc.top/"], :root img[src*="//i.i.ua/r/"], :root [href="https://www.masstortfinancing.com/"] > img, :root div[id^="zergnet-widget"], :root div[id^="smi_teaser_"], :root div[id^="vuukle-ad-"], :root a[href*="://dafeb.ru/"], :root div[id^="taboola-stream-"], :root [href^="https://go.xlrdr.com"], :root div[id^="sticky_ad_"], :root a[href*="shakespoint.com"], :root div[id^="pa_sticky_ad_box_middle_"], :root a[href*="/sarimsolus.com/"], :root a[href^="http://www.adultempire.com/unlimited/promo?"][href*="&partner_id="], :root div[id^="optidigital-adslot"], :root [href^="https://goldcometals.com/clk.trk"], :root a[href^="https://cams.imagetwist.com/in/?track="], :root div[id^="gpt_ad_"], :root div[id^="ezoic-pub-ad-"], :root a[href*="fortedrow.pro"], :root div[id^="dfp-ad-"], :root div[id^="crt-"][style], :root div[id^="advads_ad_"], :root #root > .app .brand-widget__right-cl, :root div[id^="adspot-"], :root div[id^="ads300_250-widget-"], :root div[id^="ads300_100-widget-"], :root div[id^="ads250_250-widget-"], :root a[href*="trk-1.com"], :root div[id^="adrotate_widgets-"], :root ps-connatix-module, :root div[id^="ad_position_"], :root div[id^="_vdo_ads_player_ai_"], :root img[title="bigmir)net TOP 100"], :root div[id*="ScriptRoot"], :root div[id*="MarketGid"], :root div[data-native_ad], :root [data-href^="https://download.cdn.yandex.net/yandex-tag/weboffer/"], :root a[href^="https://click.hoolig.app/"], :root div[data-native-ad], :root div[data-mini-ad-unit], :root div[data-insertion], :root a[href^="https://s.optzsrv.com/"], :root div[data-id-advertdfpconf], :root a[href^="https://mediaserver.entainpartners.com/renderBanner.do?"], :root div[data-google-query-id], :root hl-adsense, :root div[data-contentexchange-widget], :root div[data-id^="div-gpt-ad-"], :root a[href*="//tekaners.com/"], :root div[data-content="Advertisement"], :root div[data-alias="300x250 Ad 2"], :root div[data-adunit], :root div[data-adunit-path], :root div[data-adname], :root div[data-ad-wrapper], :root [data-wpas-zoneid], :root div[data-ad-placeholder], :root a[href*="/go.1k3.net/"], :root div[class^="native-ad-"], :root a[href*="://shusnarmuk.com/"], :root div[data-dfp-id], :root a[href^="http://premonitioninventdisagree.com/"], :root div[class^="kiwi-ad-wrapper"], :root a[href^="https://trk.sportsflix4k.club/"], :root div[aria-label="Ads"], :root display-ads, :root display-ad-component, :root a[href^="https://go.xlivrdr.com"], :root bottomadblock, :root a[href^="http://putanapartners.com/go."], :root atf-ad-slot, :root [id^="relap-custom-iframe-rec"], :root aside[id^="adrotate_widgets-"], :root a[href*="ftpglst.com"], :root [data-name="adaptiveConstructorAd"], :root [href^="https://wct.link/click?"], :root ark-top-ad, :root a[href*="kma1.biz"], :root noindex > .search_result[class*="search_result_"], :root a[href^="https://go.xlvirdr.com"], :root amp-fx-flying-carpet, :root #PopWin[onmousemove], :root a[href*="//1xbetlk.site/"], :root amp-embed[type="taboola"], :root a[class*="button"][href^="//"][href*="yandex"][onclick*="dnl"][onclick*="knopka"], :root a[href*="//myblogshop.top/r/"], :root [href^="https://glersakr.com/"], :root a[href*="://tdsrotations.ru/"], :root div[id^="google_dfp_"], :root ad-slot, :root [data-dynamic-ads], :root a[href^="https://banners.livepartners.com/"], :root iframe[src*="fwdcdn.com/frame/partners/"], :root a[target="_blank"][onmousedown="this.href^='http://paid.outbrain.com/network/redir?"], :root div[id^="div-ads-"], :root a[href*="://downloadbrowsernew.com/"], :root a[onmousedown^="this.href='https://paid.outbrain.com/network/redir?"][target="_blank"] + .ob_source, :root a[onmousedown^="this.href='http://paid.outbrain.com/network/redir?"][target="_blank"], :root a[href*="news-sphere.com"], :root [name^="google_ads_iframe"], :root a[href*="goext.info"], :root a[href^="https://ab.advertiserurl.com/aff/"], :root a[href*="://sdertjnbv.xyz/"], :root a[href^="https://www.purevpn.com/"][href*="&utm_source=aff-"], :root iframe[src*="laim.tv/rotator/"], :root a[href*="/advertisesimple.info"], :root a[href*="/ber-ter.com"], :root a[href^="https://www.onlineusershielder.com/"], :root a[href*="//universalin.info/"], :root a[href*="kodielinktrust.ru"], :root iframe[src*="://rstbtmd.com/"], :root a[href*="://101partners-stat2.com/"], :root a[href^="https://www.nudeidols.com/cams/"], :root a[href^="https://syndication.exoclick.com/"], :root a[href^="https://financeads.net/tc.php?"], :root a[href^="https://www.mrskin.com/tour"], :root a[href^="https://www.kingsoffetish.com/tour?partner_id="], :root a[onmousedown^="this.href='http://paid.outbrain.com/network/redir?"][target="_blank"] + .ob_source, :root a[href^="https://www.infowarsstore.com/"] > img, :root a[href^="https://www.highperformancecpmgate.com/"], :root [data-url*="://installpack.net"], :root amp-ad, :root a[href*="ex.24smi.info"], :root a[href^="https://www.highcpmrevenuenetwork.com/"], :root a[href*="://filetaker.ru/"], :root a[href^="https://lnkxt.bannerator.com/"], :root a[href^="https://www.geekbuying.com/dynamic-ads/"], :root a[href*="//refpabjgth.top/"], :root a[href^="https://quotationfirearmrevision.com/"], :root a[href^="https://www.friendlyduck.com/AF_"], :root a[href^="http://www.friendlyduck.com/AF_"], :root a[href^="https://www.financeads.net/tc.php?"], :root [href^="https://freecourseweb.com/"] > .sitefriend, :root [href^="https://www.herbanomic.com/"] > img, :root div[id^="bidvol-widget-"], :root a[href*="://kinobud.site/"], :root a[href^="https://maymooth-stopic.com/"], :root a[href^="https://www.dql2clk.com/"], :root a[href*="browser-ru.site"], :root a[href^="https://www.nutaku.net/signup/landing/"], :root .mywidget__col > .mywidget__link_advert, :root a[href^="https://www.brazzersnetwork.com/landing/"], :root a[href*="://clickstats.online/"], :root [href^="https://www.targetingpartner.com/"], :root a[href^="https://www.adxsrve.com/"], :root [href^="https://track.fiverr.com/visit/"] > img, :root [data-template-type="nativead"], :root a[href^="https://www.endorico.com/Smartlink/"], :root a[href^="https://voluum.prom-xcams.com/"], :root a[href^="https://twinrdsrv.com/"], :root [href*="://simpalsid.com/ad/click?id"], :root [href^="https://turtlebids.irauctions.com/"] img, :root a[href^="https://tracking.avapartner.com/"], :root a[href^="http://reals-story.ru/"], :root a[href^="https://track.wg-aff.com"], :root a[href^="https://track.ultravpn.com/"], :root a[href^="https://track.afcpatrk.com/"], :root a[href*="media-rotate.com"], :root [href*="driftawayforfun.com"], :root a[href^="https://track.1234sd123.com/"], :root a[href*="goodtrack.ru"], :root a[href^="https://torguard.net/aff.php"] > img, :root a[href*="//universalies.info/"], :root a[href^="https://tc.tradetracker.net/"] > img, :root a[href^="https://tatrck.com/"], :root a[href^="https://click.candyoffers.com/"], :root [href^="https://zstacklife.com/"] img, :root a[href^="https://t.aslnk.link/"], :root a[href^="https://t.adating.link/"], :root a[href^="https://safesurfingtoday.com/"][href*="?skip="], :root [class^="fpm_"][class*="_modal"], :root a[href^="https://land.brazzersnetwork.com/landing/"], :root AD-SLOT, :root [data-block-type="ad"], :root a[href^="https://t.acam.link/"], :root a[href*="/rapidtor.site"], :root a[href^="https://go.trackitalltheway.com/"], :root iframe[src*="tureckiy-serial.ru/"][src$=".php"], :root a[href^="https://xbet-4.com/"], :root a[href^="https://syndication.dynsrvtbg.com/"], :root div[data-alias="300x250 Ad 1"], :root a[href^="https://syndicate.contentsserved.com/"], :root a[href^="https://a.bestcontentoperation.top/"], :root a[href^="https://landing1.brazzersnetwork.com"], :root a[href^="https://svb-analytics.trackerrr.com/"], :root app-advertisement, :root a[href^="https://ad.doubleclick.net/"], :root div[class*="relap"][class*="-rec-item"], :root a[href^="https://static.fleshlight.com/images/banners/"], :root a[href^="https://slkmis.com/"], :root a[href*="trtkp.ru"], :root a[href*="//fofuvipibo.com/"], :root a[href^="https://s.zlink3.com/"], :root div[id^="criteo-"][style], :root a[href*="://edugrampromo.com/"], :root a[href*="://cozibaneco.com/"], :root a[href^="https://www.mrskin.com/account/"], :root .base-page_center > .banerBottom, :root a[href^="https://pubads.g.doubleclick.net/"], :root a[href^="https://ak.oalsauwy.net/"], :root a[href^="https://softwa.cfd/"], :root div[id^="ads_games_"], :root a[href^="https://prf.hn/click/"][href*="/camref:"] > img, :root a[href^="https://www.dating-finder.com/?ai_d="], :root a[href^="https://serve.awmdelivery.com/"], :root a[href^="https://prf.hn/click/"][href*="/adref:"] > img, :root a[href*="://folltiz.site/"], :root body > div[style="position: fixed; z-index: 999999; width: 400px; height: 308px; left: 5px; bottom: 5px;"], :root app-ad, :root a[href*="//utimg.ru/"], :root a[href^="https://postback1win.com/"], :root a[href^="https://a.adtng.com/"], :root a[href^="https://playnano.online/offerwalls/?ref="], :root a[href^="https://t.ajump1.com/"], :root a[href^="https://www.privateinternetaccess.com/"] > img, :root div[id^="M"][id*="Composite"], :root a[href^="https://mmwebhandler.aff-online.com/"], :root a[href^="https://combodef.com/"], :root a[href^="https://www.bet365.com/"][href*="affiliate="], :root [href*="://shopblogger.top/"], :root a[href*="litewebbusiness.com"], :root iframe[id^="marketgid_"], :root a[onclick*="n284adserv.com"], :root a[href^="https://pb-track.com/"], :root a[href^="https://go.hpyrdr.com/"], :root a[href^="https://pb-front.com/"], :root a[href^="https://paid.outbrain.com/network/redir?"], :root a[href^="https://ngineet.cfd/"], :root a[href*="homework.ru/?partnerId="], :root a[href^="https://ndt5.net/"], :root a[href^="http://eighteenderived.com/"], :root .OUTBRAIN[data-widget-id^="FMS_REELD_"], :root a[href^="https://natour.naughtyamerica.com/track/"], :root a[href*="//adoffer.pro/"], :root a[href^="https://get-link.xyz/"], :root a[href^="https://www.sugarinstant.com/?partner_id="], :root span[data-ez-ph-id], :root a[href*="gpclick.ru"], :root a[href^="https://a.bestcontentweb.top/"], :root [data-type="ad-vertical"], :root a[href^="https://lobimax.com/"], :root a[href^="https://go.xxxijmp.com"], :root a[href^="https://lead1.pl/"], :root a[href*="://ya-cdn.ru/r/"], :root a[href*="katuhus.com"], :root a[data-href*="recreativ.ru"], :root a[href^="https://landing.brazzersnetwork.com/"], :root a[href^="https://join.virtuallust3d.com/"], :root a[href^="https://kiksajex.com/"], :root a[href^="https://juicyads.in/"], :root a[href^="https://www.mypornstarcams.com/landing/click/"], :root a[href^="https://snowdayonline.xyz/"], :root a[href*="://parandaya.com"], :root a[href*="cosmolot.me/"][href*="banner"], :root [data-ad-name], :root a[href^="https://mediaserver.gvcaffiliates.com/renderBanner.do?"], :root [href*="://click.1k3pub.com/"], :root a[href^="https://join.dreamsexworld.com/"], :root .player-wrap > #kt_player ~ .spot-box, :root a[href*="amgfile.ru"], :root a[href*="amigo-biz.ru/ads/click"], :root a[href^="https://jaxofuna.com/"], :root [href*="://click.1k3web.net/"], :root a[href^="https://aweptjmp.com/"], :root a[href^="https://itubego.com/video-downloader/?affid="], :root div[id^="lazyad-"], :root a[href*="land-gooods.ru"], :root a[href^="https://italarizege.xyz/"], :root a[href^="https://iqbroker.com/"][href*="?aff="], :root ad-shield-ads, :root a[href*="//adretarget.net/"], :root a[href^="https://golinks.work/"], :root a[href^="https://go.xxxvjmp.com/"], :root [id^="newPortal_informer_"], :root a[href*="re-directme.com"], :root [class^="tile-picker__CitrusBannerContainer-sc-"], :root div[style*="am15.net/img/player_skins"], :root a[href^="https://go.xxxiijmp.com"], :root a[href*="://softclicks.ru/"], :root a[href^="https://go.xtbaffiliates.com/"], :root [data-role="tile-ads-module"], :root a[href^="https://go.xlviirdr.com"], :root [data-css-class="dfp-inarticle"], :root a[href^="https://go.xlviiirdr.com"], :root a[href*="://viewfilesup.ru/"], :root [alt="Rambler's Top100"], :root a[href^="https://ismlks.com/"], :root a[style="width:100%;height:100%;z-index:10000000000000000;position:absolute;top:0;left:0;"], :root [href*="://drp.su/"], :root a[href^="https://go.xlirdr.com"], :root a[href^="https://l.hyenadata.com/"], :root a[href*="://getfiletds.ru/"], :root a[href^="https://go.skinstrip.net"][href*="?campaignId="], :root a[href*="://gridsiali.com/"], :root a[href*="//dagamah.com/"], :root a[href*=".twkv.ru"], :root a[href^="https://go.markets.com/visit/?bta="], :root a[href^="https://billing.purevpn.com/aff.php"] > img, :root a[href^="https://go.nordvpn.net/aff"] > img, :root a[href*="//offergate.pro/"], :root a[href^="https://lijavaxa.com/"], :root a[href^="https://go.goaserv.com/"], :root a[href^="https://go.etoro.com/"] > img, :root a[href^="https://go.dmzjmp.com"], :root div[class^="Display_displayAd"], :root a[href^="https://www.bang.com/?aff="], :root a[href*="://takenewsoft.ru/"], :root a[href*="//spishi.vip/"], :root #mgb-container > #mgb, :root a[href^="https://go.admjmp.com"], :root div[id^="div-gpt-"], :root a[href^="https://porntubemate.com/"], :root a[href^="https://gml-grp.com/"], :root a[href^="https://get.surfshark.net/aff_c?"][href*="&aff_id="] > img, :root a[href^="https://gamingadlt.com/?offer="], :root a[href*="/onvix.co/promo/"][target=_blank], :root a[href^="https://bongacams2.com/track?"], :root [href^="https://www.reimageplus.com/"], :root a[href*="//12traffic.ru/"], :root a[data-redirect^="https://paid.outbrain.com/network/redir?"], :root [href^="https://clicks.affstrack.com/"] > img, :root a[href^="https://ak.hauchiwu.com/"], :root a[href*="tdstrk.ru"], :root a[href^="https://engine.phn.doublepimp.com/"], :root a[href^="https://engine.blueistheneworanges.com/"], :root a[href*="netcrys.com"], :root [class^="flat_"][class*="_crss"], :root a[href^="https://eergortu.net/"], :root a[href^="https://dl-protect.net/"], :root a[href^="https://www.toprevenuegate.com/"], :root a[href^="https://disobediencecalculatormaiden.com/"], :root .section-subheader > .section-hotel-prices-header, :root a[href*="feellights.ru"], :root a[href^="https://datingoffers30.info/"], :root a[href*=".foxqck.com/"], :root a[href^="https://ctosrd.com/"], :root [onclick*="content.ad/"], :root a[href^="https://clixtrac.com/"], :root a[href^="https://clicks.pipaffiliates.com/"], :root a[onclick*="/link-fes.ru"], :root a[href^="https://datewhisper.life/"], :root a[href^="https://click.linksynergy.com/fs-bin/"] > img, :root body > div[id^="dV"][style^="width"][style*="height"][style*="position"][style*="fixed"][style*="overflow"][style*="z-index"][style*="background"], :root [data-link*="//sub"][data-link*="bubblesmedia."], :root AD-TRIPLE-BOX, :root a[href^="https://track.totalav.com/"], :root img[src^="https://images.purevpnaffiliates.com"], :root body > iframe[style^="position"][style*="fixed"][id^="iFb"][src^="/?"], :root .ob_container .item-container-obpd, :root a[href^="https://clickadilla.com/"], :root div[class^="yandex_rtb"], :root a[href*="://searchlnk.ru/r/"], :root a[href^="https://click.dtiserv2.com/"], :root a[href*="://yasearchcdn.ru/r/"], :root a[href*="/vkout.ru"], :root a[href^="http://www.iyalc.com/"], :root a[href^="https://claring-loccelkin.com/"], :root [class^="div-gpt-ad"], :root a[href^="https://s.ma3ion.com/"], :root a[href^="https://t.ajrkm1.com/"], :root [href="https://masstortfinancing.com"] img, :root a[href*="//ufiler-pro2.ru"], :root a[href*=".g2afse.com/"], :root a[href*="slovosil.com"], :root [class^="adDisplay-module"], :root a[href*="ads-provider.com"], :root a[href^="https://bodelen.com/"], :root [onclick*=".twkv.ru"], :root a[href^="http://revolvemockerycopper.com/"], :root a[href^="https://awptjmp.com/"], :root a[href*="/universalsrc.net/"], :root [href="https://ourgoldguy.com/contact/"] img, :root a[href^="https://join.sexworld3d.com/track/"], :root img[onclick*="clustrmaps.com/counter/"], :root div[id*="Teaser_Block"], :root a[href^="https://intenseaffiliates.com/redirect/"], :root a[href^="https://ads.ad4game.com/"], :root a[href*="/uloads.ru/"], :root #root > .app .adfox, :root [class^="s2nPlayer"], :root iframe[src*="//refpakglscpj."], :root a[href^="http://olivka.biz/"], :root [data-ad-cls], :root a[href^="https://chaturbate.jjgirls.com/?track="], :root .app.blog-post-page .secondary-header-ad-block, :root a[href^="https://ausoafab.net/"], :root a[href^="https://activate-game.com/"], :root .scroll-fixable.rail-right > .deals-rail, :root a[href*="kshop2.biz"], :root a[href^="https://a2.adform.net/"], :root a[href^="https://auesk.cfd/"], :root iframe[src*="://partner-widget.vse-sdal.com/"], :root [href^="https://mylead.global/stl/"] > img, :root a[href^="https://ak.psaltauw.net/"], :root a[href^="https://adclick.g.doubleclick.net/"], :root div[id^="ad-position-"], :root a[href^="https://leg.xyz/?track="], :root a[href*="://manysoftlink.ru/"], :root a[href^="https://bc.game/"], :root div[class^="Adstyled__AdWrapper-"], :root a[href^="https://adultfriendfinder.com/go/"], :root body > div[style="background-color: #FFF;height: 100px;position: fixed;bottom: 0px;width: 100%;max-width: 1200px;left: 50%;transform: translateX(-50%);z-index:2147483647"], :root a[href^="https://ads.planetwin365affiliate.com/"], :root a[href*="://go.click2bit.net/"], :root a[href^="https://ads.leovegas.com/"], :root div[id^="smi2adblock_"], :root [data-m-ad-id], :root a[href^="https://a-ads.com/"], :root a[href*="muz-loader.site"], :root a[href*="clickscloud.net"], :root div[id^="rc-widget-"], :root a[href^="http://eslp34af.click/"], :root a[href^="https://turnstileunavailablesite.com/"], :root a[href*="://click2soft.ru/"], :root a[href*="//do-rod.com/"], :root a[href^="https://kshop"][href*=".pro/"], :root a[href^="https://chaturbate.com/in/?"], :root a[href^="https://prf.hn/click/"][href*="/creativeref:"] > img, :root [data-revive-zoneid] > iframe, :root a[href*="&maxads="], :root a[href^="https://1betandgonow.com/"], :root a[href^="https://www.googleadservices.com/pagead/aclk?"], :root iframe[src*="://partner-widget.vsesdal.com/"], :root a[href^="https://getvideoz.click/"], :root a[href^="https://fc.lc/ref/"], :root a[href^="http://troopsassistedstupidity.com/"], :root [href^="https://antiagingbed.com/discount/"] > img, :root amp-ad-custom, :root [data-desktop-ad-id], :root a[href*="/kshop3.biz"], :root a[href^="http://trk.globwo.online/"], :root [href^="https://affiliate.fastcomet.com/"] > img, :root a[href*="//universalice.info/"], :root a-ad, :root a[class*="button"][href^="/go/"][href*="visitid"][onclick*="dnl"], :root a[href^="https://offhandpump.com/"], :root a[href^="http://adultfriendfinder.com/go/"], :root a[href^="http://stickingrepute.com/"], :root #slashboxes > .deals-rail, :root a[href^="https://track.adform.net/"], :root a[href^="https://in.rabbtrk.com/"], :root a[href*="//partners.house/"], :root [id^="unit_"] > a[href*="://mirtesen.ru"], :root div[data-ad-targeting], :root a[href^="https://hotplaystime.life/"], :root a[href*="://yourlnk.ru/r/"], :root [id^="n4p_"], :root a[href^="http://www.h4trck.com/"], :root a[href^="https://81ac.xyz/"], :root a[href^="http://guestblackmail.com/"], :root [data-adblockkey], :root a[href*="filebase.me"], :root a[href^="https://ads.betfair.com/redirect.aspx?"], :root a[href^="https://ad.kubiccomps.icu/"], :root [href^="https://www.mypatriotsupply.com/"] > img, :root a[href^="https://trk.softonixs.xyz/"], :root [href^="https://routewebtk.com/"], :root a[href^="https://sexynearme.com/"], :root a[href^="https://myclick-2.com/"], :root a[href^="http://dragnag.com/"], :root a[href*="//universalie.info/"], :root a[href*="//loderlx.ru"], :root [id^="div-gpt-ad"], :root img[src*="://r.i.ua/"], :root div[id^="yandex_ad"], :root a[href*="https://relap.io/r?"], :root a[href^="http://avthelkp.net/"], :root a[href^="https://a.medfoodhome.com/"], :root a[href*="://gonewfiles.ru/"], :root .base-page_container > .banerRight, :root a[data-obtrack^="http://paid.outbrain.com/network/redir?"], :root a[href*="lifenews24x7.ru"], :root [onclick*="//msetup.pro/"], :root .ob_dual_right > .ob_ads_header ~ .odb_div, :root a[href^="https://engine.flixtrial.com/"], :root a[href*="//reruniversal.com/"], :root a[href*="thor-media.ru/click/"], :root a[href^="http://annulmentequitycereals.com/"], :root a[href*="beauty-list.ru"], :root iframe[src*="://goodgame.ru/html/embed-player/dist/index.html?partner="], :root citrus-ad-wrapper, :root a[href^="https://go.grinsbest.com/"], :root img[src*="//counter.yadro.ru/"], :root [href^="https://awbbjmp.com/"], :root a[onmousedown^="this.href='https://paid.outbrain.com/network/redir?"][target="_blank"], :root a[href^="//startgaming.net/tienda/" i], :root a[href^="https://www.get-express-vpn.com/offer/"], :root a[href*="://loderkkis.ru"], :root a[href*="turbotraf.com"], :root a[href^="//s.st1net.com/splash.php"], :root a[href*="://clickfrm.com/"], :root a[href^="https://a.medfoodsafety.com/"], :root .\[\&_\.gdprAdTransparencyCogWheelButton\]\:\!pjra-z-\[5\], :root a[href*="://clickstats.pw/"], :root [href^="http://clicks.totemcash.com/"], :root a[href*="twtn.ru/"], :root [data-d-ad-id], :root a[href*=".engine.adglare.net/"], :root [href^="https://www.profitablegatecpm.com/"], :root a[href*="://betahit.click/"], :root a[href^="http://com-1.pro/"], :root a[href*="ultrabit.ws"], :root a[data-widget-outbrain-redirect^="http://paid.outbrain.com/network/redir?"], :root a[href*="://new.torrent-pack.ru/"], :root [href*="//loadbrowser.ru/"], :root [data-rc-widget], :root [data-ad-width], :root a[href*="://adv-views.com"], :root a[data-url^="http://paid.outbrain.com/network/redir?"] + .author, :root a[data-oburl^="https://paid.outbrain.com/network/redir?"], :root a[href*="gocdn.ru"], :root a[href*="/jump/next.php?r="], :root a[href^="http://dragfault.com/"], :root [href^="https://cpa.10kfreesilver.com/"], :root a[href^="https://a.bestcontentfood.top/"], :root a[data-href^="http://ads.trafficjunky.net/"], :root [onclick^="location.href='https://1337x.vpnonly.site/"], :root a[href*="navaxudoru.com"], :root a[href*="lifebloggersz.ru"], :root [id^="section-ad-banner"], :root [data-advadstrackid], :root a[href^="http://muzzlematrix.com/"], :root [href^="https://zone.gotrackier.com/"], :root a[href^="https://bngpt.com/"], :root a[href^="https://getmatchedlocally.com/"], :root a[href^="https://6-partner.com/"], :root a[href^="https://www.sheetmusicplus.com/"][href*="?aff_id="], :root a[href^="https://www.goldenfrog.com/vyprvpn?offer_id="][href*="&aff_id="], :root a[href^="https://fastestvpn.com/lifetime-special-deal?a_aid="], :root [href^="//x4pollyxxpush.com/"], :root .base-page_left-side > #left_ban, :root a[href^="https://vo2.qrlsx.com/"], :root [href^="https://www.avantlink.com/click.php"] img, :root a[href*="//webbrowser.club/"], :root .pip-video-wrapper > .pip-video-label, :root iframe[src*="traffic-media.co"], :root a[href^="https://losingoldfry.com/"], :root a[href*=".adsrv.eacdn.com/"], :root a[href*="//universalse.info/"], :root [onclick*="trklp.ru"], :root [href^="https://rapidgator.net/article/premium/ref/"], :root [class^="flat_"][class*="_out"], :root a[href^="http://apytrc.com/click/"], :root [href^="https://join.girlsoutwest.com/"], :root [href^="https://join3.bannedsextapes.com"], :root .vid-present > .van_vid_carousel__padding, :root div[id^="adngin-"], :root [href^="https://track.aftrk1.com/"], :root a[href*="//sub"][href*="bubblesmedia."], :root [href^="https://istlnkcl.com/"], :root app-large-ad, :root [href^="https://ilovemyfreedoms.com/landing-"], :root a[href^="https://go.cmtaffiliates.com/"], :root a[href^="https://tm-offers.gamingadult.com/"], :root a[href^="http://kshop.biz/"], :root [href^="https://charmingdatings.life/"], :root a[href*="linkmyc.com"], :root [href^="https://v.investologic.co.uk/"], :root .base-page_center > .banerTop, :root a[href*="://z.cdn.traffic"][href*="/load"], :root a[href*="//jjgirls.com/sex/Chaturbate"], :root [data-id^="div-gpt-ad"], :root a[href*="trafgid.xyz"], :root a[href*="://getyousoft.ru/"], :root [onclick*="/sb/clk/"], :root [href^="https://www.brighteonstore.com/products/"] img, :root a[href*="://ourbrowser.net"], :root a[href^="https://bngprm.com/"], :root [href^="https://shiftnetwork.infusionsoft.com/go/"] > img, :root [src*="mixadvert.com"], :root [onclick*="msetup"][onclick*="partner"][onclick*="utm_"], :root a[href^="https://go.strpjmp.com/"], :root a[href^="https://go.bushheel.com/"], :root img[width="120"][height="600"], :root a[href^="https://ctjdwm.com/"], :root a[href^="http://bongacams.com/track?"], :root #kt_player > a[target="_blank"], :root a[href^="https://camfapr.com/landing/click/"], :root [href="//sexcams.plus/"], :root a[href*="://clickbytes.ru/"], :root a[href*=".adsbid.ru"], :root iframe[src*="utraff.com"], :root a[href^="https://join.virtualtaboo.com/track/"], :root a[href*="cpl1.ru"], :root [id^="ad_sky"], :root [href^="http://mypillow.com/"] > img, :root [href="https://jdrucker.com/gold"] > img, :root [href^="https://ad.admitad.com/"], :root [href^="https://mypillow.com/"] > img, :root [data-testid="ad_testID"], :root a[href*="://lobar.site/r/"], :root [class^="amp-ad-"], :root a[href^="http://tc.tradetracker.net/"] > img, :root [data-ez-name], :root a[href^="https://black77854.com/"], :root [data-testid="adBanner-wrapper"], :root [href^="https://mypatriotsupply.com/"] > img, :root [href*="://browseit.ru/"], :root a[href^="https://go.hpyjmp.com"], :root [href^="https://mystore.com/"] > img, :root a[href^="https://witnessjacket.com/"], :root a[href*="://mysoftrotate.ru/"], :root [id^="unit_"] > a[href*="smi2."], :root [data-adshim], :root [onclick*="mixadvert.com"], :root .novelty-banner ~ .dle_b_help > a[target="_blank"], :root [href^="https://www.cloudways.com/en/?id"], :root .grid > .container > #aside-promotion, :root DFP-AD, :root a[href*="zdravo-med.ru"], :root [data-adbridg-ad-class], :root iframe[src*="://ab.adpro.com.ua/"], :root a[href^="https://linkboss.shop/"], :root [data-ad-manager-id], :root AMP-AD, :root a[href*="://chikidiki.ru"], :root a[href*="/api/redirect?offerid="], :root a[href^="https://go.mnaspm.com/"], :root a[href*="/universallnk.net/"], :root #kt_player > div[style="position: absolute; inset: 0px; z-index: 170;"], :root a[href*="shakes.pro"], :root [data-freestar-ad][id], :root #leader-companion > a[href], :root a[href^="http://www.adultdvdempire.com/?partner_id="][href*="&utm_"], :root [data-ad-module], :root a[href^="http://partners.etoro.com/"], :root a[href^=" https://www.friendlyduck.com/AF_"], :root [src*="://dynspt.com/"], :root a[href^="https://clickins.slixa.com/"], :root [data-la-refresh-timeout], :root a[href^="https://traffdaq.com/"], :root a[href^="https://cam4com.go2cloud.org/"], :root a[href^="http://li.blogtrottr.com/click?"] { display: none !important; }:root a[href*="//parandeya.com/"] { display: none !important; }
    </style>

    <script src="/js/inputmask.min.js"></script>
    <script src="/js/SmoothScroll.min.js"></script>
    <script src="https://www.googletagmanager.com/gtag/js?id=UA-102889303-1"></script>
    <script src="https://www.google-analytics.com/analytics.js"></script>
    <script src="https://mc.yandex.ru/metrika/tag.js"></script>
    <script src="https://www.googletagmanager.com/gtag/js?id=G-0M0PN84NVV&l=dataLayer&cx=c"></script>
    <script defer>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
    
        gtag('config', 'UA-102889303-1');
    </script>
    <script defer>
        window.addEventListener('scroll', function () {
            let animN = [];
            let anim = document.querySelectorAll('.anim-section, .text-span');
            let meetFooter = (document.querySelector('footer').getBoundingClientRect().bottom + document.querySelector('footer').getBoundingClientRect().top)/2;
            anim.forEach(function (animEl, i){
                animN[i]=animEl.getBoundingClientRect().top;
            })
            let halfScreen = window.innerHeight/2+150;
            animN.forEach(function (animEl, i){
                if(animEl<halfScreen/* || meetFooter<window.innerHeight*/){
                    anim[i].classList.add('_active');
                }
            })
            if(meetFooter<window.innerHeight){
                document.querySelector('.anim-footer').classList.add('_active');
            }
        })
    </script>
    <script defer>
        document.addEventListener('DOMContentLoaded', function(){
    
            function clientsMarquee() {
                if(document.querySelector('.slider .slider-marquee div div')){
                    document.querySelector('.slider .slider-marquee div div').style.setProperty('--target','-'+document.querySelector('.slider .slider-marquee div>div').getBoundingClientRect().width+'px');
                }
            }
            clientsMarquee();
            window.addEventListener('resize', clientsMarquee);
    
            function meetingMarquee() {
                if(document.querySelector('.meeting .meeting-marquee-black div')){
                    document.querySelector('.meeting .meeting-marquee-black div').style.setProperty('--marqblack','-'+document.querySelector('.meeting .meeting-marquee-black div>div').getBoundingClientRect().width+'px');
                }
                if(document.querySelector('.meeting .meeting-marquee-red div')){
                    document.querySelector('.meeting .meeting-marquee-red div').style.setProperty('--marqred', '-'+document.querySelector('.meeting .meeting-marquee-red div>div').getBoundingClientRect().width+'px');
                }
            }
            meetingMarquee();
            window.addEventListener('resize', meetingMarquee);
    
            document.querySelector('.modal .modal-con form').addEventListener('submit', function (e) {
                e.preventDefault();
                let data = new FormData(e.target);
    
                let PhoneRegularExp = new RegExp(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
    
                if(data.get('phone')){
                    if(PhoneRegularExp.test(data.get('phone'))){
                        document.querySelector('.modal .modal-con form button').setAttribute('disabled', 'disabled')
                        data.append('method','sendZayavka');
                        data.append('control','control');
                        fetch('/sendmail', {
                            'method': 'post',
                            'body': data,
                        })
                            .then(response => response.json())
                            .then(result => {
                                if(result == 'ok'){
                                    let divContent = document.querySelector('.modal .modal-con');
                                    divContent.style.transition='opacity .5s ease';
                                    divContent.style.opacity='0';
                                    setTimeout(()=>{
                                        divContent.classList.remove('align-items-start', 'justify-content-between')
                                        divContent.classList.add('align-items-center', 'justify-content-center')
                                        divContent.innerHTML = '<div>' +
                                            '<h3 class="text-center">Спасибо!</h3>' +
                                            '<p class="text-center">В ближайшее время наши менеджеры свяжутся с Вами.</p>' +
                                            '</div>';
                                        divContent.style.opacity='1';
                                    }, 600)
                                }else{
                                    let divContent = document.querySelector('.modal .modal-con');
                                    divContent.style.transition='opacity .5s ease';
                                    divContent.style.opacity='0';
                                    setTimeout(()=>{
                                        divContent.classList.remove('align-items-start', 'justify-content-between')
                                        divContent.classList.add('align-items-center', 'justify-content-center')
                                        divContent.innerHTML = '<div>' +
                                            '<h3 class="text-center">Ошибка!</h3>' +
                                            '<p class="text-center">Попробуйте чуть позже.</p>' +
                                            '</div>';
                                        divContent.style.opacity='1';
                                    }, 600)
                                }
                            });
                    }
                }
            })
    
            setTimeout(()=>{
                if(!getCookie('cookies')){
                    document.querySelector('.cookie').classList.add('active');
                    document.querySelector('.cookie button').addEventListener('click', function (e){
                        e.preventDefault();
                        document.querySelector('.cookie').classList.remove('active');
                        setCookie('cookies','true',{expires: new Date(2070, 1, 20)});
                    })
                }
            }, 2000)
    
            function getCookie(name) {
                let matches = document.cookie.match(new RegExp(
                    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
                ));
                return matches ? decodeURIComponent(matches[1]) : undefined;
            }
    
            function setCookie(name, value, options = {}) {
                options = {
                    path: '/',
                    ...options
                };
    
                if (options.expires instanceof Date) {
                    options.expires = options.expires.toUTCString();
                }
    
                let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    
                for (let optionKey in options) {
                    updatedCookie += "; " + optionKey;
                    let optionValue = options[optionKey];
                    if (optionValue !== true) {
                        updatedCookie += "=" + optionValue;
                    }
                }
                document.cookie = updatedCookie;
            }
    
            window.addEventListener('scroll', function (){
                [...document.querySelectorAll('.appScroll_bottom, .appScroll_top')].forEach(item=>{
                    if(item&&!(window.innerHeight*.67<=item.getBoundingClientRect().top)){
                        item.classList.add('actScroll');
                        setTimeout(()=>{item.classList.add('overflow-visible');
                            item.classList.remove('appScroll_bottom');
                            item.classList.remove('appScroll_top');
                            item.classList.remove('actScroll');
                        }, 1000)
                    }
                });
                [...document.querySelectorAll('[anim]')].forEach(item=>{
                    // item.style.transition=`transform .3s ease-in-out`;
                    if(item.getAttribute('anim')=='trns-bottom'){
                        // item.style.transform=`translateY(${item.getAttribute('anim-val')*document.querySelector('[anim-from="'+item.getAttribute('anim-target')+'"]').offsetHeight}px)`;
                        item.style.transform=`translateY(${item.getAttribute('anim-val')*window.scrollY}px)`;
                    }else if(item.getAttribute('anim')=='trns-top'){
                        // item.style.transform=`translateY(-${item.getAttribute('anim-val')*document.querySelector('[anim-from="'+item.getAttribute('anim-target')+'"]').offsetHeight}px)`;
                        item.style.transform=`translateY(-${item.getAttribute('anim-val')*window.scrollY}px)`;
                    }
                })
                if(window.pageYOffset>5){
                    document.querySelector('header').classList.add('activeShadow');
                }else{
                    document.querySelector('header').classList.remove('activeShadow');
                }
            })
    
            document.querySelector(".sidenav-trigger").addEventListener("click",function (){
                this.classList.toggle("active");
                document.querySelector(".overlay").classList.toggle("active");
            });
    
            Inputmask({"mask":'+7(999)999-99-99'}).mask(document.querySelector(".modal .modal-con .c-form__input[name=phone]"));
            window.addEventListener('mousemove', e=>{
                [...document.querySelectorAll('.headText')].forEach(item=>{
                    item.style.transform='translateX('+0.2*(window.innerWidth/2-e.clientX)+'px) translateY('+0.1*(window.innerHeight/2-e.clientY)+'px)';
                    /*translateY('+0.2*(window.innerHeight/2-e.clientY)+'px)*/
                }) //функция
            })
        });
    </script>
    <script defer>
        SmoothScroll({
            // Время скролла 400 = 0.4 секунды
            animationTime    : 800,
            // Размер шага в пикселях
            stepSize         : 75,
    
            // Дополнительные настройки:
    
            // Ускорение
            accelerationDelta : 30,
            // Максимальное ускорение
            accelerationMax   : 3,
    
            // Поддержка клавиатуры
            keyboardSupport   : true,
            // Шаг скролла стрелками на клавиатуре в пикселях
            arrowScroll       : 50,
    
            // Pulse (less tweakable)
            // ratio of "tail" to "acceleration"
            pulseAlgorithm   : true,
            pulseScale       : 4,
            pulseNormalize   : 1,
    
            // Поддержка тачпада
            touchpadSupport   : true,
        })
    </script>
    <script defer>
        document.addEventListener('DOMContentLoaded', ()=>{
            let cursor = document.querySelector('cursor');
            [...document.querySelectorAll('.appearance_top, .appearance_bottom')].forEach(i=>{i.classList.add('active');setTimeout(()=>i.classList.add('overflow-visible'), 1000)});
            document.addEventListener('mousemove', e=>move(e))
            document.addEventListener('wheel', e=>move(e))
            document.addEventListener('mouseleave', ()=>{
                cursor.classList.add('hide');
            })
            document.addEventListener('mouseenter', ()=>{
                cursor.classList.remove('hide');
            })
            function move(e){
                let x = e.clientX;
                let y = e.clientY;
                cursor.style.left = `${x-10}px`;
                cursor.style.top = `${y-10}px`;
            }
            [...document.querySelectorAll('a, .btn, .btn-white, .arrowandtext-btn, .mouseWrap, .sidenav-trigger, .overlay-close, .modal-close, .meeting-showreel-hov, .slider_item, .examples-card')].forEach(item=>{
                item.onmouseover=()=>cursor.classList.add('onLink');
                item.onmouseout=()=>cursor.classList.remove('onLink');
            })
        })
    </script>

    @yield('links')
</head>
<body>
    <cursor></cursor>

    {{-- шапка --}}
    <header data-scroll="0" class="appearance_top">
        <div class="container d-flex flex-row justify-content-between align-items-center">
            <div>
                <a href="/" class="header-main-logo">
                    <img src="https://ambity.ru/assets/img/logo.svg">
                </a>
            </div>
            <div class="d-flex align-items-center">
                <div class="header-links d-xl-flex d-none flex-row align-items-center">
                    <a href="/cases">Кейсы</a>
                    <a href="/services">Услуги</a>
                    <a href="/products">Продукты</a>
                    <a href="/agency">Агентство</a>
                </div>
                <div class="d-flex flex-row align-items-center">
                    <!--<button class="btn-white btn-head" onclick="document.querySelector('.modal').style.top='0';">Обсудить проект</button>-->
                    <div class="sidenav-trigger" id="pressme">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="overlay d-flex align-items-center">
        <div class="overlay-content">
            <div class="overlay-content-head container d-flex flex-row justify-content-between align-items-center">
                <a href="/">
                    <img src="https://ambity.ru/assets/img/logo.svg">
                </a>
                <div class="d-flex flex-row align-items-center">
                    <button class="btn-white btn-head" onclick="document.querySelector('.modal').style.top='0';">Обсудить проект</button>
                    <div class="overlay-close" onclick='document.querySelector(".overlay").classList.remove("active");document.querySelector(".sidenav-trigger").classList.remove("active");'>
                        <div></div>
                    </div>
                </div>
            </div>
            <div class="container d-flex align-items-center justify-content-around h-100">
                <div class="overlay-links d-grid">
                    <div class="d-flex align-items-center">
                        <a href="/cases">Кейсы</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="/services">Услуги</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="/products">Продукты</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="/career">Карьера</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="/agency">Агентство</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="/blog">Блог</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="/contacts">Контакты</a>
                    </div>
                </div>
                <div class="d-flex flex-column align-items-end overlay-contacts">
                    <a href="tel:+7{{$contact->phone}}">+7{{$contact->phone}}</a>
                    <a href="mailto:{{$contact->email}}">{{$contact->email}}</a>
                    <div class="overlay_social soc_icons">
                        <a target="_blank" href="{{$contact->vk}}">
                            <img src="/media/vk.svg" alt="">
                        </a>
                        <a target="_blank" href="https://www.facebook.com/groups/ambity/">
                            <img src="/media/facebook.png" alt="">
                        </a>
                        <a target="_blank">
                            <img src="/media/twitter.png" alt="">
                        </a>
                    </div>
                    <button class="btn-white" onclick="document.querySelector('.modal').style.top='0';">Обсудить проект</button>
                </div>
            </div>
        </div>
    </div>
    <div class="showpic">
        <div class="showpic-content">
            <div class="container d-flex">
                <img src="/media/showreelpic.jpg">
            </div>
        </div>
    </div>
    <div class="modal d-flex align-items-center justify-content-center">
        <div class="modal-head container d-flex justify-content-between align-items-center">
            <a href="/">
                <img src="https://ambity.ru/assets/img/logo.svg">
            </a>
            <div class="modal-close" onclick="document.querySelector('.modal').style.top=null;"></div>
        </div>
        <div class="container">
            <div class="modal-con d-flex align-items-start justify-content-between">
                <div>
                    <h3>Расскажите<br>о вашем проекте</h3>
                    <p>Оставьте заявку и наш менеджер свяжется с вами в кратчайшие сроки для уточнения подробностей проекта.</p>
                </div>
                <form>
                    @csrf
                    <div class="d-flex align-items-center">
                        <input class="c-form__input" type="text" name="name" placeholder="Имя" required="">
                        <input class="c-form__input" type="text" name="phone" placeholder="Телефон" required="" inputmode="text">
                    </div>
                    <div class="d-flex align-items-center">
                        <input class="c-form__input" type="text" name="company" placeholder="Компания">
                        <input class="c-form__input" type="text" name="mail" placeholder="E-mail">
                    </div>
                    <textarea class="c-form__input" name="description" placeholder="Детали проекта"></textarea>
                    <div class="policy d-flex align-items-center">
                        <p>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с
                            <a href="/policy">политикой конфиденциальности</a></p>
                        <button class="c-form__button btn-white">Обсудить проект</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    @yield('mainContent')

    {{-- подвал --}}
    <footer class="anim-footer _active">
        <div class="footer container d-flex flex-column">
            <div class="d-flex justify-content-around">
                <div class="footer-desc d-flex flex-column align-items-start">
                    <h2>Планируете проект?</h2>
                    <p>Давайте запустим его вместе</p>
                    <button class="btn-white" onclick="document.querySelector('.modal').style.top='0';">Обсудить проект</button>
                </div>
                <div class="footer-cont d-flex flex-column">
                    <a class="footer-cont-href d-flex txt-anim" href="tel:{{$contact->phone}}"><p>{{$contact->phone}}</p><span>+7 {{$contact->phone}}</span></a>
                    <a class="footer-cont-href d-flex txt-anim" href="mailto:{{$contact->email}}"><p>{{$contact->email}}</p><span>{{$contact->email}}</span></a>
                    <p>{{$contact->adres}}</p>
                    <div class="footer-cont-soc">
                        <a target="_blank" href="{{$contact->vk}}">
                            <img src="/media/vklogo.svg" alt="">
                        </a>
                        <a target="_blank" href="{{$contact->telegram}}">
                            <img src="/media/tglogo.svg" alt="" style="padding-right: 2px">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="last-footer container d-flex justify-content-around">
            <p>ИП Нигматуллин А.З.</p>
            <p>ОГРНИП 315028000132311</p>
            <a href="/policy">Политика конфеденциальности</a>
        </div>
    </footer>
    <div class="cookie d-flex justify-content-between align-items-center">
        <p>Мы используем cookies</p>
        <button class="btn-white">Хорошо</button>
    </div>
</body>
</html>