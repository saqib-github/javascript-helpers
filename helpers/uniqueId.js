const UniqueId = function generateUID() {
    var now = new Date();
    return (
      'EQUIP' +
      now.getFullYear() +
      now.getMonth() +
      now.getHours() +
      now.getMinutes() +
      now.getSeconds() +
      now.getMilliseconds()
    );
  };
  export default UniqueId;
// import UniqueId from '../UniqueId';
// let UniqueId = UniqueId