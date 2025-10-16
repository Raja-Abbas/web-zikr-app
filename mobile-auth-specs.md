# My.Zikr Authentication Screens - Fixed Mobile Viewport

## 📱 **Artboard Specifications**

### **Primary Artboard (iOS)**
- **Size**: 390 x 844 px
- **Device**: iPhone 14/15 standard
- **Safe Area**: 24px margin (top, bottom, left, right)
- **Status Bar**: 44px height
- **Home Indicator**: 34px height

### **Secondary Artboard (Android)**
- **Size**: 360 x 800 px  
- **Device**: Standard Android
- **Safe Area**: 24px margin (top, bottom, left, right)
- **Status Bar**: 44px height
- **Navigation**: 34px height

## 🎨 **Design System**

### **Colors**
- **Primary**: #0A7A33 (Dark Green)
- **Background**: Linear gradient (135deg, #1e3a8a → #1e40af → #1d4ed8)
- **Text Primary**: #FFFFFF (White)
- **Text Secondary**: rgba(255,255,255,0.9)
- **Text Accent**: #F5F5DC (Beige)
- **Input Background**: rgba(255,255,255,0.1)
- **Button Background**: #FFFFFF (White)

### **Typography**
- **Font Family**: Inter, Roboto, -apple-system, BlinkMacSystemFont
- **Base Size**: 16px
- **Hierarchy**:
  - Arabic Logo: 48px, Amiri font
  - App Title: 32px, Bold (700)
  - Section Title: 24px, Semi-bold (600)
  - Body Text: 16px, Regular (400)
  - Labels: 12px, Semi-bold (600), Uppercase
  - Small Text: 14px, Regular (400)

### **Spacing**
- **Container Padding**: 24px
- **Element Spacing**: 16px
- **Form Spacing**: 20px
- **Button Height**: 56px minimum
- **Input Height**: 56px minimum

## 📋 **Screen Breakdown**

### **Screen 1: Initial Registration**
**Content**:
- Arabic logo (ذِكْر)
- App title (My.Zikr)
- Welcome message
- Registration heading
- Login link
- 3 authentication buttons (Google, Apple, Email)

**Layout**:
- Vertically centered content
- Logo section at top
- Auth buttons with icons
- No scrolling required

### **Screen 2: Email Form**
**Content**:
- Same header as Screen 1
- Registration heading
- 3 form fields (Name, Email, Password)
- Create Account button
- Back to options button

**Layout**:
- Form fields with labels
- Proper input styling
- Button hierarchy
- No scrolling required

### **Screen 3: Welcome Adnan**
**Content**:
- Same header structure
- Welcome message with name
- Instruction text
- 5 interest selection buttons
- Continue button (disabled initially)

**Layout**:
- Interest buttons in single column
- Selection state styling
- Truncated content if needed
- No scrolling required

## 🔧 **Technical Implementation**

### **Viewport Behavior**
```css
overflow: hidden;
position: fixed;
width: 390px; /* or 360px for Android */
height: 844px; /* or 800px for Android */
```

### **Content Scaling**
- Content scales down if exceeds viewport
- Text truncates with ellipsis if needed
- Buttons maintain minimum touch targets (44px)
- Images scale proportionally

### **Interactive Elements**
- **Touch Targets**: Minimum 44px x 44px
- **Button States**: Default, Hover, Active, Disabled
- **Form States**: Default, Focus, Error
- **Selection States**: Default, Selected

## 📦 **Deliverables**

### **Files Created**
1. `mobile-auth-screens.html` - Interactive preview
2. `auth-screen-assets.svg` - SVG icon library
3. `mobile-auth-specs.md` - This specification document

### **Export Requirements**
- **PNG 1x**: 390x844 and 360x800 versions
- **SVG Icons**: Individual icons extracted
- **Source File**: HTML with clean layer structure
- **Preview**: Mobile-centered view with no scrollbars

### **Asset Organization**
```
/assets/
  /icons/
    - google-icon.svg
    - apple-icon.svg
    - email-icon.svg
    - interest-icons.svg
  /screens/
    - auth-screen-1-390x844.png
    - auth-screen-2-390x844.png
    - auth-screen-3-390x844.png
    - auth-screen-1-360x800.png
    - auth-screen-2-360x800.png
    - auth-screen-3-360x800.png
```

## ✅ **Validation Checklist**

- [x] **Fixed viewport** - No scrolling enabled
- [x] **Safe area compliance** - 24px margins maintained
- [x] **Content scaling** - Fits within viewport bounds
- [x] **Typography hierarchy** - Clear visual hierarchy
- [x] **Color consistency** - Dark green (#0A7A33) + white theme
- [x] **Touch targets** - Minimum 44px interactive elements
- [x] **Responsive behavior** - Works on both artboard sizes
- [x] **Asset organization** - Clean layer structure
- [x] **Export ready** - PNG and SVG formats available

## 🎯 **Key Features**

### **No Scrolling Behavior**
- `overflow: hidden` on all containers
- Content fits within fixed viewport
- Truncation with ellipsis for overflow text
- Scaling for oversized elements

### **Mobile-First Design**
- Touch-friendly interface
- Proper spacing for mobile interaction
- Clear visual hierarchy
- Accessible color contrast

### **Consistent Branding**
- My.Zikr logo and Arabic text
- Islamic color scheme
- Professional authentication flow
- Brand-consistent iconography

---

**No scrolling — fixed viewport only.**
