const PubSub = require('../helpers/pub_sub.js');

const ClickView = function (elements){
  this.elements = elements;
}

ClickView.prototype.bindEvents = function () {
  console.log("bindEvents");
  const callback = function (event)
  {
    console.log(event.target);

  } ;

  for (let element of this.elements){
    element.addEventListener('click', callback);

    console.log(element);
  }
};

module.exports = ClickView;
