# 🏍️ Modern Contact Form with Glassmorphism Design

A beautiful, responsive contact form built with HTML, CSS, and JavaScript featuring glassmorphism design, real-time validation, and creative split-screen layout.

![Contact Form Preview](https://images.unsplash.com/photo-1750658659691-1f7b2bd37337?q=80&w=800&auto=format&fit=crop)

## 📋 Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Key Learnings](#key-learnings)
- [Usage](#usage)
- [Validation Rules](#validation-rules)

## ✨ Features

### 🎨 Design Features
- **Glassmorphism UI** - Modern frosted glass effect with backdrop filters
- **Split-screen Layout** - Creative content on left, contact form on right
- **Dynamic Background** - High-quality Unsplash motorcycle night scene
- **Animated Elements** - Floating shapes and gradient text animations
- **Interactive Features** - Hover effects and smooth transitions

### 🔧 Functional Features
- **Real-time Validation** - Instant feedback as users type
- **Error Display** - Clear error messages below each input field
- **Success Feedback** - Confirmation message after successful submission
- **Character Counter** - Live character count for message field (500 max)
- **Form Reset** - Automatic form clearing after successful submission

### 📱 Responsive Features
- **Mobile-first Design** - Optimized for all screen sizes
- **Adaptive Layout** - Stacks vertically on mobile devices
- **Touch-friendly** - Appropriate sizing for mobile interactions

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and form structure
- **CSS3** - Modern styling with advanced features:
  - Flexbox for layout
  - CSS Grid for responsive design
  - Backdrop filters for glassmorphism
  - CSS animations and keyframes
  - Custom properties and gradients
- **JavaScript (ES6+)** - Form validation and interaction:
  - Event listeners for real-time validation
  - DOM manipulation for error display
  - Regular expressions for input validation
  - Async form handling

## 📚 Key Learnings

### CSS Advanced Techniques
- **Backdrop Filters**: `backdrop-filter: blur()` for glassmorphism effect
- **CSS Animations**: Keyframe animations for floating elements
- **Gradient Animations**: Animated background gradients on text
- **Flexbox Mastery**: Complex layouts with flexible containers
- **CSS Custom Properties**: Better maintainability and theming

### JavaScript Form Validation
- **Real-time Validation**: Event-driven validation feedback
- **Regular Expressions**: Pattern matching for email and name validation
- **DOM Manipulation**: Dynamic error message display
- **Event Handling**: Multiple event listeners for better UX
- **Error State Management**: Visual feedback through CSS classes

## 📖 Usage

### Form Fields
- **Full Name**: Required, minimum 2 characters, letters and spaces only
- **Email**: Required, valid email format
- **Message**: Required, 10-500 characters

### Validation Behavior
- **On Blur**: Validation triggers when leaving a field
- **Real-time**: Continuous validation after first interaction
- **Visual Feedback**: Green for valid, red for invalid fields
- **Error Messages**: Specific guidance for each validation rule

#### JavaScript Features
- Modular validation functions
- Event-driven architecture
- Error state management
- Form submission handling

## ✅ Validation Rules

### Name Field
- ✅ Required field
- ✅ Minimum 2 characters
- ✅ Letters and spaces only
- ❌ Numbers or special characters

### Email Field
- ✅ Required field
- ✅ Valid email format (user@domain.com)
- ❌ Invalid email patterns

### Message Field
- ✅ Required field
- ✅ 10-500 character range
- ✅ Character counter display
- ❌ Empty or too short/long messages
