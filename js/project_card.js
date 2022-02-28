'use strict';

const e = React.createElement;

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

class RootComponent extends React.Component {
  render() {
    return <div>
      <MyComponent />
    </div>;
  }
}

class MyComponent extends React.Component {
  render() {
    return (<div>This is a simple component</div>);
  }
}

const domContainer1 = document.querySelector('#injected-react-content');
ReactDOM.render(e(RootComponent), domContainer1);





const domContainer = document.querySelector('#project_card_container');
ReactDOM.render(e(ProjectCard), domContainer);
