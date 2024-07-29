import React, { useState, useEffect } from 'react';

const PhoneApp = () => {
  const [page, setPage] = useState('dialer');
  const [number, setNumber] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNumberClick = (digit) => {
    setNumber(prevNumber => prevNumber + digit);
  };

  const handleDelete = () => {
    setNumber(prevNumber => prevNumber.slice(0, -1));
  };

  const handleCall = () => {
    if (number) {
      setPage('calling');
    }
  };

  const handleEndCall = () => {
    setPage('profile');
    setNumber('');
  };

  const renderDialer = () => (
    <div style={styles.dialer}>
      <div style={styles.phoneToCall}>
        <h2 style={styles.phoneNumber}>{number || 'Dial the number'}</h2>
        {number && (
          <button style={styles.deleteButton} onClick={handleDelete}>
            <i className="fa fa-times"></i>
          </button>
        )}
      </div>
      <div style={styles.phoneDialpad}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map(digit => (
          <button key={digit} style={styles.dialpadButton} onClick={() => handleNumberClick(digit)}>
            {digit}
            <span style={styles.subText}>{getSubText(digit)}</span>
          </button>
        ))}
        <button style={styles.dialpadButton}><i className="fa fa-user-circle-o"></i></button>
        <button style={{...styles.dialpadButton, backgroundColor: 'rgb(12, 101, 16)'}} onClick={handleCall}>
          <i className="fa fa-phone" style={{color: '#FAFAFA'}}></i>
        </button>
      </div>
      <div style={styles.addOns}>
        <button style={styles.addOnButton}><i className="fa fa-clock-o"></i></button>
        <button style={{...styles.addOnButton, backgroundColor: '#609'}}><i className="fa fa-home"></i></button>
        <button style={styles.addOnButton}><i className="fa fa-user-plus"></i></button>
      </div>
    </div>
  );

  const renderCalling = () => (
    <div style={styles.calling}>
      <div style={styles.callingInfo}>
        <h2 style={styles.callingName}>Calling</h2>
        <p style={styles.callingNumber}>{number}</p>
        <small style={styles.callingStatus}>Calling</small>
      </div>
      <div style={styles.callIcons}>
        {['keyboard-o', 'volume-control-phone', 'user-plus', 'pause', 'headphones', 'bell-slash'].map(icon => (
          <button key={icon} style={styles.callIconButton}>
            <i className={`fa fa-${icon}`}></i>
            <span style={styles.iconText}>{icon.replace('-', ' ')}</span>
          </button>
        ))}
      </div>
      <button style={styles.endCallButton} onClick={handleEndCall}>
        <i className="fa fa-phone" style={styles.endCallIcon}></i>
      </button>
    </div>
  );

  const renderProfile = () => (
    <div style={styles.profile}>
      <h2 style={styles.profileTitle}>Profile Page</h2>
      <p style={styles.profileText}>Welcome to your profile!</p>
      <button style={styles.backToDialerButton} onClick={() => setPage('dialer')}>Back to Dialer</button>
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.topBar}>
        <div style={styles.barIcons}>
          <span><i className="fa fa-lock"></i></span>
          <div style={styles.rightIcons}>
            <span><i className="fa fa-wifi"></i></span>
            <span><i className="fa fa-signal"></i></span>
            <span><small>51%</small><i className="fa fa-battery-half"></i></span>
            <span><small>{currentTime}</small></span>
          </div>
        </div>
      </div>
      {page === 'dialer' && renderDialer()}
      {page === 'calling' && renderCalling()}
      {page === 'profile' && renderProfile()}
    </div>
  );
};

const getSubText = (digit) => {
  const subTexts = {
    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno',
    '7': 'pqrs', '8': 'tuv', '9': 'wxyz', '*': 'P', '0': '+', '#': 'W'
  };
  return subTexts[digit] || '';
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '350px',
    height: '100vh',
    maxHeight: '600px',
    margin: '0 auto',
    backgroundColor: '#282832',
    backgroundImage: 'url("https://cloud.githubusercontent.com/assets/8037580/18605179/85a080d2-7cbd-11e6-9079-ec09a8024662.png")',
    backgroundRepeat: 'repeat',
    border: '15px solid #000',
    borderRadius: '20px',
    position: 'relative',
    boxShadow: '0 2px 5px rgba(75, 75, 75, .8), 0 2px 5px rgba(75, 75, 75, .8)',
    fontFamily: '"Archivo Narrow", sans-serif',
    overflow: 'hidden',
  },
  topBar: {
    backgroundColor: 'rgba(75, 75, 75, .8)',
    position: 'absolute',
    width: '100%',
    height: '25px',
    zIndex: 20,
  },
  barIcons: {
    padding: '3px 10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#FFF',
  },
  rightIcons: {
    display: 'flex',
    gap: '10px',
  },
  dialer: {
    padding: '30px 20px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  phoneToCall: {
    textAlign: 'center',
    marginBottom: '20px',
    position: 'relative',
  },
  phoneNumber: {
    fontSize: '25px',
    color: '#FAFAFA',
    margin: 0,
  },
  deleteButton: {
    position: 'absolute',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#FAFAFA',
    fontSize: '20px',
    cursor: 'pointer',
  },
  phoneDialpad: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
    marginBottom: '20px',
  },
  dialpadButton: {
    backgroundColor: 'rgba(75, 75, 75, .9)',
    border: '1px solid rgba(238, 238, 238, .2)',
    borderRadius: '20px',
    width: '100%',
    aspectRatio: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FAFAFA',
    fontSize: '24px',
    cursor: 'pointer',
  },
  subText: {
    fontSize: '10px',
  },
  addOns: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  addOnButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#FFF',
    fontSize: '24px',
    cursor: 'pointer',
  },
  calling: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '50px 20px 20px',
    backgroundColor: 'rgba(75, 75, 75, .8)',
  },
  callingInfo: {
    textAlign: 'center',
    color: '#FAFAFA',
  },
  callingName: {
    fontSize: '28px',
    margin: '0 0 10px',
  },
  callingNumber: {
    fontSize: '18px',
    margin: '0 0 20px',
  },
  callingStatus: {
    backgroundColor: '#C11B17',
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '14px',
  },
  callIcons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  callIconButton: {
    backgroundColor: 'transparent',
    border: '1px solid rgba(255, 255, 255, .6)',
    borderRadius: '25px',
    width: '100%',
    aspectRatio: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    fontSize: '24px',
    cursor: 'pointer',
  },
  iconText: {
    fontSize: '12px',
    marginTop: '5px',
  },
  endCallButton: {
    backgroundColor: '#C11B17',
    border: 'none',
    width: '100%',
    padding: '15px',
    cursor: 'pointer',
  },
  endCallIcon: {
    transform: 'rotate(135deg)',
    fontSize: '40px',
    color: '#FFF',
  },
  profile: {
    padding: '50px 20px',
    textAlign: 'center',
    color: '#FAFAFA',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileTitle: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  profileText: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  backToDialerButton: {
    backgroundColor: '#609',
    color: '#FFF',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default PhoneApp;