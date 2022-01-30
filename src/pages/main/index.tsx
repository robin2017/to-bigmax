import { createElement, render, useRef, useState, useEffect } from 'rax';
import View from 'rax-view';
import { Swiper, SwiperSlide } from 'rax-swiper';
import Image from 'rax-image';
export default () => {
  const ref = useRef(null);
  const [pageWidth, setPageWidth] = useState('815px');
  useEffect(() => {
    const height = document.documentElement.clientHeight;
    setPageWidth(height + 'px');
  }, []);
  const imageList = [
    { content: '文案111', url: 'https://hellorobin.oss-cn-shanghai.aliyuncs.com/baymax/1643524165611.jpeg' },
      { content:'文案2',url:'https://hellorobin.oss-cn-shanghai.aliyuncs.com/baymax/1643524180189.jpeg'},
    // {url:'ddd',content:'333'},
    // {url:'ddd',content:'444'},
    // {url:'ddd',content:'55'}
  ];

  return (
    <View style={{height:'100%'}}>
      <Swiper onSlideChange={(e) => console.log(e)} ref={ref} style={{ width: '750rpx',height:'100%' }} autoplay={true}>
        {imageList.map((image, index) => {
          return (
            <SwiperSlide style={{ width: '750rpx',height: '100%',display: 'flex',alignItems: 'center', backgroundColor: 'red' }} key={index}>
              <View style={{  }}>
                <Image source={{ uri: image.url,width: '750rpx' }} />
              </View>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </View>
  );
};
