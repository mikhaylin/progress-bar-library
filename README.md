# Progress Bar Library

A pure CSS library for creating customizable progress bars.

## Features

- Pure CSS, no JavaScript required for basic functionality
- Easy to customize with CSS variables
- Responsive design
- 3 built-in themes: blue, green, dark
- Size modifiers: small, default, large
- Striped pattern modifier
- Uses CSS pseudo-elements (clean HTML)

## Installation

Simply include the CSS file in your project:

```html
<link rel="stylesheet" href="progress-bar.css">
```

## Basic Usage

```html
<!-- Basic progress bar -->
<div class="progress-bar" style="--pb-progress: 50%;"></div>

<!-- With theme -->
<div class="progress-bar theme-blue" style="--pb-progress: 75%;"></div>

<!-- With size modifier -->
<div class="progress-bar size-small" style="--pb-progress: 60%;"></div>

<!-- With striped pattern -->
<div class="progress-bar striped" style="--pb-progress: 80%;"></div>

<!-- Multiple modifiers -->
<div class="progress-bar theme-green size-large striped" style="--pb-progress: 90%;"></div>
```

## CSS Variables

- `--pb-progress`: Progress value (0% to 100%)
- `--pb-color`: Fill color
- `--pb-background`: Background color

## Project Structure

- `progress-bar.css` - Main CSS file
- `example.html` - Demo and usage examples
- `README.md` - Documentation

## JavaScript Helper (Optional)

Include the JavaScript file for easier control:

```html
<script src="progress-bar.js"></script>
```

Basic usage:

```html
// Set progress to 75%
ProgressBar.setProgress('#my-progress', 75);

// Animate to 100% over 1.5 seconds
ProgressBar.animateTo('#my-progress', 100, 1500);

// Get current progress
const current = ProgressBar.getProgress('#my-progress');

// Simulate loading (for demos)
ProgressBar.simulateLoading('#my-progress');
```

## License

MIT License