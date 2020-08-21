import React from 'react';

const styles = {
  section: {
    height: '100vh',
  },
};

const InfiniteScroll = () => {
  // const init = (el) => {
  //   el.addEventListener('scroll', () => {
  //     console.log('SCROOLLLLL!!')
  //   });
  // };

  return (
    <div onScroll={console.log}>
      <section style={{ ...styles.section, backgroundColor: 'pink' }}>A</section>
      <section style={{ ...styles.section, backgroundColor: 'red' }}>B</section>
      <section style={{ ...styles.section, backgroundColor: 'green' }}>C</section>
      <section style={{ ...styles.section, backgroundColor: 'blue' }}>D</section>
    </div>
  );
};

export default InfiniteScroll;