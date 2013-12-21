/*!
 * circuitbox
 * Copyright(c) 2013 Ranganath Kini <oddjobsman@ranganathkini.com>
 * MIT Licensed
 */

(function () {
  'use strict';

  var context = describe;
  var expect = require('expect.js');

  var Kernel = require('../lib/kernel');
  var ComponentRegistry = require('../lib/componentRegistry');

  describe('Kernel', function () {

    context('when created', function () {
      var kernel = new Kernel();

      it('should be empty', function () {
        expect(kernel.hasComponents).to.be(false);
      });

      it('should provide access to its component registry', function () {
        expect(kernel.registry).to.be.a(ComponentRegistry);
      });

    });

    context('when created without a name', function () {
      var kernel = new Kernel();

      it('should not have a name', function () {
        expect(kernel.name).not.to.be.ok();
      });

    });

    context('when created with a name', function () {
      var kernel =  new Kernel({name: 'test'});

      it('should have the specified name', function () {
        expect(kernel.name).to.be('test');
      });

    });
  });
})();