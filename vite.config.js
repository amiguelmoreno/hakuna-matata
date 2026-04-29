import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Converts render-blocking <link rel="stylesheet"> into non-blocking preload.
// The onload switches it to a real stylesheet once the browser is idle,
// eliminating the render-blocking penalty reported by Lighthouse/PageSpeed.
function nonBlockingCssPlugin() {
    return {
        name: 'non-blocking-css',
        enforce: 'post',
        transformIndexHtml(html) {
            return html.replace(
                /<link rel="stylesheet"([^>]*?)href="([^"]+\.css)"([^>]*)>/g,
                (_, pre, href, post) =>
                    `<link rel="preload" as="style"${pre}href="${href}"${post} onload="this.onload=null;this.rel='stylesheet'">` +
                    `<noscript><link rel="stylesheet"${pre}href="${href}"${post}></noscript>`
            )
        },
    }
}

export default defineConfig({
    plugins: [react(), nonBlockingCssPlugin()],
})
