const sluger = require("../index");

describe("Sluger", () => {
    // Test if sluger is a function
    test("it should be a function", () => {
        expect(typeof sluger).toBe("function");
    });

    // Test if sluger returns a string
    test("it should return a string", () => {
        expect(typeof sluger("Hello World")).toBe("string");
    });

    // Test if sluger returns a slug
    test("it should return a slug", () => {
        expect(sluger("Hello World")).toBe("hello-world");
    });

    // Test if sluger returns a slug from a string with diacritics
    test("it should return a slug from a string with diacritics", () => {
        expect(sluger("Hello World ããã")).toBe("hello-world-aaa");
    });

    // Test if sluger returns a slug from a string with special characters
    test("it should return a slug from a string with special characters", () => {
        expect(sluger("Hello World @@@")).toBe("hello-world");
    });

    // Test if sluger returns a slug from a string with consecutive dashes
    test("it should return a slug from a string with consecutive dashes", () => {
        expect(sluger("Hello World ---")).toBe("hello-world");
    });

    // Test if sluger returns a slug from a string with dashes at the beginning or end
    test("it should return a slug from a string with dashes at the beginning or end", () => {
        expect(sluger("-Hello World-")).toBe("hello-world");
    });

    // Test if sluger returns a slug from a string with spaces
    test("it should return a slug from a string with spaces", () => {
        expect(sluger("Hello     World")).toBe("hello-world");
    });

    // Test if sluger returns a slug from a string with uppercase letters
    test("it should return a slug from a string with uppercase letters", () => {
        expect(sluger("Hello World")).toBe("hello-world");
    });

    // Test if sluger returns a slug from a string with numbers
    test("it should return a slug from a string with numbers", () => {
        expect(sluger("Hello World 123")).toBe("hello-world-123");
    });
});
