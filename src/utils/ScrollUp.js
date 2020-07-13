import raf from 'raf';
import React, {Component} from 'react'


export default class ScrollUp extends Component {


  static defaultProps = {
    scrollInHeight: 4000
  };

  fixedStyle = {
      position: 'fixed',
      WebkitTransition: 'all .2s ease-in-out',
      MozTransition: 'all .2s ease-in-out',
      OTransition: 'all .2s ease-in-out',
      transition: 'all .2s ease-in-out',
      top: '90%',
      left: '85%',
      right: 0,
      zIndex: 1
  };

  hiddenStyle = {
      WebkitTransform: 'translateY(-1000000%)',
      MsTransform: 'translateY(-1000000%)',
      transform: 'translateY(-1000000%)'
  };

  scrolledInStyle = {
      WebkitTransform: 'translateY(0)',
      MsTransform: 'translateY(0)',
      transform: 'translateY(0)'
  };

  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    };

    this.handlingScrollUpdate = false;
  }

  getScrollY = () => {
    if (window.pageYOffset !== undefined) {
      return window.pageYOffset
    } else if (window.scrollTop !== undefined) {
      return window.scrollTop
    } else {
      return (document.documentElement || document.body.parentNode || document.body).scrollTop
    }
  }

  handleScroll = () => {
     if (!this.handlingScrollUpdate) {
      this.handlingScrollUpdate = true;
      raf(this.update);
    }
  }

  update = () => {
    let currentScrollY = this.getScrollY();
    console.log(currentScrollY);
    console.log(this.props.scrollInHeight);

    this.setState({
      hidden: currentScrollY < this.props.scrollInHeight
    });

    this.handlingScrollUpdate = false;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    let renderStyle = this.fixedStyle;
    renderStyle = this.state.hidden ?
        {...renderStyle, ...this.hiddenStyle} :
        {...renderStyle, ...this.scrolledInStyle};

    return (
        <div className="scroll-in-nav" ref="scrollnav" style={renderStyle}>
          {this.props.children}
        </div>
    );
    }
}