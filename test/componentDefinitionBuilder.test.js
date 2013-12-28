/*!
 * circuitbox
 * Copyright(c) 2013 Ranganath Kini <oddjobsman@ranganathkini.com>
 * MIT Licensed
 */

'use strict';

var context = describe;
var expect = require('expect.js');

var Scopes = require('../lib/scopes');
var ComponentDefinition = require('../lib/componentDefinition');
var ComponentDefinitionBuilder = require('../lib/componentDefinitionBuilder');

describe('ComponentDefinitionBuilder', function () {

  context('when created with a name, scope, initializer and dependencies', function () {

    it('should create a ComponentDefinition with the specified name, initializer and dependencies', function () {
      var initializer = function () {};
      var dependencies = ['a', 'b'];

      var definition = new ComponentDefinitionBuilder('myComponent')
          .initializeWith(initializer)
          .dependsOn(dependencies)
          .scope(Scopes.singleton)
          .build();

      expect(definition).to.be.a(ComponentDefinition);
      expect(definition.name).to.be('myComponent');
      expect(definition.scope).to.be(Scopes.singleton);
      expect(definition.initializer).to.be(initializer);
      expect(definition.dependencies).to.be(dependencies);

    });

  });

});