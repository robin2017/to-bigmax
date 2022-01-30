import { createElement, render, useRef } from 'rax';
import View from 'rax-view';
import { Swiper, SwiperSlide } from 'rax-swiper';
 
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
      <View onClick={prev}>Prev</View>
      <View onClick={next}>Next</View>
      <Swiper
        onSlideChange={e => console.log(e)}
        ref={ref}
        autoplay={true}
      >
        <SwiperSlide key="1"><View style={{ height: 300 }}>1</View></SwiperSlide>
        <SwiperSlide key="2"><View style={{ height: 300 }}>2</View></SwiperSlide>
        <SwiperSlide key="3"><View style={{ height: 300 }}>3</View></SwiperSlide>
        <SwiperSlide key="4"><View style={{ height: 300 }}>4</View></SwiperSlide>
      </Swiper>
    </View>
  );
}
 