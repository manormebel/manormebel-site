/**
 * Manor Mebel - Security & Performance Fixes
 * DOM Utilities untuk menghindari XSS dan improve performance
 */

// Safe DOM manipulation utilities
const DOMUtils = {
    /**
     * Safely create HTML elements from string or with attributes
     * @param {string|Object} content - HTML string or element attributes
     * @param {string} tagName - Tag name for the container
     * @returns {HTMLElement} Safe DOM element
     */
    createSafeElement(content, tagName = 'div') {
        const temp = document.createElement(tagName);
        
        if (typeof content === 'string') {
            // If content is HTML string, use safeSetHTML
            this.safeSetHTML(temp, content);
        } else if (typeof content === 'object' && content !== null) {
            // If content is object with attributes
            if (content.className) temp.className = content.className;
            if (content.innerHTML) this.safeSetHTML(temp, content.innerHTML);
            if (content.id) temp.id = content.id;
            // Add other safe attributes as needed
        }
        
        return temp;
    },

    /**
     * Safely set innerHTML with sanitization
     * @param {HTMLElement} element - Target element
     * @param {string} html - HTML content
     */
    safeSetHTML(element, html) {
        if (!element || typeof html !== 'string') return;
        
        // Remove script tags and dangerous attributes
        const sanitized = html
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '') // Remove event handlers
            .replace(/javascript:/gi, '') // Remove javascript: protocols
            .replace(/data:text\/html/gi, ''); // Remove data URLs
        
        element.innerHTML = sanitized;
    },

    /**
     * Create product card element safely
     * @param {Object} product - Product data
     * @returns {HTMLElement} Safe product card element
     */
    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card bg-white dark:bg-stone-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer';
        card.dataset.productId = product.id;
        
        // Safe image handling
        const safeImage = this.escapeHtml(product.image || './images/logo/logo.png');
        const safeName = this.escapeHtml(product.name || 'Produk Tidak Dikenal');
        const safeCategory = this.escapeHtml(product.category || 'Lainnya');
        
        card.innerHTML = `
            <div class="relative overflow-hidden h-48 bg-stone-100 dark:bg-stone-700">
                <img src="${safeImage}" 
                     alt="${safeName}" 
                     class="product-img h-full w-full object-cover object-center transition-transform hover:scale-105"
                     loading="lazy"
                     decoding="async"
                     onerror="this.onerror=null; this.src='./images/logo/logo.png';"
                     width="400" 
                     height="300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
            <div class="p-4">
                <h3 class="font-semibold text-stone-900 dark:text-stone-100 mb-2 line-clamp-2" title="${safeName}">${safeName}</h3>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-stone-600 dark:text-stone-400 bg-stone-100 dark:bg-stone-700 px-2 py-1 rounded-full">${safeCategory}</span>
                    <button class="cart-btn bg-wood-dark hover:bg-wood-medium text-white p-2 rounded-full transition-colors" 
                            data-product-id="${product.id}"
                            aria-label="Tambah ke keranjang">
                        <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        `;
        
        return card;
    },

    /**
     * Escape HTML entities to prevent XSS
     * @param {string} text - Text to escape
     * @returns {string} Escaped text
     */
    escapeHtml(text) {
        if (typeof text !== 'string') return '';
        
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;',
            '/': '&#x2F;'
        };
        
        return text.replace(/[&<>"'\/]/g, (s) => map[s]);
    },

    /**
     * Safe event delegation setup
     * @param {HTMLElement} container - Container element
     * @param {string} selector - Event target selector
     * @param {string} event - Event type
     * @param {Function} handler - Event handler
     */
    delegateEvent(container, selector, event, handler) {
        if (!container) return;
        
        container.addEventListener(event, (e) => {
            const target = e.target.closest(selector);
            if (target && container.contains(target)) {
                handler.call(target, e);
            }
        });
    }
};

// Performance utilities
const PerformanceUtils = {
    /**
     * Debounce function untuk mengurangi frequency of function calls
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in milliseconds
     * @returns {Function} Debounced function
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Throttle function untuk membatasi execution rate
     * @param {Function} func - Function to throttle
     * @param {number} limit - Time limit in milliseconds
     * @returns {Function} Throttled function
     */
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Lazy load images with Intersection Observer
     * @param {string} selector - Image selector
     */
    lazyLoadImages(selector = 'img[loading="lazy"]') {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('opacity-0');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll(selector).forEach(img => {
                img.classList.add('opacity-0', 'transition-opacity', 'duration-300');
                imageObserver.observe(img);
            });
        }
    },

    /**
     * Preload critical images
     * @param {Array<string>} imageUrls - Array of image URLs to preload
     */
    preloadImages(imageUrls) {
        imageUrls.forEach(url => {
            if (url) {
                const img = new Image();
                img.src = url;
                img.decoding = 'async';
            }
        });
    }
};

// Safe event handling
const EventManager = {
    /**
     * Initialize all safe event listeners
     */
    init() {
        // Product card clicks
        DOMUtils.delegateEvent(document, '.product-card', 'click', function(e) {
            if (!e.target.closest('.cart-btn')) {
                const productId = this.dataset.productId;
                if (productId) {
                    window.location.href = `product.html?id=${productId}`;
                }
            }
        });

        // Cart button clicks
        DOMUtils.delegateEvent(document, '.cart-btn', 'click', function(e) {
            e.stopPropagation();
            const productId = this.dataset.productId;
            console.log('Add to cart:', productId);
            // Add to cart logic here
        });

        // Filter buttons
        DOMUtils.delegateEvent(document, '[data-action="filter"]', 'click', function(e) {
            e.preventDefault();
            const category = this.dataset.category;
            if (category && window.filterProducts) {
                window.filterProducts(category);
            }
        });

        // Search functionality
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            const debouncedSearch = PerformanceUtils.debounce((value) => {
                if (window.searchProducts) {
                    window.searchProducts(value);
                }
            }, 300);

            searchInput.addEventListener('input', (e) => {
                debouncedSearch(e.target.value);
            });
        }

        // Pagination
        DOMUtils.delegateEvent(document, '[data-action="paginate"]', 'click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            if (page && window.changePage) {
                window.changePage(parseInt(page));
            }
        });
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        EventManager.init();
        PerformanceUtils.lazyLoadImages();
    });
} else {
    EventManager.init();
    PerformanceUtils.lazyLoadImages();
}

// Export for global use
window.DOMUtils = DOMUtils;
window.PerformanceUtils = PerformanceUtils;
window.EventManager = EventManager;