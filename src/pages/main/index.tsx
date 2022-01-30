import { createElement, render, useRef } from 'rax';
import View from 'rax-view';
import { Swiper, SwiperSlide } from 'rax-swiper';
 import styles from './index.module.css'
export default   () => {
  const ref = useRef(null);

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
        style={{width:'750rpx'}}
        autoplay={true}
      >
        <SwiperSlide className={styles.swiperSlide} key="1"><View style={{background: 'red', height: 300 }}>1</View></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} key="2"><View style={{background: 'red', height: 300  }}>2</View></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} key="3"><View style={{ background: 'red', height: 300  }}>3</View></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} key="4"><View style={{ background: 'red', height: 300 }}>4</View></SwiperSlide>
      </Swiper>
    </View>
  );
}
 