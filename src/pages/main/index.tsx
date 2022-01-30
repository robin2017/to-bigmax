import { createElement, render, useRef,useState,useEffect } from 'rax';
import View from 'rax-view';
import { Swiper, SwiperSlide } from 'rax-swiper';
 import styles from './index.module.css'
export default   () => {
  const ref = useRef(null);
  const [pageWidth,setPageWidth] = useState('815px')
  useEffect(()=>{
    const height = document.documentElement.clientHeight;
   setPageWidth(height + 'px')

  },[])
console.log('pagewidth:',pageWidth)
  function prev() {
    //@ts-ignore
    ref.current.slidePrev();
  }

  function next() {
        //@ts-ignore
    ref.current.slideNext();
  }

  return (
    <View>
      <Swiper
        onSlideChange={e => console.log(e)}
        ref={ref}
        style={{width:pageWidth}}
        autoplay={true}
      >
        <SwiperSlide className={styles.swiperSlide} key="1"><View style={{background: 'red', height: '750rpx' }}>1</View></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} key="2"><View style={{background: 'red', height: '750rpx'  }}>2</View></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} key="3"><View style={{ background: 'red', height: '750rpx'  }}>3</View></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} key="4"><View style={{ background: 'red', height: '750rpx' }}>4</View></SwiperSlide>
      </Swiper>
    </View>
  );
}
 