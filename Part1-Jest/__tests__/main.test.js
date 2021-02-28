const formatVolumeIconPath = require('../assets/scripts/main');

describe('testingVolumeIconPath', () => {
    test('is greaterThan66', () => {
        expect(formatVolumeIconPath(67)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });

    test('is greaterThan33', () => {
        expect(formatVolumeIconPath(34)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });

    test('is lessThanEqualTo66', () => {
        expect(formatVolumeIconPath(66)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });

    test('is greaterThan0', () => {
        expect(formatVolumeIconPath(1)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });

    test('is lessThanEqualTo33', () => {
        expect(formatVolumeIconPath(33)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });

    test('is anythingElse', () => {
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });


});