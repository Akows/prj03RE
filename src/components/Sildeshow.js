import { useEffect, useRef, useState } from 'react';

import './Sildeshow.css';

import leftarrow from '../styles/btnleft.png';
import rightarrow from '../styles/btnright.png';

const Sildeshow = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = 5;

  const showSlide = (index) => {
    const listLength = slideLength - 1;

    if (index < 0) {
      setCurrentSlide(listLength);
      return;
    } 
    else if (index > listLength) {
      setCurrentSlide(0);
      return;
    }

    if (index <= listLength) {
      setCurrentSlide(index);
      return;
    } 
  };

  var isActive1 = 'inactive';
  var isActive2 = 'inactive';
  var isActive3 = 'inactive';
  var isActive4 = 'inactive';
  var isActive5 = 'inactive';

  switch (currentSlide) {
    case 0:
        isActive1 = 'active';
        break;
    case 1:
        isActive2 = 'active';
        break;
    case 2:
        isActive3 = 'active';
        break;
    case 3:
        isActive4 = 'active';
        break;
    case 4:
        isActive5 = 'active';
        break;
    default:
        break;
}

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useEffect(() => {
    showSlide(0);
  }, []);

  useInterval(() => {
    showSlide(currentSlide);
    setCurrentSlide(currentSlide + 1);

    if (currentSlide > slideLength - 2) {
      setCurrentSlide(0);
    }
  }, 2000);

  return (
    <div className='sildeshow'>

      <img className='sildebutton' src={leftarrow} width='150px' height='150px' alt='' onClick={() => {showSlide(currentSlide - 1)}}/>

      <div className='sildeblock'>

        <div className={['slideimg', `img_${currentSlide}`].join(' ')}/>
      
        <div className='slidepoint'>
            <div className='iconpointer'>
              <button className={['point', `point_${isActive1}`].join(' ')} onClick={() => {showSlide(0)}}/>
              <button className={['point', `point_${isActive2}`].join(' ')} onClick={() => {showSlide(1)}}/>
              <button className={['point', `point_${isActive3}`].join(' ')} onClick={() => {showSlide(2)}}/>
              <button className={['point', `point_${isActive4}`].join(' ')} onClick={() => {showSlide(3)}}/>
              <button className={['point', `point_${isActive5}`].join(' ')} onClick={() => {showSlide(4)}}/>
            </div>
        </div>
      </div>

      <img className='sildebutton' src={rightarrow} width='150px' height='150px' alt='' onClick={() => {showSlide(currentSlide + 1)}}/>

    </div>
  );
};

export default Sildeshow;
