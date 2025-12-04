// Filename: app/components/AnimateOnScroll.jsx
'use client';

import { useInView } from '../hooks/useInView';

const animations = {
  fadeUp: {
    hidden: 'opacity-0 translate-y-6',
    visible: 'opacity-100 translate-y-0',
  },
  fadeDown: {
    hidden: 'opacity-0 -translate-y-6',
    visible: 'opacity-100 translate-y-0',
  },
  fadeLeft: {
    hidden: 'opacity-0 -translate-x-6',
    visible: 'opacity-100 translate-x-0',
  },
  fadeRight: {
    hidden: 'opacity-0 translate-x-6',
    visible: 'opacity-100 translate-x-0',
  },
  fade: {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  scale: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
  scaleUp: {
    hidden: 'opacity-0 scale-95 translate-y-4',
    visible: 'opacity-100 scale-100 translate-y-0',
  },
};

export default function AnimateOnScroll({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.1,
  as: Component = 'div',
}) {
  const [ref, isInView] = useInView({ threshold, once: true });
  const anim = animations[animation] || animations.fadeUp;

  return (
    <Component 
      ref={ref} 
      className={`transition-all ease-out ${isInView ? anim.visible : anim.hidden} ${className}`}
      style={{ 
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`
      }}
    >
      {children}
    </Component>
  );
}

export function StaggerContainer({
  children,
  animation = 'fadeUp',
  staggerDelay = 0.1,
  duration = 0.6,
  className = '',
  threshold = 0.1,
  as: Component = 'div',
}) {
  const [ref, isInView] = useInView({ threshold, once: true });
  const anim = animations[animation] || animations.fadeUp;

  return (
    <Component ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => {
            if (!child) return null;
            return (
              <div 
                key={index} 
                className={`transition-all ease-out ${isInView ? anim.visible : anim.hidden}`}
                style={{ 
                  transitionDuration: `${duration}s`,
                  transitionDelay: `${index * staggerDelay}s`
                }}
              >
                {child}
              </div>
            );
          })
        : children}
    </Component>
  );
}
