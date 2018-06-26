const PubSub = require('../helpers/pub_sub');

const ResultView = function(container){
this.container = container;
}


ResultView.prototype.bindEvents = function () {
PubSub.subscribe('SolarSystem:outputPlant',(event)=>{
  const result = event.detail;
  this.displayResult(result);
});
};


ResultView.prototype.displayResult = function (result) {
  this.container.innerHTML = '';
  for (let item in result){
    const element = document.createElement('p');
    this.container.appendChild(element);
    element.textContent = `${item}: ${result[item]}`;
  }

};

module.exports = ResultView;
