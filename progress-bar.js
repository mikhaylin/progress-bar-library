/**
 * Progress Bar Library - JavaScript Helper
 * Optional module for easier progress control
 */

const ProgressBar = {
    /**
     * Set progress value for an element
     * @param {string|HTMLElement} element - CSS selector or DOM element
     * @param {number} value - Progress value (0 to 100)
     */
    setProgress(element, value) {
        const el = typeof element === 'string' 
            ? document.querySelector(element)
            : element;
        
        if (!el) {
            console.warn('ProgressBar: Element not found', element);
            return;
        }
        
        if (value < 0) value = 0;
        if (value > 100) value = 100;
        
        el.style.setProperty('--pb-progress', `${value}%`);
        return el;
    },
    
    /**
     * Animate progress from current value to target
     * @param {string|HTMLElement} element - CSS selector or DOM element
     * @param {number} targetValue - Target progress value (0 to 100)
     * @param {number} duration - Animation duration in milliseconds
     */
    animateTo(element, targetValue, duration = 1000) {
        const el = typeof element === 'string' 
            ? document.querySelector(element)
            : element;
        
        if (!el) {
            console.warn('ProgressBar: Element not found', element);
            return;
        }
        
        const currentValue = this.getProgress(el);
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeProgress = progress < 0.5 
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            
            const current = currentValue + (targetValue - currentValue) * easeProgress;
            this.setProgress(el, current);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    },
    
    /**
     * Get current progress value
     * @param {string|HTMLElement} element - CSS selector or DOM element
     * @returns {number} Current progress value
     */
    getProgress(element) {
        const el = typeof element === 'string' 
            ? document.querySelector(element)
            : element;
        
        if (!el) return 0;
        
        const value = getComputedStyle(el).getPropertyValue('--pb-progress');
        return parseFloat(value) || 0;
    },
    
    /**
     * Initialize simulation for demo purposes
     * @param {string|HTMLElement} element - CSS selector or DOM element
     * @param {number} interval - Update interval in milliseconds
     */
    simulateLoading(element, interval = 100) {
        const el = typeof element === 'string' 
            ? document.querySelector(element)
            : element;
        
        if (!el) return;
        
        let progress = 0;
        this.setProgress(el, 0);
        
        const intervalId = setInterval(() => {
            progress += Math.random() * 5;
            if (progress >= 100) {
                progress = 100;
                clearInterval(intervalId);
            }
            this.setProgress(el, progress);
        }, interval);
        
        return intervalId;
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.ProgressBar = ProgressBar;
}

// ES6 module export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProgressBar;
}