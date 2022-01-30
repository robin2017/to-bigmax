import { createElement, render, useRef,useState,useEffect } from 'rax';
import View from 'rax-view';
import { Swiper, SwiperSlide } from 'rax-swiper';
 
export default   () => {
  const ref = useRef(null);
  const [pageWidth,setPageWidth] = useState('815px')
  useEffect(()=>{
    const height = document.documentElement.clientHeight;
   setPageWidth(height + 'px')

  },[])
  const imageList = [
    {url:'ddd',content:'文案111'},
    {url:'ddd',content:'文案2'},
    {url:'ddd',content:'333'},
    {url:'ddd',content:'444'},
    {url:'ddd',content:'55'}
  ]

  return (
    <View>
      <Swiper
        onSlideChange={e => console.log(e)}
        ref={ref}
        style={{width:pageWidth}}
        autoplay={true}
      >
        {
          imageList.map((image,index)=>{
            return <SwiperSlide  key={index}><View style={{background: 'red', height: '750rpx' }}>{image.content}</View></SwiperSlide>
          })
        }
 
      </Swiper>
    </View>
  );
}
 