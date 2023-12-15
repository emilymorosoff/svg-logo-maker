const { Triangle, Circle, Square, Rectangle, Ellipse, Heart } = require('./shapes');

describe('Shape class tests', () => {
    test('Triangle should render correctly', () => {
        const triangle = new Triangle('red');
        const expected = '<polygon points="150,30 300,200 0,200" fill="red" />';
        expect(triangle.render()).toBe(expected);
    });

    test('Circle should render correctly', () => {
        const circle = new Circle('blue');
        const expected = '<circle cx="150" cy="100" r="80" fill="blue" />';
        expect(circle.render()).toBe(expected);
    });

    test('Square should render correctly', () => {
        const square = new Square('green');
        const expected = '<rect width="200" height="200" fill="green" />';
        expect(square.render()).toBe(expected);
    });

    test('Rectangle should render correctly', () => {
        const rectangle = new Rectangle('yellow');
        const expected = '<rect width="300" height="200" fill="yellow" />';
        expect(rectangle.render()).toBe(expected);
    });

    test('Ellipse should render correctly', () => {
        const ellipse = new Ellipse('purple');
        const expected = '<ellipse cx="150" cy="100" rx="100" ry="60" fill="purple" />';
        expect(ellipse.render()).toBe(expected);
    });

    test('Heart should render correctly', () => {
        const heart = new Heart('pink');
        const actualOutput = heart.render().replace(/\s+/g, ' '); 
        const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.6 49" fill="pink"> <path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z" /> </svg>`;
        expect(actualOutput).toBe(expectedOutput);    
    });
});
