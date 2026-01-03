import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

// Export everything for easy access
export { gsap, useGSAP, ScrollTrigger, ScrollToPlugin, TextPlugin };
export default gsap;
