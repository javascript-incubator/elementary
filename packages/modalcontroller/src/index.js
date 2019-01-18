import React, { createContext, Component } from 'react';
import ReactDOM from 'react-dom';

const ModalContext = createContext('modal');
/* eslint-disable one-var */

const uuidv4 = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

export const withModalControllerProvider = C => props => {
  const uid = uuidv4();
  return (
    <ModalContext.Provider value={{ modalID: uid }}>
      <div id={uid} />
      <C {...props} />
    </ModalContext.Provider>
  );
};

export const withModalControllerConsumer = C =>
  class ModalComponentConsumer extends Component {
    state = {
      modal: null,
    };

    closeModal() {
      this.setState({ modal: null });
    }

    addModal(ModalComponent) {
      this.setState({
        modal: ModalComponent,
      });
    }

    render() {
      return (
        <ModalContext.Consumer>
          {({ modalID }) => (
            <>
              <C
                {...this.props}
                addModal={(...args) => this.addModal(...args)}
              />
              {this.state.modal &&
                ReactDOM.createPortal(
                  <this.state.modal closeModal={_ => this.closeModal()} />,
                  document.getElementById(modalID),
                )}
            </>
          )}
        </ModalContext.Consumer>
      );
    }
  };
