const { Triangle, Circle, Square, Rectangle, Ellipse, Heart } = require('./shapes');

describe('Shape class tests', () => {
    test('Triangle class renders correct SVG', () => {
        const triangle = new Triangle('red');
        expect(triangle.render()).toBe(`<svg width="100" height="100"><polygon points="50,15 100,100 0,100" fill="red" /></svg>`);
    });

    test('Circle class renders correct SVG', () => {
        const circle = new Circle('blue');
        expect(circle.render()).toBe(`<svg width="100" height="100"><circle cx="50" cy="50" r="40" fill="blue" /></svg>`);
    });

    test('Square class renders correct SVG', () => {
        const square = new Square('green');
        expect(square.render()).toBe(`<svg width="100" height="100"><rect width="100" height="100" fill="green" /></svg>`);
    });

    test('Rectangle class renders correct SVG', () => {
        const rectangle = new Rectangle('yellow');
        expect(rectangle.render()).toBe(`<svg width="120" height="80"><rect width="120" height="80" fill="yellow" /></svg>`);
    });

    test('Ellipse class renders correct SVG', () => {
        const ellipse = new Ellipse('purple');
        expect(ellipse.render()).toBe(`<svg width="120" height="80"><ellipse cx="60" cy="40" rx="50" ry="30" fill="purple" /></svg>`);
    });

    test('Heart class renders correct SVG', () => {
        const heart = new Heart('pink');
        expect(heart.render()).toBe(`<svg width="100" height="100" viewBox="0 0 32 29.6"><path d="M23.6,2.9c-2.9,0-5.5,1.5-7,3.8C15.1,4.4,12.5,2.9,9.6,2.9C4.3,2.9,0,7.2,0,12.5c0,3.4,1.7,7.1,5,10.4L16,29.6l11-6.7c3.3-3.3,5-7,5-10.4C32,7.2,27.7,2.9,23.6,2.9z" fill="pink"/></svg>`);
    });
});
