var _computedKey, _computedKey2, _initProto, _class;
const dec = () => {};
_computedKey = getKey();
_computedKey2 = getKey();
class Foo {
  constructor(...args) {
    _initProto(this);
  }
  [_computedKey]() {
    return 1;
  }
  [_computedKey2]() {
    return 2;
  }
}
_class = Foo;
[_initProto] = babelHelpers.applyDecs(_class, [[dec, 2, _computedKey], [dec, 2, _computedKey2]], []);
