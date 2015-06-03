var _ = require('lodash'),
    $ = require('jquery'),
    render = require('tests/lib/render-component.js'),
    stubLoadChild = require('tests/setup/stub-load-child.js'),
    originalFixture = require('../fixture.js');

describe('ComponentPlayground (selected fixture)', function() {
  var component,
      $component,
      container,
      fixture;

  // Child components are outside the scope
  stubLoadChild();

  beforeEach(function() {
    ({fixture, container, component, $component} = render(originalFixture));
  });

  describe('Render (DOM)', function() {
    it('should not render cosmos plug', function() {
      expect(component.refs.cosmosPlug).to.not.exist;
    });

    it('should add container class on preview element', function() {
      var $previewDOMNode = $(component.refs.previewContainer.getDOMNode());

      expect($previewDOMNode.hasClass(fixture.containerClassName)).to.be.true;
    });

    it('should add extra class to selected component', function() {
      var $expandedComponent = $component.find('.component.expanded');

      expect($expandedComponent.length).to.equal(1);
      expect($expandedComponent.find('.component-name').text())
            .to.equal('FirstComponent');
    });

    it('should add extra class to selected fixture', function() {
      var $fixture = $component.find('.component-fixture.selected');

      expect($fixture.length).to.equal(1);
      expect($fixture.text()).to.equal('default');
    });

    it('should render full screen button', function() {
      expect(component.refs.fullScreenButton).to.exist;
    });

    it('should render fixture editor button', function() {
      expect(component.refs.editorButton).to.exist;
    });
  });
});
