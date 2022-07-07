import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Validates the first half of an email address.
const validateText = (text) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = [
  'wait',
  'hello',
  'if-you-are-reading-this',
  'that-means',
  'you-waited',
  'congratulations',
  'you-passed-the-marshmallow-test',
  'by-the-way',
  'you-can-email-me-anything-at-any-time',
  'or-is-it-anytime',
  'and-i-will-try-my-best-to-respond',
  'please-reach-out',
  'especially-if-you-find-any-bugs',
  'i-will-compensate',
  'or-anything-you-want-as-long-as-your-request-is-reasonable',
  'do-you-like-my-website',
  'thank-you-if-you-said-yes',
  'thank-you-too-if-you-said-no',
  'please-let-me-know-if-you-have-any-suggestions-for-improvements'
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const EmailLink = ({ loopMessage }) => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(0); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(() => {
    let newIdx = idx;
    let newChar = char;
    if (char - hold >= messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === messages.length) {
      if (loopMessage) {
        updateIter(0);
        updateChar(0);
      } else {
        setIsActive(false);
      }
    } else {
      updateMessage(messages[newIdx].slice(0, newChar));
      updateIter(newIdx);
      updateChar(newChar + 1);
    }
  }, isActive ? delay : null);

  return (
    <div
      className="inline-container"
      style={validateText(message) ? {} : { color: 'red' }}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
    >
      <a href={validateText(message) ? `mailto:${message}@alan-matthew.com` : ''}>
        <span>{message}</span>
        <span>@alan-matthew.com</span>
      </a>
    </div>
  );
};

EmailLink.defaultProps = {
  loopMessage: false,
};

EmailLink.propTypes = {
  loopMessage: PropTypes.bool,
};

export default EmailLink;
