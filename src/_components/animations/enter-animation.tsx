'use client';
import { motion } from 'framer-motion';
import { FunctionComponent, ReactNode } from 'react';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface Props {
  children: ReactNode;
}

const EnterAnimation: FunctionComponent<Props> = ({ children }) => {
  return (
    <motion.div
      className='motion-reduce:transition-none'
      initial={'closed'}
      whileInView={'open'}
      variants={variants}
      viewport={{ once: true, margin: '0px 0px -20% 0px' }}
    >
      {children}
    </motion.div>
  );
};

export default EnterAnimation;
