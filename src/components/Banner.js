import React from 'react'
import BannerAnim, { Element } from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'
import 'rc-banner-anim/assets/index.css'
import '../styles/banner.css'

const BgElement = Element.BgElement

const BannerAnimate = ({ tween1, tween2 }) => {
  return (
    <BannerAnim prefixCls='banner-user' autoPlay arrow={false}>
          <Element
            prefixCls='banner-user-elem'
          >
            <BgElement
              key='bg'
              className='bg'
              style={{
                background: '#188A79',
              }}
            />
            <TweenOne className='banner-user-title' animation={{ y: 30, opacity: 0, type: 'from', delay: 10 }} style={{ letterSpacing: '8px' }}>
              {tween1}
            </TweenOne>
          </Element>
          <Element
            prefixCls='banner-user-elem'
          >
            <BgElement
              key='bg'
              className='bg'
              style={{ 
                background: '#105B50' 
              }}
            />
            <TweenOne className='banner-user-title' animation={{ y: 30, opacity: 0, type: 'from', delay: 10 }} style={{ letterSpacing: '8px' }}>
              {tween2}
            </TweenOne>
          </Element>
        </BannerAnim>
  )
}

export default BannerAnimate;