class A {
    constructor() {
      this.customText = 'text';
    }
    
    get customTextValue() {
      return this.customText;
    }
    
    set customTextValue(value) {
      this.customText = value;
    }
  
    method(text) {
      return `---A ${text} A---`;
    }
  }
  
  class B extends A {
    method(text) {
      console.log('---B', super.method('text'), 'B---');
    }
  }
  
  const object = new B();
  
  console.log('-----------------------------------');
  object.method('test string');
  
  console.log('object', object);
  
  console.log('object.customTextValue()', object.customTextValue);
  object.customTextValue = 'new custom text';
  console.log('object.customTextValue()', object.customTextValue);
  console.log('-----------------------------------');

  console.log('object', object);
