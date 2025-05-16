import React, { useEffect } from 'react';

interface InfiniteScrollProps {
  onReachBottom: () => void;
  threshold?: number; // 距离底部多少 px 时触发，默认 100px
  
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  onReachBottom,
  threshold = 10,
  
}) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (docHeight - (scrollTop + windowHeight) <= threshold) {
        onReachBottom();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onReachBottom, threshold]);

  return <div className='flex justify-center items-center h-20 text-l text-gray-500'>加载更多</div>;
};

export default InfiniteScroll;
