import module1 from '../src/js/module1';

it('should work', function() {
  let x = 2;
  expect(1 < 2).toBe(true);
});

it('should hot reload', function() {
  expect(module1).toBe('module1 string 3');
});
