import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

// AnimatePresence를 사용하면 React 트리에서 컴포넌트가 제거될 때 제거되는 컴포넌트에 애니메이션 효과를 줄 수 있음.
// React에는 다음과 같은 수명 주기 메서드가 없기 때문에 종료 애니메이션을 활성화해야 함.
// 1. AnimatePresence 항상 visible해야함.
// 2. AnimatePresence 안에 조건문이 있어야함.

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;
const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

// const boxVariants: Variants = {
//   initial: {
//     opacity: 0,
//     scale: 0,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     rotateZ: 360,
//   },
//   leaving: {
//     opacity: 0,
//     y: 20,
//   },
// };

// const boxVariants: Variants = {
//   initial: {
//     x: 500,
//     opacity: 0,
//     scale: 0,
//   },
//   visible: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 1 },
//   },
//   leaving: {
//     x: -500,
//     opacity: 0,
//     scale: 0,
//     transition: { duration: 1 },
//   },
// };

const boxVariants: Variants = {
  entry: (back: boolean) => {
    return {
      x: back ? -500 : 500,
      opacity: 0,
      scale: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
  exit: (back: boolean) => {
    return {
      x: back ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: { duration: 0.3 },
    };
  },
};

const AnimatePresenceComponent = () => {
  // const [showing, setShowing] = useState(false);
  // const toggleHandler = () => {
  //   setShowing((prev) => !prev);
  // };

  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <Wrapper>
      {/* <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
      <button onClick={toggleHandler}>Click</button> */}
      {/* <AnimatePresence>
        <Box
          variants={boxVariants}
          initial="initial"
          animate="visible"
          exit="leaving"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button> */}
      <AnimatePresence mode="wait" custom={back}>
        <Box
          custom={back}
          variants={boxVariants}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
    </Wrapper>
  );
};

export default AnimatePresenceComponent;
