
import {Draft} from './draft';


describe('Draft', () => {
  it('method1 should return 0', () => {
    var draft = new Draft();
    expect(draft.method1()).toEqual(0);
  });
});
