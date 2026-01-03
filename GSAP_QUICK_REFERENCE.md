# GSAP Setup & Quick Reference

GSAP (GreenSock Animation Platform) is installed and configured for this project.

## Installation Details
- **Core Package**: `gsap`
- **React Wrapper**: `@gsap/react` (Recommended for React projects)
- **Registered Plugins**: ScrollTrigger, ScrollToPlugin, TextPlugin

## How to Use GSAP in this Project

Import from our central utility:
```javascript
import { gsap, useGSAP, ScrollTrigger } from '../utils/gsap';
```

### Basic Example
```javascript
const MyComponent = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.to(".box", { x: 100, rotation: 360, duration: 1 });
  }, { scope: container }); // scoping makes it cleaner

  return (
    <div ref={container}>
      <div className="box">Animate Me</div>
    </div>
  );
};
```

### ScrollTrigger Example
```javascript
useGSAP(() => {
  gsap.from(".header", {
    scrollTrigger: {
      trigger: ".header",
      start: "top center",
      scrub: true
    },
    y: -50,
    opacity: 0
  });
}, { scope: container });
```

### Demo Page
You can view a live demo at: `http://localhost:5173/gsap-test` (assuming standard Vite port)
