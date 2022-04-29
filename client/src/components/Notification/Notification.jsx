import { connect } from 'react-redux';

const Notification = ({ error, messages }) => {
  return (
    <div
      className={`z-40 fixed w-[calc(100%)] h-fit p-2 flex items-center justify-center ${
        error ? 'bg-red-500' : 'bg-green-500'
      } ${!messages.length && 'opacity-0'} transition-all duration-500`}
    >
      {messages.map(message => (
        <p
          className={`text-lg text-zinc-800  ${
            !messages.length && 'opacity-0'
          }`}
        >
          {message}
        </p>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  messages: state.notification.messages,
  error: state.notification.error,
});

export default connect(mapStateToProps)(Notification);
