var FIXTURE = 'default';
var style = require('components/component-playground.less');

describe(`ComponentPlayground (${FIXTURE}) Render DOM`, function() {
  var $ = require('jquery'),
      render = require('tests/lib/render-component.js'),
      fixture = require(`fixtures/component-playground/${FIXTURE}.js`);

  var component,
      $component,
      container,
      fixture;

  beforeEach(function() {
    ({container, component, $component} = render(fixture));
  });

  it('should render component names', function() {
    for (var componentName in fixture.components) {
      var nameElement = component.refs['componentName-' + componentName];

      expect($(nameElement.getDOMNode()).text()).to.equal(componentName);
    }
  });

  it('should render fixture buttons', function() {
    for (var componentName in fixture.components) {
      var fixtures = fixture.components[componentName].fixtures;

      for (var fixtureName in fixtures) {
        expect(component.refs[
            'fixtureButton-' + componentName + '-' + fixtureName]).to.exist;
      }
    }
  });

  it('should render fixture names', function() {
    for (var componentName in fixture.components) {
      var componentFixtures = fixture.components[componentName].fixtures;

      for (var fixtureName in componentFixtures) {
        var fixtureButton = component.refs[
            'fixtureButton-' + componentName + '-' + fixtureName];

        expect($(fixtureButton.getDOMNode()).text()).to.equal(fixtureName);
      }
    }
  });

  it('should not have full-screen class', function() {
    expect($component.hasClass(style['full-screen'])).to.equal(false);
  });

  it('should not render full screen button', function() {
    expect(component.refs.fullScreenButton).to.not.exist;
  });

  it('should not render fixture editor button', function() {
    expect(component.refs.editorButton).to.not.exist;
  });

  it('should not render fixture editor', function() {
    expect(component.refs.editor).to.not.exist;
  });

  it('should add selected class on home button', function() {
    expect($(component.refs.homeButton.getDOMNode())
           .hasClass(style['selected-button'])).to.be.true;
  });
});
