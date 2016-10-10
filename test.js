function x () {
  this.x = 'string';
  console.log('x: ', x);
  console.log('this: ', this);
}

x();
