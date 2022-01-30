import { createElement, render, useRef, useState, useEffect } from 'rax';
import View from 'rax-view';
import { Swiper, SwiperSlide } from 'rax-swiper';
import Image from 'rax-image';
import styles from './index.module.css';
import {initVars,frame} from '../../utils/index';
export default () => {
  const ref = useRef(null);

  const imageList = [
    { content: '文案111', url: 'https://hellorobin.oss-cn-shanghai.aliyuncs.com/baymax/1643524165611.jpeg' },
    {
      content: '文案2',
      url: 'https://hellorobin.oss-cn-shanghai.aliyuncs.com/baymax/1643524180189.jpeg',
      marginTop: '-100px',
    },
    // {url:'ddd',content:'333'},
    // {url:'ddd',content:'444'},
    // {url:'ddd',content:'55'}
  ];

  useEffect(() => {
 
   initVars();
     frame();
  }, []);
  return (
    <View style={{ height: '100%' }}>
      <canvas className={styles.canvas1} id="canvas"></canvas>
      <canvas className={styles.canvas2}></canvas>
      <Swiper onSlideChange={(e) => console.log(e)} ref={ref} className={styles.Swiper} autoplay={true}>
        {imageList.map((image, index) => {
          return (
            <SwiperSlide className={styles.SwiperSlide} key={index}>
              <View style={{}}>
                这是标题
                <View className={styles.ImageWrapper}>
                  <Image
                    source={{ uri: image.url, width: '750rpx', marginTop: image.marginTop }}
                    className={styles.Image}
                  />
                </View>
              </View>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </View>
  );
};
