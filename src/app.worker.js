export default () => {
    self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
        if (!e) return;
        let { users, type } = e.data;
  
        if(type === "asc") {
          users = users.sort((a, b) => a.commentCount - b.commentCount);
        }
  
        postMessage(users);
    })
  }