/*!
 * circuitbox
 * Copyright(c) 2013 Ranganath Kini <oddjobsman@ranganathkini.com>
 * MIT Licensed
 */

'use strict';

var _ = require('lodash');
var SimpleComponentDefinitionBuilder = require('./simpleComponentDefinitionBuilder');
var ModuleBasedComponentDefinitionBuilder = require('./moduleBasedComponentDefinitionBuilder');

var builderMap = {
  'use': SimpleComponentDefinitionBuilder,
  'requires': ModuleBasedComponentDefinitionBuilder
};

function ComponentDefinitionBuilderFactory(componentList, componentName) {
  /*jshint newcap: false*/
  _(builderMap).each(function (builderCtor, method) {
    this[method] = function (object) {
      var result = new builderCtor(componentName, object);
      componentList.push(result);
      return result;
    };
  }, this);

}

ComponentDefinitionBuilderFactory.registerBuilder = function registerBuilder(method, builder) {
  builderMap[method] = builder;
};

module.exports = ComponentDefinitionBuilderFactory;