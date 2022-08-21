
<script type="wix/htmlEmbeds" id="pageHtmlEmbeds.head start"></script>
      
      <script async="true">
'use strict'

function onAnalyticsReady () {
  function kudobuzzWixEventHandler (eventName, data) {
    if (eventName === 'productPageLoaded') {
       console.log('from dashboard', { eventName })
      window.Kudos.wixProduct = data.productId
      window.Kudos.wixProductName = data.name
    }
    if (eventName === 'AddProductImpression') {
       console.log('from dashboard', { eventName })
      const contents = window.Kudos.collectionUrlAndContents && window.Kudos.collectionUrlAndContents[window.location.href]
        ? [...window.Kudos.collectionUrlAndContents[window.location.href], ...data.contents]
        : data.contents
      window.Kudos.collectionUrlAndContents = {
        [window.location.href]: contents

      }
    }
  }
  window.wixDevelopersAnalytics.register('kbDashboardScript', kudobuzzWixEventHandler)
}

!(function () {
  if (!window.Kudos) {
    window.addEventListener('wixDevelopersAnalyticsReady', onAnalyticsReady)
    var e = document.createElement('script'); e.type = 'text/javascript'
    e.async = !0; var t = 'https://statics2.kudobuzz.com/widget-loader.min.js'; e.src = t
    document.getElementsByTagName('head')[0].appendChild(e)
    window.Kudos = {
      ServerName: 'https://statics2.kudobuzz.com/',
      apiServer: 'https://api.kudobuzz.com',
      WidgetServer: 'https://widget.kudobuzz.com/'
    }
    window.Kudos.uid = '13c7552310b2195be8abb3afec8452f71dedff8782c43b00e27343987bb509f5ed905baea067d6ec5cd090709101325e51'
  }
}())
</script><script type="text/javascript" async="" src="https://statics2.kudobuzz.com/widget-loader.min.js"></script>
    
      <script id="content-protection-2005" src="https://wix.salesdish.com/page/js/contentProtection.js?id=1004685" async="true"></script>
    
      <script type="wix/htmlEmbeds" id="pageHtmlEmbeds.head end"></script>