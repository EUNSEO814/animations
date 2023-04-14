import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const boxVariants: Variants = {
//   hover: { scale: 1.5, rotateZ: 90 },
//   click: { scale: 1, borderRadius: "100px" },
//   drag: { backgroundColor: "rgb(0, 0, 0)", transition: { duration: 10 } },
// };
const boxVariants: Variants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: "100px" },
};

const GesturesComponents = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    // <Box
    //   whileHover={{ scale: 1.5, rotateZ: 90 }}
    //   whileTap={{ scale: 1, borderRadius: "100px" }}
    // />
    // <Box
    //   drag
    //   variants={boxVariants}
    //   whileHover="hover"
    //   whileTap="click"
    //   whileDrag="drag"
    // />

    // drag="x" or drag="y" 단방향 지정 가능
    // <Box
    //   drag
    //   dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }}
    //   variants={boxVariants}
    //   whileHover="hover"
    //   whileTap="click"
    //   whileDrag="drag"
    // />
    <BiggerBox ref={biggerBoxRef}>
      <Box
        drag
        dragSnapToOrigin
        dragElastic={0.5}
        dragConstraints={biggerBoxRef}
        variants={boxVariants}
        whileHover="hover"
        whileTap="click"
        whileDrag="drag"
      />
    </BiggerBox>
  );
};

export default GesturesComponents;
