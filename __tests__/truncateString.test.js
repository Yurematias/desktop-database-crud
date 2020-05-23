import truncateString from '../src/vue/utils/truncateString';

test('test of truncateString function', () => {
    expect(truncateString('Yure Matias', 4)).toBe('Yure');
    expect(truncateString('Luffy', 1)).toBe('L');
    expect(truncateString('Roronoa Zoro', 6)).toBe('Rorono');
});