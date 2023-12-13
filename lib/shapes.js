class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        // Example SVG for a triangle
        return `<svg width="100" height="100"><polygon points="50,15 100,100 0,100" fill="${this.color}" /></svg>`;
    }
}

class Circle extends Shape {
    render() {
        // Example SVG for a circle
        return `<svg width="100" height="100"><circle cx="50" cy="50" r="40" fill="${this.color}" /></svg>`;
    }
}

class Square extends Shape {
    render() {
        // Example SVG for a square
        return `<svg width="100" height="100"><rect width="100" height="100" fill="${this.color}" /></svg>`;
    }
}

class Rectangle extends Shape {
    render() {
        // Example SVG for a rectangle
        return `<svg width="120" height="80"><rect width="120" height="80" fill="${this.color}" /></svg>`;
    }
}

class Ellipse extends Shape {
    render() {
        // Example SVG for an ellipse
        return `<svg width="120" height="80"><ellipse cx="60" cy="40" rx="50" ry="30" fill="${this.color}" /></svg>`;
    }
}

class Heart extends Shape {
    render() {
        // Example SVG for a heart
        return `<svg width="100" height="100" viewBox="0 0 32 29.6">
                    <path d="M23.6,2.9c-2.9,0-5.5,1.5-7,3.8C15.1,4.4,12.5,2.9,9.6,2.9C4.3,2.9,0,7.2,0,12.5c0,3.4,1.7,7.1,5,10.4L16,29.6l11-6.7c3.3-3.3,5-7,5-10.4C32,7.2,27.7,2.9,23.6,2.9z" fill="${this.color}"/>
                </svg>`;
    }
}

module.exports = { Triangle, Circle, Square, Rectangle, Ellipse, Heart };
