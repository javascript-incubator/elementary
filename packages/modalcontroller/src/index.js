import React, { createContext, Component } from 'react';

const ModalContext = createContext('modal');

export const withModalControllerProvider = C =>
  class ModalController extends Component {
    state = {
      modal: null,
      addModal: ModalComponent =>
        this.setState({
          modal: ModalComponent,
        }),
    };

    closeModal() {
      this.setState({ modal: null });
    }

    render() {
      const { modal: ModalComponent } = this.state;
      return (
        <ModalContext.Provider value={this.state}>
          {ModalComponent && (
            <ModalComponent closeModal={_ => this.closeModal()} />
          )}
          <C {...this.props} />
        </ModalContext.Provider>
      );
    }
  };

export const withModalControllerConsumer = C => props => (
  <ModalContext.Consumer>
    {({ addModal }) => <C {...props} addModal={addModal} />}
  </ModalContext.Consumer>
);
