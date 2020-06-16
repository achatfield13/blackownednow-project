import { RemoveTrailingCharacterPipe } from './remove-whitespace.pipe';

describe('RemoveWhitespacePipe', () => {
  it('create an instance', () => {
    const pipe = new RemoveTrailingCharacterPipe();
    expect(pipe).toBeTruthy();
  });
});
