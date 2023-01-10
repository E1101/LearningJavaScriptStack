/*
  eslint-disable react/prefer-stateless-function, react/jsx-boolean-value,
  no-undef, jsx-a11y/label-has-for
*/
class TimersDashboard extends React.Component {
  // leanpub-start-insert
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuid.v4(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuid.v4(),
        elapsed: 1273998,
        runningSince: null,
      },
    ],
  };
  // leanpub-end-insert

  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          {/* leanpub-start-insert */}
          <EditableTimerList
            timers={this.state.timers}
          />
          {/* leanpub-end-insert */}
          <ToggleableTimerForm />
        </div>
      </div>
    );
  }
}

class ToggleableTimerForm extends React.Component {
  // leanpub-start-insert
  state = {
    isOpen: false,
  };
  // leanpub-end-insert

  // leanpub-start-insert
  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };
  // leanpub-end-insert

  render() {
    // leanpub-start-insert
    if (this.state.isOpen) {
      // leanpub-end-insert
      return (
        <TimerForm />
      );
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          {/* leanpub-start-insert */}
          <button
            className='ui basic button icon'
            onClick={this.handleFormOpen}
          >
          {/* leanpub-end-insert */}
            <i className='plus icon' />
          </button>
        </div>
      );
    }
  }
}

class EditableTimerList extends React.Component {
  render() {
    // leanpub-start-insert
    const timers = this.props.timers.map((timer) => (
      <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
      />
    ));
    return (
      <div id='timers'>
        {timers}
      </div>
    );
    // leanpub-end-insert
  }
}

class EditableTimer extends React.Component {
  // leanpub-start-insert
  state = {
    editFormOpen: false,
  };
  // leanpub-end-insert

  render() {
    // leanpub-start-insert
    if (this.state.editFormOpen) {
      // leanpub-end-insert
      return (
        <TimerForm
          //leanpub-start-insert
          id={this.props.id}
          //leanpub-end-insert
          title={this.props.title}
          project={this.props.project}
        />
      );
    } else {
      return (
        <Timer
          //leanpub-start-insert
          id={this.props.id}
          //leanpub-end-insert
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
        />
      );
    }
  }
}

class Timer extends React.Component {
  render() {
    const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>
            {this.props.title}
          </div>
          <div className='meta'>
            {this.props.project}
          </div>
          <div className='center aligned description'>
            <h2>
              {elapsedString}
            </h2>
          </div>
          <div className='extra content'>
            <span className='right floated edit icon'>
              <i className='edit icon' />
            </span>
            <span className='right floated trash icon'>
              <i className='trash icon' />
            </span>
          </div>
        </div>
        <div className='ui bottom attached blue basic button'>
          Start
        </div>
      </div>
    );
  }
}

class TimerForm extends React.Component {
  // leanpub-start-insert
  state = {
    title: this.props.title || '',
    project: this.props.project || '',
  };
  // leanpub-end-insert

  // leanpub-start-insert
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  // leanpub-end-insert

  // leanpub-start-insert
  handleProjectChange = (e) => {
    this.setState({ project: e.target.value });
  };
  // leanpub-end-insert

  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              {/* leanpub-start-insert */}
              <input
                type='text'
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
              {/* leanpub-end-insert */}
            </div>
            <div className='field'>
              <label>Project</label>
              {/* leanpub-start-insert */}
              <input
                type='text'
                value={this.state.project}
                onChange={this.handleProjectChange}
              />
              {/* leanpub-end-insert */}
            </div>
            <div className='ui two bottom attached buttons'>
              <button className='ui basic blue button'>
                {submitText}
              </button>
              <button className='ui basic red button'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <TimersDashboard />,
  document.getElementById('content')
);
