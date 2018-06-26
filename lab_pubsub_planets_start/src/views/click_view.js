const PubSub = require('../helpers/pub_sub.js');

const ClickView = function (elements){
  this.elements = elements;
}

ClickView.prototype.bindEvents = function () {
  console.log("bindEvents");
  const callback = function (event)
  {
    const planet = event.target.id;
    PubSub.publish('ClickView:ClickPlanet', planet);
  } ;

  for (let element of this.elements){
    element.addEventListener('click', callback);

  }
};

module.exports = ClickView;
