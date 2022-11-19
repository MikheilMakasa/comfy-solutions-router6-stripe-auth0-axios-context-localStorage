// domain/.netlify/functions/hello

// you can sat up an API with these functions
// const items = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Susan' },
// ];
// then body: JSON.stringify(items),

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: 'Hello World',
  };
};
