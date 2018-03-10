/**
 * Set your postcss-loader configuration here
 * Inspired by https://github.com/sebastian-software/edge-postcss/blob/master/postcss.config.js
 */

module.exports = {
  plugins: {
    // ====================================================
    // ================= URLS/ASSETS ======================
    // ====================================================

    // Asset Manager for PostCSS. For us mainly interesting
    // for resolving URLs in LESS files.
    // https://github.com/borodean/postcss-assets
    // 'postcss-assets': {},

    // ====================================================
    // ================= NORMALIZE ========================
    // ====================================================

    // Add normalize.css as needed - automatically - and optimized for the defined browserslist.
    // https://github.com/jonathantneal/postcss-normalize
    'postcss-normalize': {},

    // ====================================================
    // ================== EFFECTS =========================
    // ====================================================

    // Insert 3D hack before will-change property
    // https://github.com/postcss/postcss-will-change
    'postcss-will-change': {},

    // Fallback for Webkit Filters property to SVG filters. Amazing stuff.
    // It converts all 10 CSS shorthand filters:
    // grayscale, sepia, saturate, hue-rotate, invert, opacity, brightness, contrast, blur, drop-shadow
    // https://github.com/iamvdo/pleeease-filters
    'pleeease-filters': {},

    // ====================================================
    // ================= EXTENSIONS =======================
    // ====================================================

    // A little bag of CSS superpowers, built on PostCSS https://simplaio.github.io/rucksack
    // Might be useful in future (e.g. responsive text or input styling)
    // https://github.com/simplaio/rucksack
    // 'rucksack-css': {},

    // ====================================================
    // ================== FIXES ===========================
    // ====================================================

    // Fix up CSS gradients with transparency for older browsers
    // https://github.com/gilmoreorless/postcss-gradient-transparency-fix
    'postcss-gradient-transparency-fix': {},

    // Tries to fix all of flexbug's issues
    // https://github.com/luisrudge/postcss-flexbugs-fixes
    'postcss-flexbugs-fixes': {},

    // Add single and double colon peudo selectors
    // Normalizes e.g. `::before` to `:before` for wider browser support
    // https://github.com/axa-ch/postcss-pseudoelements
    'postcss-pseudoelements': {},

    // Parse CSS and add vendor prefixes to rules by Can I Use
    // https://github.com/postcss/autoprefixer
    autoprefixer: {},

    // ====================================================
    // ================ OPTIMIZATION ======================
    // ====================================================

    // Reduce z-index values.
    // https://github.com/ben-eb/postcss-zindex
    'postcss-zindex': {},

    // Adding the best CSS compressor to the chain (CleanCSS).
    // https://github.com/leodido/postcss-clean
    // 'postcss-clean': {}
    'postcss-clean': {
      advanced: true
    }
  }
}
