import React from 'react'
import PropTypes from 'prop-types'

export default function HTML (props) {
  return (
    <html lang='en' {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key='noscript' id='gatsby-noscript'>
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key='body'
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <link
          rel='stylesheet'
          type='text/css'
          href='https://rsms.me/inter/inter.css'
          media='none'
          onload="this.media='all';"
        />
        <script
          crossOrigin='anonymous'
          src='https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2Cfetch'
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              'window.$crisp=[];window.CRISP_WEBSITE_ID="1ad5d211-8699-43f6-add3-578b9e47b922";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();'
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
