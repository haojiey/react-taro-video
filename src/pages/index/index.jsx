
import React, { useState } from 'react';
import { View, Text, Image, Video } from "@tarojs/components";
import './index.scss'
import playPng from './play.png';

function index() {
   /**video显示*/
  const [show, setShow] = useState(false);
  /**video src */
  const [currentUrl, setUrl] = useState('https://haokan.baidu.com/v?pd=wisenatural&vid=7193404785423312404')
  /**
   * 后去用来存储视频内容
   * src 视频链接
   * poster 视频封面
   */
  const items = [
    {
      src: 'https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      poster: 'https://gimg4.baidu.com/poster/src=http%3A%2F%2Ft13.baidu.com%2Fit%2Fu%3D285711196%2C3737063251%26fm%3D225%26app%3D113%26f%3DJPEG%3Fw%3D1499%26h%3D843%26s%3D948661B6528179E170D185610300E072&refer=http%3A%2F%2Fwww.baidu.com&app=2004&size=f352,234&n=0&g=0n&q=100?sec=1670594905&t=c79bee53e89ce7ad51e623b6965aaa49'
    },
    {
      src: 'https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      poster: 'https://gimg4.baidu.com/poster/src=http%3A%2F%2Ft14.baidu.com%2Fit%2Fu%3D9026040337065077393%2C2458246382500884620%26fm%3D3008%26app%3D3011%26f%3DJPEG&refer=http%3A%2F%2Fwww.baidu.com&app=2004&size=f352,234&n=0&g=0n&q=100?sec=1670594905&t=8e64f145cb5bb91fb5732976d133c0ae'
    },
    {
      src: 'https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      poster: 'https://gimg4.baidu.com/poster/src=http%3A%2F%2Ft14.baidu.com%2Fit%2Fu%3D3288250258020470043%2C6838124010771806365%26fm%3D3008%26app%3D3011%26f%3DJPEG&refer=http%3A%2F%2Fwww.baidu.com&app=2004&size=f352,234&n=0&g=0n&q=100?sec=1670594905&t=15ae1f53237134c3d348af6e2b32de7f'
    },
    {
      src: 'https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      poster: 'https://gimg4.baidu.com/poster/src=http%3A%2F%2Ft10.baidu.com%2Fit%2Fu%3D831339238%2C1746775854%26fm%3D220%26app%3D103%26f%3DJPEG&refer=http%3A%2F%2Fwww.baidu.com&app=2004&size=f352,234&n=0&g=0n&q=100?sec=1670594905&t=8af10ca8f623747c1a2320e60869e7ee'
    },
    {
      src: 'https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      poster: 'https://gimg4.baidu.com/poster/src=http%3A%2F%2Ft13.baidu.com%2Fit%2Fu%3D13984566540608762419%2C17434347867253587749%26fm%3D3008%26app%3D3011%26f%3DJPEG&refer=http%3A%2F%2Fwww.baidu.com&app=2004&size=f352,234&n=0&g=0n&q=100?sec=1670594905&t=9fb2a83c6b4670946666c6861e440b2d'
    },
  ]
  /**
   * 显示video控件
   * 设置video当前视频链接
   */
  const play = (src) => {
    setShow(true)
    setUrl(src)
  }
  /**关闭video控件 */
  const close = () => {
    setShow(false)
  }
  return (
    <View className='index'>
      {items.map(target => {
        return (
          <View className='index-items'>
            <View className='index-items-box' style={{ backgroundImage: `url(${target.poster})` }} >
              <View className='index-items-mask'><Image src={playPng} onTap={() => play(target.src)} /></View>
            </View>
          </View>
        )
      })
      }
      {!show ? null : <View>
        <Text className='close' onTap={close}>关闭</Text>
        <Video
          id='video'
          src={currentUrl}
          initialTime={0}
          controls
          autoplay
          showCenterPlayBtn={false}
          loop={false}
          muted={false}
        />
      </View>
      }
    </View>
  );
}

export default index;
